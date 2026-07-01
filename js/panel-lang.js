'use strict';
/* ===== ADMIN/SETTINGS PANEL UI LANGUAGE ===== */
const PANEL_LANGS = {
  fr: { dir:'ltr', brand:'Paramètres', 'nav-cars':'Voitures', 'nav-res':'Réservations', 'nav-chatbot':'Chatbot',
    'nav-offers':'Offres & Promos', 'nav-site':'Paramètres site', 'nav-security':'Sécurité',
    'view-site':'Voir le site', dashboard:'Dashboard', settings:'Paramètres', logout:'Déconnexion',
    'nav-dash':'Dashboard', 'nav-stats':'Statistiques', 'nav-chats':'Conversations', 'chatbot-label':'Chatbot',
    'nav-vehicles':'Véhicules', 'nav-vidange':'Vidange',
    'h-cars-t':'Gestion des véhicules', 'h-cars-s':'Modifiez les photos, prix et informations de chaque véhicule',
    'h-res-t':'Gestion des réservations', 'h-res-s':'Bloquez ou libérez des dates pour chaque véhicule',
    'h-cb-t':'🤖 Paramètres Chatbot', 'h-cb-s':'Configurez et contrôlez le chatbot de votre site',
    'h-of-t':'Offres & Promotions', 'h-of-s':'Créez des offres spéciales sur tous les véhicules ou sur un véhicule précis',
    'h-site-t':'Paramètres du site', 'h-site-s':'Configurez les informations générales de votre site',
    'h-sec-t':'🔐 Sécurité', 'h-sec-s':"Identifiants d'accès et question de récupération en cas de mot de passe oublié",
    'st-pending':'En attente','st-payment_pending':'Paiement en cours','st-confirmed':'Confirmé','st-completed':'Terminé','st-cancelled':'Annulé',
    'veh-available':'Disponible','veh-reserved':'Réservé','veh-maintenance':'Chez le mécanicien','veh-accident':'Accidenté',
    'vf-name':'Nom du véhicule','vf-plate':'Plaque','vf-brand':'Marque','vf-model':'Modèle','vf-year':'Année',
    'vf-color':'Couleur','vf-fuel':'Carburant','vf-gearbox':'Boîte','vf-price':'Prix/jour (MAD)','vf-mileage':'Kilométrage actuel',
    'vf-lastvidange':'Dernière vidange (km)','vf-interval':'Intervalle vidange (km)','vf-insurance':'Assurance — échéance','vf-visit':'Visite technique — échéance',
    titles:{dashboard:'Dashboard',reservations:'Réservations',vehicles:'🚙 Véhicules',vidange:'🛢️ Vidange',stats:'Statistiques',chats:'Conversations'} },
  en: { dir:'ltr', brand:'Settings', 'nav-cars':'Cars', 'nav-res':'Reservations', 'nav-chatbot':'Chatbot',
    'nav-offers':'Offers & Promos', 'nav-site':'Site settings', 'nav-security':'Security',
    'view-site':'View site', dashboard:'Dashboard', settings:'Settings', logout:'Log out',
    'nav-dash':'Dashboard', 'nav-stats':'Statistics', 'nav-chats':'Conversations', 'chatbot-label':'Chatbot',
    'nav-vehicles':'Vehicles', 'nav-vidange':'Oil change',
    'h-cars-t':'Vehicle management', 'h-cars-s':'Edit photos, prices and info for each vehicle',
    'h-res-t':'Reservation management', 'h-res-s':'Block or free up dates for each vehicle',
    'h-cb-t':'🤖 Chatbot settings', 'h-cb-s':'Configure and control your site chatbot',
    'h-of-t':'Offers & Promotions', 'h-of-s':'Create special offers on all vehicles or a specific one',
    'h-site-t':'Site settings', 'h-site-s':'Configure your site general information',
    'h-sec-t':'🔐 Security', 'h-sec-s':'Login credentials and recovery question in case you forget your password',
    'st-pending':'Pending','st-payment_pending':'Payment in progress','st-confirmed':'Confirmed','st-completed':'Completed','st-cancelled':'Cancelled',
    'veh-available':'Available','veh-reserved':'Reserved','veh-maintenance':'At the mechanic','veh-accident':'In an accident',
    'vf-name':'Vehicle name','vf-plate':'Plate','vf-brand':'Brand','vf-model':'Model','vf-year':'Year',
    'vf-color':'Color','vf-fuel':'Fuel','vf-gearbox':'Gearbox','vf-price':'Price/day (MAD)','vf-mileage':'Current mileage',
    'vf-lastvidange':'Last oil change (km)','vf-interval':'Oil change interval (km)','vf-insurance':'Insurance — due date','vf-visit':'Technical inspection — due date',
    titles:{dashboard:'Dashboard',reservations:'Reservations',vehicles:'🚙 Vehicles',vidange:'🛢️ Oil change',stats:'Statistics',chats:'Conversations'} },
  es: { dir:'ltr', brand:'Ajustes', 'nav-cars':'Vehículos', 'nav-res':'Reservas', 'nav-chatbot':'Chatbot',
    'nav-offers':'Ofertas y Promos', 'nav-site':'Ajustes del sitio', 'nav-security':'Seguridad',
    'view-site':'Ver el sitio', dashboard:'Panel', settings:'Ajustes', logout:'Cerrar sesión',
    'nav-dash':'Panel', 'nav-stats':'Estadísticas', 'nav-chats':'Conversaciones', 'chatbot-label':'Chatbot',
    'nav-vehicles':'Vehículos', 'nav-vidange':'Cambio de aceite',
    'h-cars-t':'Gestión de vehículos', 'h-cars-s':'Edita fotos, precios e información de cada vehículo',
    'h-res-t':'Gestión de reservas', 'h-res-s':'Bloquea o libera fechas para cada vehículo',
    'h-cb-t':'🤖 Ajustes del Chatbot', 'h-cb-s':'Configura y controla el chatbot de tu sitio',
    'h-of-t':'Ofertas y Promociones', 'h-of-s':'Crea ofertas especiales en todos los vehículos o en uno específico',
    'h-site-t':'Ajustes del sitio', 'h-site-s':'Configura la información general de tu sitio',
    'h-sec-t':'🔐 Seguridad', 'h-sec-s':'Credenciales de acceso y pregunta de recuperación por si olvidas tu contraseña',
    titles:{dashboard:'Panel',reservations:'Reservas',vehicles:'🚙 Vehículos',vidange:'🛢️ Cambio de aceite',stats:'Estadísticas',chats:'Conversaciones'} },
  ar: { dir:'rtl', brand:'الإعدادات', 'nav-cars':'السيارات', 'nav-res':'الحجوزات', 'nav-chatbot':'الشات بوت',
    'nav-offers':'العروض والترويجات', 'nav-site':'إعدادات الموقع', 'nav-security':'الأمان',
    'view-site':'عرض الموقع', dashboard:'لوحة التحكم', settings:'الإعدادات', logout:'تسجيل الخروج',
    'nav-dash':'لوحة التحكم', 'nav-stats':'الإحصائيات', 'nav-chats':'المحادثات', 'chatbot-label':'الشات بوت',
    'nav-vehicles':'السيارات', 'nav-vidange':'الفيدانج',
    'h-cars-t':'إدارة السيارات', 'h-cars-s':'عدّل الصور والأسعار ومعلومات كل سيارة',
    'h-res-t':'إدارة الحجوزات', 'h-res-s':'حظر أو تحرير التواريخ لكل سيارة',
    'h-cb-t':'🤖 إعدادات الشات بوت', 'h-cb-s':'تحكم في الشات بوت الخاص بموقعك',
    'h-of-t':'العروض والترويجات', 'h-of-s':'أنشئ عروضاً خاصة على جميع السيارات أو على سيارة محددة',
    'h-site-t':'إعدادات الموقع', 'h-site-s':'تحكم في المعلومات العامة لموقعك',
    'h-sec-t':'🔐 الأمان', 'h-sec-s':'معلومات تسجيل الدخول وسؤال الاسترجاع في حال نسيان كلمة المرور',
    'st-pending':'فالانتظار','st-payment_pending':'الدفع جاري','st-confirmed':'مؤكد','st-completed':'منتهي','st-cancelled':'ملغى',
    'veh-available':'متاحة','veh-reserved':'محجوزة','veh-maintenance':'عند المكانيك','veh-accident':'حادثة',
    'vf-name':'اسم السيارة','vf-plate':'الماتريكول','vf-brand':'الماركة','vf-model':'الموديل','vf-year':'السنة',
    'vf-color':'الكولور','vf-fuel':'الكاربوران','vf-gearbox':'البواط','vf-price':'السعر/اليوم (MAD)','vf-mileage':'الكيلومتراج الحالي',
    'vf-lastvidange':'آخر فيدانج (km)','vf-interval':'إنترفال الفيدانج (km)','vf-insurance':'التأمين — تاريخ الانتهاء','vf-visit':'الزيارة التقنية — تاريخ الانتهاء',
    titles:{dashboard:'لوحة التحكم',reservations:'الحجوزات',vehicles:'🚙 السيارات',vidange:'🛢️ الفيدانج',stats:'الإحصائيات',chats:'المحادثات'} },
};

/* Clés supplémentaires (CRM) fusionnées sans toucher aux tables de base */
Object.assign(PANEL_LANGS.fr, {'nav-clients':'Clients','nav-availability':'Disponibilité','admin-panel':'Admin Panel','crm-h':'Connexion CRM','crm-sub':'Accès réservé aux administrateurs'});
Object.assign(PANEL_LANGS.en, {'nav-clients':'Clients','nav-availability':'Availability','admin-panel':'Admin Panel','crm-h':'CRM Login','crm-sub':'Administrators only'});
Object.assign(PANEL_LANGS.es, {'nav-clients':'Clientes','nav-availability':'Disponibilidad','admin-panel':'Panel Admin','crm-h':'Acceso CRM','crm-sub':'Solo administradores'});
Object.assign(PANEL_LANGS.ar, {'nav-clients':'العملاء','nav-availability':'التوفر','admin-panel':'لوحة الأدمين','crm-h':'دخول CRM','crm-sub':'مخصص للمشرفين فقط'});
PANEL_LANGS.fr.titles = Object.assign({clients:'Clients',availability:'Disponibilité'}, PANEL_LANGS.fr.titles);
PANEL_LANGS.en.titles = Object.assign({clients:'Clients',availability:'Availability'}, PANEL_LANGS.en.titles);
PANEL_LANGS.es.titles = Object.assign({clients:'Clientes',availability:'Disponibilidad'}, PANEL_LANGS.es.titles);
PANEL_LANGS.ar.titles = Object.assign({clients:'العملاء',availability:'التوفر'}, PANEL_LANGS.ar.titles);

function curLang() { return localStorage.getItem('md_panel_lang') || 'fr'; }
function T(key) { const L = PANEL_LANGS[curLang()] || PANEL_LANGS.fr; return L[key] != null ? L[key] : (PANEL_LANGS.fr[key] || key); }

function applyPanelLang(code) {
  const L = PANEL_LANGS[code] || PANEL_LANGS.fr;
  localStorage.setItem('md_panel_lang', code);
  document.documentElement.lang = code;
  document.documentElement.dir = L.dir;
  document.querySelectorAll('[data-pt]').forEach(el => {
    const v = L[el.dataset.pt];
    if (v) el.textContent = v;
  });
  document.querySelectorAll('#panelLangSel, .panelLangSel').forEach(sel => { sel.value = code; });
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle && window.currentAdminTab) pageTitle.textContent = (L.titles && L.titles[window.currentAdminTab]) || pageTitle.textContent;
  // Titre de la barre du CRM (section active)
  const crmTitle = document.getElementById('topbarTitle');
  if (crmTitle && window.currentCrmSection && L.titles && L.titles[window.currentCrmSection]) crmTitle.textContent = L.titles[window.currentCrmSection];
  if (window.currentAdminTab && typeof showTab === 'function' && document.getElementById('app')?.style.display !== 'none') {
    const activeLink = document.querySelector('.sb-link.active');
    if (activeLink) showTab(window.currentAdminTab, activeLink);
  }
  // Contenu dynamique (CRM/Admin) : rétablir le FR d'origine, régénérer la
  // section courante en FR, puis traduire vers la langue choisie.
  if (typeof restoreFR === 'function') restoreFR();
  if (typeof renderCurrent === 'function') { try { renderCurrent(); } catch(e){} }
  setupDynObserver();
  if (code !== 'fr') { try { translateDynamic(document.body); } catch(e){} }
}

document.addEventListener('DOMContentLoaded', () => {
  applyPanelLang(localStorage.getItem('md_panel_lang') || 'fr');
});

// Synchronisation live entre panneaux ouverts : changer la langue dans un
// panneau l'applique instantanément dans tous les autres onglets ouverts.
window.addEventListener('storage', e => {
  if (e.key === 'md_panel_lang' && e.newValue) applyPanelLang(e.newValue);
});

/* ============================================================
   TRADUCTION DU CONTENU DYNAMIQUE (rendu par JS : CRM + Admin)
   Balayage des nœuds texte FR → langue active + MutationObserver
   pour traduire automatiquement tout contenu re-rendu.
   ============================================================ */
const _TR = {
  // [en, es, ar]
  "Total réservations":["Total bookings","Reservas totales","إجمالي الحجوزات"],
  "Chiffre d'affaires (MAD)":["Revenue (MAD)","Ingresos (MAD)","رقم المعاملات (درهم)"],
  "Hors annulations":["Excluding cancellations","Sin cancelaciones","بدون الإلغاءات"],
  "Réservations du site web":["Website bookings","Reservas del sitio web","حجوزات الموقع"],
  "Réservations manuelles":["Manual bookings","Reservas manuales","الحجوزات اليدوية"],
  "Clients uniques":["Unique clients","Clientes únicos","عملاء فريدون"],
  "Tous temps":["All time","Histórico","كل الأوقات"],
  "En attente":["Pending","Pendiente","في الانتظار"],
  "Action requise":["Action required","Acción requerida","إجراء مطلوب"],
  "Confirmées":["Confirmed","Confirmadas","مؤكدة"],
  "Terminées":["Completed","Finalizadas","منتهية"],
  "Annulées":["Cancelled","Canceladas","ملغاة"],
  "Réservations terminées uniquement":["Completed bookings only","Solo reservas finalizadas","الحجوزات المنتهية فقط"],
  "CA total (MAD)":["Total revenue (MAD)","Ingresos totales (MAD)","إجمالي رقم المعاملات (درهم)"],
  "Panier moyen (MAD)":["Average basket (MAD)","Cesta media (MAD)","متوسط السلة (درهم)"],
  "Restant à percevoir (MAD)":["Outstanding (MAD)","Pendiente de cobro (MAD)","المتبقي للتحصيل (درهم)"],
  "Avances en attente":["Pending deposits","Anticipos pendientes","تسبيقات في الانتظار"],
  "Vue combinée":["Combined view","Vista combinada","عرض مدمج"],
  "Web vs Manuel":["Web vs Manual","Web vs Manual","الموقع مقابل اليدوي"],
  "0 annulation":["0 cancellation","0 cancelación","0 إلغاء"],
  "Tout traité ✓":["All handled ✓","Todo tratado ✓","تمت المعالجة ✓"],
  "Tout payé ✓":["All paid ✓","Todo pagado ✓","تم الدفع ✓"],
  "Aucune en attente ✓":["None pending ✓","Ninguna pendiente ✓","لا شيء في الانتظار ✓"],
  "Aucune en attente":["None pending","Ninguna pendiente","لا شيء في الانتظار"],
  "Activité récente":["Recent activity","Actividad reciente","النشاط الأخير"],
  "En attente d'action":["Awaiting action","A la espera de acción","في انتظار إجراء"],
  "Répartition des statuts":["Status breakdown","Distribución de estados","توزيع الحالات"],
  "Échéances proches — Assurance & Visite technique":["Upcoming deadlines — Insurance & Inspection","Vencimientos — Seguro e ITV","استحقاقات قريبة — التأمين والفحص التقني"],
  "Chiffre d'affaires mensuel (MAD)":["Monthly revenue (MAD)","Ingresos mensuales (MAD)","رقم المعاملات الشهري (درهم)"],
  "Top véhicules":["Top vehicles","Vehículos top","أفضل السيارات"],
  "Top villes":["Top cities","Ciudades top","أفضل المدن"],
  "Top destinations":["Top destinations","Destinos top","أفضل الوجهات"],
  "Statuts":["Statuses","Estados","الحالات"],
  "Disponibles":["Available","Disponibles","متاحة"],
  "Réservés":["Reserved","Reservados","محجوزة"],
  "Chez le mécanicien":["At the mechanic","En el taller","عند الميكانيكي"],
  "Accidentés":["In accident","Accidentados","حوادث"],
  "Vidange dépassée":["Oil change overdue","Cambio de aceite vencido","تغيير الزيت متأخر"],
  "Vidange proche (≤1000km)":["Oil change soon (≤1000km)","Cambio pronto (≤1000km)","تغيير الزيت قريب (≤1000كم)"],
  "OK":["OK","OK","جيد"],
  "Clients":["Clients","Clientes","العملاء"],
  "Réservations":["Reservations","Reservas","الحجوزات"],
  "Véhicules":["Vehicles","Vehículos","السيارات"],
  "Vidange":["Oil change","Cambio de aceite","تغيير الزيت"],
  "Statistiques":["Statistics","Estadísticas","الإحصائيات"],
  "Disponibilité & Blocage":["Availability & Blocking","Disponibilidad y Bloqueo","التوفر والحجب"],
  "Annuler":["Cancel","Cancelar","إلغاء"],
  "Fermer":["Close","Cerrar","إغلاق"],
  "Supprimer":["Delete","Eliminar","حذف"],
  "Statut":["Status","Estado","الحالة"],
  "Véhicule":["Vehicle","Vehículo","السيارة"],
  "Téléphone":["Phone","Teléfono","الهاتف"],
  "Email":["Email","Correo","البريد"],
  "Nom":["Name","Nombre","الاسم"],
  "Ville":["City","Ciudad","المدينة"],
  "Source":["Source","Origen","المصدر"],
  "Provenance":["Source","Origen","المصدر"],
  "Total":["Total","Total","المجموع"],
  "Lieu":["Location","Lugar","المكان"],
  "Dates":["Dates","Fechas","التواريخ"],
  "Durée":["Duration","Duración","المدة"],
  "Actions":["Actions","Acciones","إجراءات"],
  "Client":["Client","Cliente","العميل"],
  "En cours":["In progress","En curso","جارٍ"],
  "Réserv.":["Bookings","Reservas","حجوزات"],
  "Aucune réservation":["No bookings","Sin reservas","لا توجد حجوزات"],
  "Aucune réservation trouvée":["No bookings found","No se encontraron reservas","لم يتم العثور على حجوزات"],
  "Aucune réservation en attente ✓":["No pending bookings ✓","Sin reservas pendientes ✓","لا حجوزات في الانتظار ✓"],
  "Aucun client trouvé":["No client found","No se encontró cliente","لم يتم العثور على عميل"],
  "Aucun véhicule.":["No vehicle.","Sin vehículos.","لا توجد سيارات."],
  "Aucune donnée":["No data","Sin datos","لا توجد بيانات"],
  "Aucune donnée disponible":["No data available","No hay datos","لا توجد بيانات متاحة"],
  "Aucune période bloquée.":["No blocked period.","Sin períodos bloqueados.","لا توجد فترات محجوبة."],
  "Aucune conversation pour le moment.":["No conversations yet.","Sin conversaciones aún.","لا توجد محادثات بعد."],
  "Paiement en cours":["Payment in progress","Pago en curso","الدفع جارٍ"],
  "Confirmé":["Confirmed","Confirmado","مؤكد"],
  "Terminé":["Completed","Finalizado","منتهي"],
  "Annulé":["Cancelled","Cancelado","ملغى"],
  "Site web":["Website","Sitio web","الموقع"],
  "Manuel":["Manual","Manual","يدوي"],
  "Site":["Site","Sitio","الموقع"],
  "Inconnu":["Unknown","Desconocido","غير معروف"],
  "Disponible":["Available","Disponible","متاح"],
  "Réservé (client)":["Reserved (client)","Reservado (cliente)","محجوز (عميل)"],
  "Bloqué (manuel)":["Blocked (manual)","Bloqueado (manual)","محجوب (يدوي)"],
  "Périodes bloquées :":["Blocked periods:","Períodos bloqueados:","الفترات المحجوبة:"],
  "Nom du client":["Client name","Nombre del cliente","اسم العميل"],
  "Lieu de livraison":["Delivery location","Lugar de entrega","مكان التسليم"],
  "Date départ":["Start date","Fecha de inicio","تاريخ البداية"],
  "Date retour":["Return date","Fecha de retorno","تاريخ العودة"],
  "Statut paiement":["Payment status","Estado de pago","حالة الدفع"],
  "Email (optionnel)":["Email (optional)","Correo (opcional)","البريد (اختياري)"],
  "Client (optionnel)":["Client (optional)","Cliente (opcional)","العميل (اختياري)"],
  "Note (accident / mécanique)":["Note (accident / mechanical)","Nota (accidente / mecánica)","ملاحظة (حادث / ميكانيك)"],
  "Photos du véhicule":["Vehicle photos","Fotos del vehículo","صور السيارة"],
  "Catégorie (affichage site web)":["Category (website)","Categoría (sitio web)","الفئة (عرض الموقع)"],
  "Badge (affichage site web)":["Badge (website)","Insignia (sitio web)","الشارة (عرض الموقع)"],
  "Kilométrage actuel":["Current mileage","Kilometraje actual","الكيلومتراج الحالي"],
  "Dernière vidange":["Last oil change","Último cambio de aceite","آخر تغيير زيت"],
  "Dernière vidange (km)":["Last oil change (km)","Último cambio (km)","آخر تغيير زيت (كم)"],
  "Intervalle":["Interval","Intervalo","الفاصل"],
  "Intervalle vidange (km)":["Oil change interval (km)","Intervalo de cambio (km)","فاصل تغيير الزيت (كم)"],
  "Prochaine vidange":["Next oil change","Próximo cambio","تغيير الزيت القادم"],
  "HISTORIQUE":["HISTORY","HISTORIAL","السجل"],
  "Assurance":["Insurance","Seguro","التأمين"],
  "Visite tech.":["Tech. inspection","ITV","الفحص التقني"],
  "Aucune réservation prévue":["No upcoming booking","Sin reservas previstas","لا حجوزات مقررة"],
  "En réparation":["Under repair","En reparación","قيد الإصلاح"],
  "Entretien en cours":["Maintenance ongoing","Mantenimiento en curso","صيانة جارية"],
  "INDICATEURS CLÉS":["KEY METRICS","INDICADORES CLAVE","المؤشرات الرئيسية"],
  "TOP 5 VÉHICULES":["TOP 5 VEHICLES","TOP 5 VEHÍCULOS","أفضل 5 سيارات"],
  "Ce mois (30j)":["This month (30d)","Este mes (30d)","هذا الشهر (30ي)"],
  "Cette année":["This year","Este año","هذه السنة"],
  "Cette semaine":["This week","Esta semana","هذا الأسبوع"],
  "Toutes les données":["All data","Todos los datos","كل البيانات"],
  "Taux confirmation":["Confirmation rate","Tasa de confirmación","نسبة التأكيد"],
  "Total jours loués":["Total days rented","Días alquilados","إجمالي أيام الكراء"],
  "Panier moy.":["Avg basket","Cesta media","متوسط السلة"],
  "Créé le":["Created on","Creado el","أُنشئ في"],
  "Généré le":["Generated on","Generado el","أُنشئ في"],
  "Non prise":["Not taken","No tomada","غير مأخوذة"],
  "Non précisé":["Not specified","Sin especificar","غير محدد"],
  "Payé complet":["Fully paid","Pagado completo","مدفوع بالكامل"],
  "Avance":["Deposit","Anticipo","تسبيق"],
  "Période":["Period","Período","الفترة"],
  "Jours":["Days","Días","أيام"],
  "Mois":["Month","Mes","شهر"],
  "Client":["Client","Cliente","العميل"],
  "Bot":["Bot","Bot","بوت"],
  "Chats":["Chats","Chats","المحادثات"],
  "Stats":["Stats","Estadísticas","إحصائيات"],
  "Lun":["Mon","Lun","إثن"],"Mar":["Tue","Mar","ثلا"],"Mer":["Wed","Mié","أرب"],"Jeu":["Thu","Jue","خمي"],"Ven":["Fri","Vie","جمع"],"Sam":["Sat","Sáb","سبت"],"Dim":["Sun","Dom","أحد"],
  "Janvier":["January","Enero","يناير"],"Février":["February","Febrero","فبراير"],"Mars":["March","Marzo","مارس"],"Avril":["April","Abril","أبريل"],"Mai":["May","Mayo","ماي"],"Juin":["June","Junio","يونيو"],"Juillet":["July","Julio","يوليوز"],"Août":["August","Agosto","غشت"],"Septembre":["September","Septiembre","شتنبر"],"Octobre":["October","Octubre","أكتوبر"],"Novembre":["November","Noviembre","نونبر"],"Décembre":["December","Diciembre","دجنبر"],
};
const _LANG_IDX = { en:0, es:1, ar:2 };
const DYN = { en:{}, es:{}, ar:{} };
for (const k in _TR) { DYN.en[k]=_TR[k][0]; DYN.es[k]=_TR[k][1]; DYN.ar[k]=_TR[k][2]; }

// Compléments : écrans de connexion, sidebar admin-master, vue Conversations
const _TR2 = {
  "Dashboard":["Dashboard","Panel","لوحة التحكم"],
  "Réservations site web":["Website bookings","Reservas del sitio web","حجوزات الموقع"],
  "CRM System":["CRM System","Sistema CRM","نظام CRM"],
  "Vue globale (Master)":["Global view (Master)","Vista global (Master)","العرض الشامل (ماستر)"],
  "Vue globale":["Global view","Vista global","العرض الشامل"],
  "Vue combinée (Master)":["Combined view (Master)","Vista combinada (Master)","العرض المدمج (ماستر)"],
  "Voir le site":["View site","Ver el sitio","عرض الموقع"],
  "Paramètres":["Settings","Ajustes","الإعدادات"],
  "Déconnexion":["Log out","Cerrar sesión","تسجيل الخروج"],
  "Toutes les dernières réservations":["All latest bookings","Todas las últimas reservas","كل آخر الحجوزات"],
  "Dernières réservations":["Latest bookings","Últimas reservas","آخر الحجوزات"],
  "Voir tout":["View all","Ver todo","عرض الكل"],
  "Connexion":["Login","Iniciar sesión","تسجيل الدخول"],
  "Connexion CRM":["CRM Login","Acceso CRM","دخول CRM"],
  "Accès réservé aux administrateurs":["Administrators only","Solo administradores","مخصص للمشرفين فقط"],
  "IDENTIFIANT":["USERNAME","USUARIO","المعرّف"],
  "MOT DE PASSE":["PASSWORD","CONTRASEÑA","كلمة المرور"],
  "Identifiant":["Username","Usuario","المعرّف"],
  "Mot de passe":["Password","Contraseña","كلمة المرور"],
  "Se connecter":["Log in","Conectarse","دخول"],
  "Accéder au CRM":["Access CRM","Acceder al CRM","الدخول إلى CRM"],
  "Mot de passe oublié":["Forgot password","Contraseña olvidada","نسيت كلمة المرور"],
  "Retour au site":["Back to site","Volver al sitio","العودة إلى الموقع"],
  "Retour au panneau admin":["Back to admin panel","Volver al panel admin","العودة إلى لوحة الأدمين"],
  "Votre identifiant":["Your username","Tu usuario","المعرّف ديالك"],
  "Vider":["Clear","Vaciar","إفراغ"],
  "Conversations Chatbot":["Chatbot conversations","Conversaciones del chatbot","محادثات الشات بوت"],
  "Conversations":["Conversations","Conversaciones","المحادثات"],
  "Bot":["Bot","Bot","بوت"],
  "Vous":["You","Tú","أنت"],
  "Vider toutes les conversations":["Clear all conversations","Vaciar todas las conversaciones","إفراغ كل المحادثات"],
  "Réservation manuelle":["Manual booking","Reserva manual","حجز يدوي"],
  "Nouvelle réservation manuelle":["New manual booking","Nueva reserva manual","حجز يدوي جديد"],
  "Ajouter un véhicule":["Add a vehicle","Añadir un vehículo","إضافة سيارة"],
  "Rechercher":["Search","Buscar","بحث"],
  "Exporter tous les contacts":["Export all contacts","Exportar todos los contactos","تصدير كل جهات الاتصال"],
  "Tous les statuts":["All statuses","Todos los estados","كل الحالات"],
  "Toutes provenances":["All sources","Todos los orígenes","كل المصادر"],
  "Enregistrer":["Save","Guardar","حفظ"],
  "Modifier":["Edit","Editar","تعديل"],
  "Détails":["Details","Detalles","تفاصيل"],
  "Calendrier":["Calendar","Calendario","التقويم"],
  "Réserver":["Book","Reservar","حجز"],
  "Bloquer la période":["Block the period","Bloquear el período","حظر الفترة"],
  "Bloquer période":["Block period","Bloquear período","حظر الفترة"],
  "Disponibilité & Blocage":["Availability & Blocking","Disponibilidad y Bloqueo","التوفر والحجب"],
  "Aujourd'hui":["Today","Hoy","اليوم"],
};
for (const k in _TR2) { DYN.en[k]=_TR2[k][0]; DYN.es[k]=_TR2[k][1]; DYN.ar[k]=_TR2[k][2]; }

const DYN_RULES = {
  en: [
    [/^(\d+) en attente · (\d+)% du total$/, '$1 pending · $2% of total'],
    [/^(\d+) en attente$/, '$1 pending'],
    [/^(\d+)% du total$/, '$1% of total'],
    [/^(\d+) terminée\(s\)$/, '$1 completed'],
    [/^(\d+) annulée\(s\)$/, '$1 cancelled'],
    [/^(\d+) paiement en cours$/, '$1 payment(s) in progress'],
    [/^(\d+) km restants$/, '$1 km left'],
    [/^(\d+)j restants$/, '$1d left'],
    [/^Retour le (.+)$/, 'Return on $1'],
    [/^Prochaine réservation: (.+)$/, 'Next booking: $1'],
    [/^(\d+) véhicule\(s\)$/, '$1 vehicle(s)'],
    [/^(\d+) client\(s\)$/, '$1 client(s)'],
    [/^(\d+) réservation\(s\)$/, '$1 booking(s)'],
    [/^Vidange dépassée de (\d+) km$/, 'Oil change overdue by $1 km'],
    [/^dépassée de (\d+) km$/, 'overdue by $1 km'],
  ],
  es: [
    [/^(\d+) en attente · (\d+)% du total$/, '$1 pendiente(s) · $2% del total'],
    [/^(\d+) en attente$/, '$1 pendiente(s)'],
    [/^(\d+)% du total$/, '$1% del total'],
    [/^(\d+) terminée\(s\)$/, '$1 finalizada(s)'],
    [/^(\d+) annulée\(s\)$/, '$1 cancelada(s)'],
    [/^(\d+) paiement en cours$/, '$1 pago(s) en curso'],
    [/^(\d+) km restants$/, '$1 km restantes'],
    [/^(\d+)j restants$/, '$1d restantes'],
    [/^Retour le (.+)$/, 'Retorno el $1'],
    [/^Prochaine réservation: (.+)$/, 'Próxima reserva: $1'],
    [/^(\d+) véhicule\(s\)$/, '$1 vehículo(s)'],
    [/^(\d+) client\(s\)$/, '$1 cliente(s)'],
    [/^(\d+) réservation\(s\)$/, '$1 reserva(s)'],
    [/^Vidange dépassée de (\d+) km$/, 'Cambio de aceite vencido por $1 km'],
    [/^dépassée de (\d+) km$/, 'vencido por $1 km'],
  ],
  ar: [
    [/^(\d+) en attente · (\d+)% du total$/, '$1 في الانتظار · $2% من المجموع'],
    [/^(\d+) en attente$/, '$1 في الانتظار'],
    [/^(\d+)% du total$/, '$1% من المجموع'],
    [/^(\d+) terminée\(s\)$/, '$1 منتهية'],
    [/^(\d+) annulée\(s\)$/, '$1 ملغاة'],
    [/^(\d+) paiement en cours$/, '$1 دفعة جارية'],
    [/^(\d+) km restants$/, '$1 كم متبقية'],
    [/^(\d+)j restants$/, '$1 يوم متبقية'],
    [/^Retour le (.+)$/, 'العودة يوم $1'],
    [/^Prochaine réservation: (.+)$/, 'الحجز القادم: $1'],
    [/^(\d+) véhicule\(s\)$/, '$1 سيارة'],
    [/^(\d+) client\(s\)$/, '$1 عميل'],
    [/^(\d+) réservation\(s\)$/, '$1 حجز'],
    [/^Vidange dépassée de (\d+) km$/, 'تغيير الزيت متأخر بـ $1 كم'],
    [/^dépassée de (\d+) km$/, 'متأخر بـ $1 كم'],
  ],
};
// Règles complémentaires (conversations chatbot, compteurs)
DYN_RULES.en.push(
  [/^Session #(\d+) · démarrée le (.+)$/, 'Session #$1 · started on $2'],
  [/^Session (\d+)$/, 'Session $1'],
  [/^(\d+) msgs$/, '$1 msgs'],
  [/^(\d+) message\(s\)$/, '$1 message(s)'],
  [/^(\d+) conversation\(s\)$/, '$1 conversation(s)'],
);
DYN_RULES.es.push(
  [/^Session #(\d+) · démarrée le (.+)$/, 'Sesión #$1 · iniciada el $2'],
  [/^Session (\d+)$/, 'Sesión $1'],
  [/^(\d+) msgs$/, '$1 msgs'],
  [/^(\d+) message\(s\)$/, '$1 mensaje(s)'],
  [/^(\d+) conversation\(s\)$/, '$1 conversación(es)'],
);
DYN_RULES.ar.push(
  [/^Session #(\d+) · démarrée le (.+)$/, 'الجلسة #$1 · بدأت في $2'],
  [/^Session (\d+)$/, 'الجلسة $1'],
  [/^(\d+) msgs$/, '$1 رسالة'],
  [/^(\d+) message\(s\)$/, '$1 رسالة'],
  [/^(\d+) conversation\(s\)$/, '$1 محادثة'],
);

// Retire les symboles/emojis/flèches/✓/? en tête et en fin, pour traduire le
// cœur textuel (ex: "🟢 Disponibles", "→ Se connecter", "Retour au site ←",
// "Mot de passe oublié ?", "Tout traité ✓").
const _AFFIX = /^[\s\p{Extended_Pictographic}️‍←-⇿☀-➿✓?⚠·•]+|[\s\p{Extended_Pictographic}️‍←-⇿☀-➿✓?⚠·•]+$/gu;

function _lookup(txt, lang) {
  const dict = DYN[lang]; if (!dict) return null;
  const key = txt.trim();
  if (dict[key] != null) return txt.replace(key, dict[key]);
  for (const [re, rep] of (DYN_RULES[lang] || [])) { if (re.test(key)) return txt.replace(key, key.replace(re, rep)); }
  return null;
}
function _translatePhrase(txt, lang) {
  let out = _lookup(txt, lang);
  if (out != null) return out;
  const core = txt.replace(_AFFIX, '').trim();
  if (core && core !== txt.trim()) { const t = _lookup(core, lang); if (t != null) return txt.replace(core, t); }
  return null;
}

let _translating = false;
// On mémorise le texte FR d'origine de chaque nœud traduit pour pouvoir le
// restaurer (retour au FR ou changement de langue) et toujours retraduire à
// partir du français — indispensable pour le texte statique (ex: <th>).
const _touched = [];
function restoreFR() {
  for (const t of _touched) {
    if (t.node) { if (t.node.nodeValue !== t.fr) t.node.nodeValue = t.fr; }
    else if (t.el) { if (t.el.getAttribute(t.attr) !== t.fr) t.el.setAttribute(t.attr, t.fr); }
  }
  _touched.length = 0;
}
function translateDynamic(root) {
  const lang = curLang(); if (lang === 'fr' || !DYN[lang]) return;
  _translating = true;
  try {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentNode; if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = []; let n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (const node of nodes) {
      const t = node.nodeValue;
      if (!t || !/[A-Za-zÀ-ÿ]/.test(t)) continue;
      const out = _translatePhrase(t, lang);
      if (out != null && out !== t) { _touched.push({ node, fr: t }); node.nodeValue = out; }
    }
    if (root.querySelectorAll) root.querySelectorAll('[placeholder],[title]').forEach(el => {
      ['placeholder', 'title'].forEach(a => {
        const v = el.getAttribute(a); if (!v) return;
        const o = _translatePhrase(v, lang); if (o != null && o !== v) { _touched.push({ el, attr: a, fr: v }); el.setAttribute(a, o); }
      });
    });
  } finally { _translating = false; }
}

let _dynObs = null;
function setupDynObserver() {
  if (_dynObs) return;
  const targets = [document.getElementById('crmApp'), document.getElementById('app'), document.getElementById('sPanel'), document.body].filter(Boolean);
  if (!targets.length) return;
  _dynObs = new MutationObserver(() => {
    if (_translating || curLang() === 'fr') return;
    clearTimeout(_dynObs._t);
    _dynObs._t = setTimeout(() => translateDynamic(document.body), 40);
  });
  targets.forEach(t => _dynObs.observe(t, { childList: true, subtree: true, characterData: true }));
}
