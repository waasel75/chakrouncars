'use strict';
/* ===== ADMIN/SETTINGS PANEL UI LANGUAGE (nav + headers only) ===== */
const PANEL_LANGS = {
  fr: { dir:'ltr', brand:'Paramètres', 'nav-cars':'Voitures', 'nav-res':'Réservations', 'nav-chatbot':'Chatbot',
    'nav-offers':'Offres & Promos', 'nav-site':'Paramètres site', 'nav-security':'Sécurité',
    'view-site':'Voir le site', dashboard:'Dashboard', settings:'Paramètres', logout:'Déconnexion',
    'nav-dash':'Dashboard', 'nav-stats':'Statistiques', 'nav-chats':'Conversations', 'chatbot-label':'Chatbot',
    'h-cars-t':'Gestion des véhicules', 'h-cars-s':'Modifiez les photos, prix et informations de chaque véhicule',
    'h-res-t':'Gestion des réservations', 'h-res-s':'Bloquez ou libérez des dates pour chaque véhicule',
    'h-cb-t':'🤖 Paramètres Chatbot', 'h-cb-s':'Configurez et contrôlez le chatbot de votre site',
    'h-of-t':'Offres & Promotions', 'h-of-s':'Créez des offres spéciales sur tous les véhicules ou sur un véhicule précis',
    'h-site-t':'Paramètres du site', 'h-site-s':'Configurez les informations générales de MarocDrive',
    'h-sec-t':'🔐 Sécurité', 'h-sec-s':"Identifiants d'accès et question de récupération en cas de mot de passe oublié",
    titles:{dashboard:'Dashboard',reservations:'Réservations',stats:'Statistiques',chats:'Conversations'} },
  en: { dir:'ltr', brand:'Settings', 'nav-cars':'Cars', 'nav-res':'Reservations', 'nav-chatbot':'Chatbot',
    'nav-offers':'Offers & Promos', 'nav-site':'Site settings', 'nav-security':'Security',
    'view-site':'View site', dashboard:'Dashboard', settings:'Settings', logout:'Log out',
    'nav-dash':'Dashboard', 'nav-stats':'Statistics', 'nav-chats':'Conversations', 'chatbot-label':'Chatbot',
    'h-cars-t':'Vehicle management', 'h-cars-s':'Edit photos, prices and info for each vehicle',
    'h-res-t':'Reservation management', 'h-res-s':'Block or free up dates for each vehicle',
    'h-cb-t':'🤖 Chatbot settings', 'h-cb-s':'Configure and control your site chatbot',
    'h-of-t':'Offers & Promotions', 'h-of-s':'Create special offers on all vehicles or a specific one',
    'h-site-t':'Site settings', 'h-site-s':'Configure MarocDrive general information',
    'h-sec-t':'🔐 Security', 'h-sec-s':'Login credentials and recovery question in case you forget your password',
    titles:{dashboard:'Dashboard',reservations:'Reservations',stats:'Statistics',chats:'Conversations'} },
  es: { dir:'ltr', brand:'Ajustes', 'nav-cars':'Vehículos', 'nav-res':'Reservas', 'nav-chatbot':'Chatbot',
    'nav-offers':'Ofertas y Promos', 'nav-site':'Ajustes del sitio', 'nav-security':'Seguridad',
    'view-site':'Ver el sitio', dashboard:'Panel', settings:'Ajustes', logout:'Cerrar sesión',
    'nav-dash':'Panel', 'nav-stats':'Estadísticas', 'nav-chats':'Conversaciones', 'chatbot-label':'Chatbot',
    'h-cars-t':'Gestión de vehículos', 'h-cars-s':'Edita fotos, precios e información de cada vehículo',
    'h-res-t':'Gestión de reservas', 'h-res-s':'Bloquea o libera fechas para cada vehículo',
    'h-cb-t':'🤖 Ajustes del Chatbot', 'h-cb-s':'Configura y controla el chatbot de tu sitio',
    'h-of-t':'Ofertas y Promociones', 'h-of-s':'Crea ofertas especiales en todos los vehículos o en uno específico',
    'h-site-t':'Ajustes del sitio', 'h-site-s':'Configura la información general de MarocDrive',
    'h-sec-t':'🔐 Seguridad', 'h-sec-s':'Credenciales de acceso y pregunta de recuperación por si olvidas tu contraseña',
    titles:{dashboard:'Panel',reservations:'Reservas',stats:'Estadísticas',chats:'Conversaciones'} },
  ar: { dir:'rtl', brand:'الإعدادات', 'nav-cars':'السيارات', 'nav-res':'الحجوزات', 'nav-chatbot':'الشات بوت',
    'nav-offers':'العروض والترويجات', 'nav-site':'إعدادات الموقع', 'nav-security':'الأمان',
    'view-site':'عرض الموقع', dashboard:'لوحة التحكم', settings:'الإعدادات', logout:'تسجيل الخروج',
    'nav-dash':'لوحة التحكم', 'nav-stats':'الإحصائيات', 'nav-chats':'المحادثات', 'chatbot-label':'الشات بوت',
    'h-cars-t':'إدارة السيارات', 'h-cars-s':'عدّل الصور والأسعار ومعلومات كل سيارة',
    'h-res-t':'إدارة الحجوزات', 'h-res-s':'حظر أو تحرير التواريخ لكل سيارة',
    'h-cb-t':'🤖 إعدادات الشات بوت', 'h-cb-s':'تحكم في الشات بوت الخاص بموقعك',
    'h-of-t':'العروض والترويجات', 'h-of-s':'أنشئ عروضاً خاصة على جميع السيارات أو على سيارة محددة',
    'h-site-t':'إعدادات الموقع', 'h-site-s':'تحكم في المعلومات العامة لـ MarocDrive',
    'h-sec-t':'🔐 الأمان', 'h-sec-s':'معلومات تسجيل الدخول وسؤال الاسترجاع في حال نسيان كلمة المرور',
    titles:{dashboard:'لوحة التحكم',reservations:'الحجوزات',stats:'الإحصائيات',chats:'المحادثات'} },
};

function applyPanelLang(code) {
  const L = PANEL_LANGS[code] || PANEL_LANGS.fr;
  localStorage.setItem('md_panel_lang', code);
  document.documentElement.lang = code;
  document.documentElement.dir = L.dir;
  document.querySelectorAll('[data-pt]').forEach(el => {
    const v = L[el.dataset.pt];
    if (v) el.textContent = v;
  });
  const sel = document.getElementById('panelLangSel');
  if (sel) sel.value = code;
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle && window.currentAdminTab) pageTitle.textContent = L.titles[window.currentAdminTab] || pageTitle.textContent;
}

document.addEventListener('DOMContentLoaded', () => {
  applyPanelLang(localStorage.getItem('md_panel_lang') || 'fr');
});
