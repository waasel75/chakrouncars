-- ================================================================
--  CHAKROUN CARS — Supabase setup
--  A exécuter une seule fois dans: Supabase → SQL Editor → New query
-- ================================================================

create table if not exists kv_store (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);

-- Auto-update updated_at on every write
create or replace function kv_store_touch() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists kv_store_touch_trigger on kv_store;
create trigger kv_store_touch_trigger
  before update on kv_store
  for each row execute function kv_store_touch();

-- Open read/write via the anon key (same trust model as the previous
-- Firebase rules: { ".read": true, ".write": true }).
-- The app itself is protected by its own admin login (js/auth.js).
alter table kv_store enable row level security;

drop policy if exists "anon full access" on kv_store;
create policy "anon full access" on kv_store
  for all
  to anon
  using (true)
  with check (true);
