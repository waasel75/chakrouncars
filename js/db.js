'use strict';

// ============================================================
//  SUPABASE SYNC — remplissez supabaseUrl + supabaseAnonKey dans config.js
//  1. Allez sur https://supabase.com → New project
//  2. SQL Editor → exécutez le script fourni (kv_store table)
//  3. Project Settings → API → copiez "Project URL" et "anon public" key
// ============================================================
const SB_URL = (typeof SITE !== 'undefined' && SITE.supabaseUrl) ? SITE.supabaseUrl : 'YOUR_PROJECT';
const SB_KEY = (typeof SITE !== 'undefined' && SITE.supabaseAnonKey) ? SITE.supabaseAnonKey : 'YOUR_KEY';
const SB_READY = !SB_URL.includes('YOUR_PROJECT') && !SB_KEY.includes('YOUR_KEY');

const SYNC_KEYS = [
  'md_cars','md_reservations','md_offers','md_blocks','md_vehicles',
  'md_site_settings','md_chat_conversations','md_chat_config','md_booking_config'
];

function _sbHeaders(extra) {
  return Object.assign({ 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}`, 'Content-Type': 'application/json' }, extra || {});
}

async function sbGetKV(key) {
  if (!SB_READY) return null;
  const r = await fetch(`${SB_URL}/rest/v1/kv_store?key=eq.${encodeURIComponent(key)}&select=value`, { headers: _sbHeaders() });
  if (!r.ok) return null;
  const rows = await r.json();
  return rows.length ? rows[0].value : null;
}

async function sbSetKV(key, val) {
  if (!SB_READY) return;
  await fetch(`${SB_URL}/rest/v1/kv_store?on_conflict=key`, {
    method: 'POST',
    headers: _sbHeaders({ 'Prefer': 'resolution=merge-duplicates' }),
    body: JSON.stringify({ key, value: val })
  });
}

async function sbDelKV(key) {
  if (!SB_READY) return;
  await fetch(`${SB_URL}/rest/v1/kv_store?key=eq.${encodeURIComponent(key)}`, { method: 'DELETE', headers: _sbHeaders() });
}

window.SB_READY = SB_READY;
window.sbGetKV = sbGetKV;
window.sbSetKV = sbSetKV;
window.sbDelKV = sbDelKV;

// Intercept localStorage writes → push to Supabase automatically
const _lsSet = localStorage.setItem.bind(localStorage);
const _lsRem = localStorage.removeItem.bind(localStorage);

localStorage.setItem = function(key, val) {
  _lsSet(key, val);
  if (SYNC_KEYS.includes(key) && SB_READY) {
    try { sbSetKV(key, JSON.parse(val)).catch(() => {}); } catch(e) {}
  }
};

localStorage.removeItem = function(key) {
  _lsRem(key);
  if (SYNC_KEYS.includes(key) && SB_READY) {
    sbDelKV(key).catch(() => {});
  }
};

// On page load: pull latest data from Supabase → update localStorage → fire event
(async function syncFromSupabase() {
  if (!SB_READY) return;
  try {
    let changed = false;
    for (const key of SYNC_KEYS) {
      const data = await sbGetKV(key);
      if (data !== null && data !== undefined) {
        const newVal = JSON.stringify(data);
        if (localStorage.getItem(key) !== newVal) {
          _lsSet(key, newVal);
          changed = true;
        }
      }
    }
    if (changed) window.dispatchEvent(new Event('db-synced'));
  } catch (e) {
    console.warn('[DB] Supabase sync failed, using local data:', e.message);
  }
})();
