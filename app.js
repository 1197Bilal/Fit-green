/**
 * Bilal's Life OS - Core Application Logic
 * Preloaded with user's literal JSON data
 */

const INITIAL_DATA = {
  "version": 2,
  "settings": {
    "userName": "Bilal",
    "theme": "light",
    "monthlyBudget": 0,
    "weeklyWorkoutGoal": 4,
    "firstDayOfWeek": "monday",
    "notificationsEnabled": false,
    "customCategories": [
      "Gimnasio",
      "Suscripciones",
      "Tecnología",
      "Bonus",
      "Viajes"
    ],
    "googleSheetsUrl": ""
  },
  "incomes": [],
  "fixedExpenses": [],
  "expenses": [],
  "categoryBudgets": [
    { "category": "Hogar", "limit": 0 },
    { "category": "Alimentación", "limit": 0 },
    { "category": "Gimnasio", "limit": 0 },
    { "category": "Suscripciones", "limit": 0 },
    { "category": "Transporte", "limit": 0 },
    { "category": "Restaurantes", "limit": 0 },
    { "category": "Compras", "limit": 0 }
  ],
  "shoppingLists": [
    {
      "id": "list-1",
      "name": "Supermercado Básico",
      "createdAt": 1791901595503,
      "items": [
        { "id": "item-1", "name": "Huevos camperos", "quantity": 1, "unit": "docena", "category": "Frescos", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901795504 },
        { "id": "item-2", "name": "Leche", "quantity": 6, "unit": "l", "category": "Lácteos", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901815504 },
        { "id": "item-3", "name": "Pechugas de pollo", "quantity": 1, "unit": "kg", "category": "Frescos", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901845504 },
        { "id": "item-4", "name": "Arroz", "quantity": 1, "unit": "kg", "category": "Despensa", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901895504 },
        { "id": "item-5", "name": "Pasta", "quantity": 1, "unit": "pack", "category": "Despensa", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901945504 },
        { "id": "item-6", "name": "Aceite de Oliva", "quantity": 1, "unit": "l", "category": "Despensa", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901945505 },
        { "id": "item-7", "name": "Pan", "quantity": 1, "unit": "barra", "category": "Panadería", "supermarket": "Panadería", "estimatedPrice": 0, "completed": false, "createdAt": 1791901945506 },
        { "id": "item-8", "name": "Fruta variada (Plátanos)", "quantity": 1.5, "unit": "kg", "category": "Frescos", "supermarket": "Frutería", "estimatedPrice": 0, "completed": false, "createdAt": 1791901945507 },
        { "id": "item-9", "name": "Papel higiénico", "quantity": 1, "unit": "pack", "category": "Hogar", "supermarket": "Mercadona", "estimatedPrice": 0, "completed": false, "createdAt": 1791901945508 }
      ]
    }
  ],
  "activeShoppingListId": "list-1",
  "frequentShoppingItems": [
    "Huevos camperos",
    "Leche",
    "Pechugas de pollo",
    "Arroz",
    "Pasta",
    "Aceite de oliva",
    "Plátanos",
    "Pan",
    "Avena",
    "Café"
  ],
  "routines": [
    {
      "id": "rou-1",
      "name": "Torso: Pecho y Tríceps",
      "activity": "Gimnasio",
      "dayOfWeek": 1,
      "exercises": [
        { "name": "Press de banca", "targetSets": 4, "targetReps": 8, "targetWeightKg": 0 },
        { "name": "Press inclinado mancuernas", "targetSets": 3, "targetReps": 10, "targetWeightKg": 0 },
        { "name": "Cruces en polea", "targetSets": 3, "targetReps": 12, "targetWeightKg": 0 },
        { "name": "Extensiones de tríceps", "targetSets": 4, "targetReps": 12, "targetWeightKg": 0 }
      ]
    },
    {
      "id": "rou-2",
      "name": "Espalda y Bíceps",
      "activity": "Gimnasio",
      "dayOfWeek": 2,
      "exercises": [
        { "name": "Dominadas / Jalón al pecho", "targetSets": 4, "targetReps": 8, "targetWeightKg": 0 },
        { "name": "Remo con barra", "targetSets": 4, "targetReps": 8, "targetWeightKg": 0 },
        { "name": "Curl de bíceps", "targetSets": 3, "targetReps": 10, "targetWeightKg": 0 }
      ]
    },
    {
      "id": "rou-3",
      "name": "Pierna & Core",
      "activity": "Gimnasio",
      "dayOfWeek": 4,
      "exercises": [
        { "name": "Sentadilla", "targetSets": 4, "targetReps": 8, "targetWeightKg": 0 },
        { "name": "Prensa inclinada", "targetSets": 3, "targetReps": 10, "targetWeightKg": 0 },
        { "name": "Plancha abdominal", "targetSets": 3, "targetReps": 60, "targetWeightKg": 0 }
      ]
    },
    {
      "id": "rou-4",
      "name": "Cardio / Carrera",
      "activity": "Correr",
      "dayOfWeek": 6,
      "exercises": []
    }
  ],
  "workouts": [],
  "habits": [
    { "id": "hab-1", "name": "Beber 2.5L de agua", "icon": "droplets", "color": "#38bdf8", "frequencyDaysPerWeek": 7, "completedDates": [], "createdAt": 1791901095504 },
    { "id": "hab-2", "name": "Leer 20 minutos", "icon": "book-open", "color": "#a855f7", "frequencyDaysPerWeek": 7, "completedDates": [], "createdAt": 1791901095504 },
    { "id": "hab-3", "name": "Caminar 8.000 pasos", "icon": "footprints", "color": "#10b981", "frequencyDaysPerWeek": 7, "completedDates": [], "createdAt": 1791901095504 },
    { "id": "hab-4", "name": "Entrenar físico", "icon": "dumbbell", "color": "#f59e0b", "frequencyDaysPerWeek": 4, "completedDates": [], "createdAt": 1791901095504 },
    { "id": "hab-5", "name": "Dormir 8 horas", "icon": "moon", "color": "#6366f1", "frequencyDaysPerWeek": 7, "completedDates": [], "createdAt": 1791901095504 },
    { "id": "hab-6", "name": "Controlar gastos", "icon": "wallet", "color": "#ec4899", "frequencyDaysPerWeek": 7, "completedDates": [], "createdAt": 1791901095504 }
  ],
  "tasks": [],
  "goals": [
    { "id": "goal-1", "title": "Fondo de emergencia", "category": "Ahorro", "targetValue": 0, "currentValue": 0, "unit": "€", "targetDate": "2026-12-31", "linkedTo": "savings", "createdAt": 1791899095504 },
    { "id": "goal-2", "title": "Entrenar 16 sesiones al mes", "category": "Fitness", "targetValue": 16, "currentValue": 0, "unit": "sesiones", "targetDate": "2026-10-31", "linkedTo": "workouts", "createdAt": 1791900095504 }
  ]
};

const STORAGE_KEY = 'bilal_life_os_state';

// State container
let state = loadState();
let currentTab = 'dashboard';
let charts = {};

let syncTimeout = null;
let isSyncing = false;

function updateSyncStatus(status) {
  const el = document.getElementById('cloud-sync-status');
  if (!el) return;
  if (status === 'synced') {
    el.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800';
    el.innerHTML = '<span>🟢</span> <span class="hidden sm:inline">Google Sheets Sincronizado</span>';
  } else if (status === 'syncing') {
    el.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 animate-pulse';
    el.innerHTML = '<span>⏳</span> <span class="hidden sm:inline">Sincronizando...</span>';
  } else if (status === 'error') {
    el.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800';
    el.innerHTML = '<span>⚠️</span> <span class="hidden sm:inline">Error al conectar Sheets</span>';
  } else {
    el.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400';
    el.innerHTML = '<span>☁️</span> <span class="hidden sm:inline">Modo Local (Offline)</span>';
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.version === 2) {
        return parsed;
      }
      // Si venía de la versión 1 con datos de prueba, conservamos la URL de Google Sheets si la tenía
      const clean = JSON.parse(JSON.stringify(INITIAL_DATA));
      if (parsed && parsed.settings && parsed.settings.googleSheetsUrl) {
        clean.settings.googleSheetsUrl = parsed.settings.googleSheetsUrl;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
      return clean;
    }
  } catch (e) {
    console.error('Error reading localStorage', e);
  }
  const clean = JSON.parse(JSON.stringify(INITIAL_DATA));
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(clean)); } catch(e){}
  return clean;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving state', e);
  }

  // Sincronización en segundo plano con Google Sheets si está configurado
  if (state.settings && state.settings.googleSheetsUrl && state.settings.googleSheetsUrl.trim() !== '') {
    debounceGoogleSheetsSync();
  } else {
    updateSyncStatus('local');
  }
}

function debounceGoogleSheetsSync() {
  if (syncTimeout) clearTimeout(syncTimeout);
  updateSyncStatus('syncing');
  syncTimeout = setTimeout(() => {
    pushToGoogleSheets();
  }, 1200);
}

async function pushToGoogleSheets() {
  const url = state.settings && state.settings.googleSheetsUrl;
  if (!url) return;
  try {
    isSyncing = true;
    updateSyncStatus('syncing');
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(state)
    });
    isSyncing = false;
    updateSyncStatus('synced');
  } catch (err) {
    console.error('Error syncing to Google Sheets', err);
    isSyncing = false;
    updateSyncStatus('error');
  }
}

async function loadFromGoogleSheets() {
  const url = state.settings && state.settings.googleSheetsUrl;
  if (!url) {
    updateSyncStatus('local');
    return;
  }
  try {
    updateSyncStatus('syncing');
    const resp = await fetch(url);
    const data = await resp.json();
    if (data && !data.empty && !data.error && data.incomes && data.expenses) {
      state = data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      renderCurrentTab();
      updateSyncStatus('synced');
      showToast('Sincronizado con Google Sheets ✓', 'success');
    } else {
      if (data && data.empty) {
        // La hoja está nueva, enviamos los datos iniciales
        pushToGoogleSheets();
      }
      updateSyncStatus('synced');
    }
  } catch (err) {
    console.warn('Could not pull from Google Sheets, using local state', err);
    updateSyncStatus('error');
  }
}

function resetToDefault() {
  if (confirm('¿Restaurar los datos originales por defecto? Se sobrescribirán los cambios no guardados.')) {
    state = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveState();
    applyTheme();
    renderApp();
    showToast('Datos restaurados a la versión original');
  }
}

// Icons mapping helper (fallback for SVG rendering)
const ICONS = {
  dashboard: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,
  wallet: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>`,
  dumbbell: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>`,
  checkCircle: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  tasks: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>`,
  shopping: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
  target: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  settings: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  plus: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
  trash: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
  fire: `<svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.527.82-1.123 1.908-1.723 3.018-.62 1.144-1.258 2.366-1.87 3.518-.328.618-.654 1.226-.968 1.803-.158.29-.312.57-.46.837-.152.274-.298.532-.435.772a5.976 5.976 0 00-.73 2.873c0 3.314 2.686 6 6 6s6-2.686 6-6c0-1.47-.532-2.82-1.42-3.868a12.87 12.87 0 01-.892-1.196c-.463-.679-.983-1.488-1.47-2.327-.492-.85-.97-1.73-1.4-2.585a21.417 21.417 0 01-.65-1.347zM9 13a1 1 0 011-1 3 3 0 013 3 1 1 0 01-2 0 1 1 0 00-1-1 1 1 0 01-1-1z" clip-rule="evenodd"/></svg>`,
  droplets: `💧`,
  bookOpen: `📖`,
  footprints: `👟`,
  dumbbellIcon: `🏋️‍♂️`,
  moon: `🌙`,
  walletIcon: `💰`
};

function getHabitIcon(iconKey) {
  if (iconKey === 'droplets') return '💧';
  if (iconKey === 'book-open') return '📖';
  if (iconKey === 'footprints') return '👟';
  if (iconKey === 'dumbbell') return '🏋️';
  if (iconKey === 'moon') return '🌙';
  if (iconKey === 'wallet') return '💳';
  return '⭐';
}

// Helpers
function formatMoney(amount) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}

function formatDate(isoStr) {
  if (!isoStr) return '';
  const [y, m, d] = isoStr.split('-');
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${d} ${months[parseInt(m, 10) - 1]} ${y}`;
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all transform duration-300 translate-y-2 opacity-0 ${
    type === 'success' ? 'bg-emerald-500 text-white border-emerald-600' :
    type === 'error' ? 'bg-rose-500 text-white border-rose-600' :
    'bg-gray-900 text-white dark:bg-gray-800 dark:border-gray-700'
  }`;
  toast.innerHTML = `<span>${msg}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function triggerCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  }
}

// Theme management
function applyTheme() {
  const isDark = state.settings.theme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.innerHTML = isDark ? 
      `<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>` :
      `<svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
  }
}

function toggleTheme() {
  state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
  // re-render charts to adapt colors
  renderCurrentTab();
}

// Navigation
function setTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.nav-item').forEach(el => {
    if (el.dataset.tab === tabId) {
      el.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
      el.classList.remove('text-gray-600', 'hover:bg-gray-100', 'dark:text-gray-400', 'dark:hover:bg-gray-800');
    } else {
      el.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
      el.classList.add('text-gray-600', 'hover:bg-gray-100', 'dark:text-gray-400', 'dark:hover:bg-gray-800');
    }
  });

  const mobileNav = document.querySelectorAll('.mobile-nav-item');
  mobileNav.forEach(el => {
    if (el.dataset.tab === tabId) {
      el.classList.add('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
      el.classList.remove('text-gray-500', 'dark:text-gray-400');
    } else {
      el.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
      el.classList.add('text-gray-500', 'dark:text-gray-400');
    }
  });

  renderCurrentTab();
}

function renderCurrentTab() {
  const container = document.getElementById('main-content');
  if (!container) return;

  // Clear previous charts
  Object.values(charts).forEach(c => {
    if (c && typeof c.destroy === 'function') c.destroy();
  });
  charts = {};

  switch (currentTab) {
    case 'dashboard':
      renderDashboard(container);
      break;
    case 'finances':
      renderFinances(container);
      break;
    case 'fitness':
      renderFitness(container);
      break;
    case 'habits':
      renderHabits(container);
      break;
    case 'tasks':
      renderTasks(container);
      break;
    case 'shopping':
      renderShopping(container);
      break;
    case 'goals':
      renderGoals(container);
      break;
    case 'settings':
      renderSettings(container);
      break;
    default:
      renderDashboard(container);
  }
}

// -------------------------------------------------------------
// 1. DASHBOARD
// -------------------------------------------------------------
function renderDashboard(container) {
  const totalIncomes = state.incomes.reduce((acc, i) => acc + i.amount, 0);
  const totalExpenses = state.expenses.reduce((acc, e) => acc + e.amount, 0);
  const netBalance = totalIncomes - totalExpenses;
  const budgetUsedPct = Math.min(100, Math.round((totalExpenses / state.settings.monthlyBudget) * 100));

  // Today stats (2026-10-13)
  const todayStr = '2026-10-13';
  const habitsDoneToday = state.habits.filter(h => h.completedDates.includes(todayStr)).length;
  const totalHabits = state.habits.length;

  const tasksPendingToday = state.tasks.filter(t => !t.completed && t.dueDate === todayStr);

  const workoutsThisWeek = state.workouts.length; // 3 in October

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Welcome Hero Banner -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white p-6 md:p-8 shadow-xl">
        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium tracking-wide mb-3">
              <span>📅</span> Martes, 13 de Octubre de 2026
            </div>
            <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight">¡Hola de nuevo, ${state.settings.userName.trim()}! 👋</h1>
            <p class="text-indigo-100 text-sm md:text-base mt-1 max-w-xl">
              Tienes <strong>${tasksPendingToday.length} tareas pendientes</strong> para hoy y has completado el <strong>${Math.round((habitsDoneToday / totalHabits) * 100)}% de tus hábitos</strong>.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="openModal('quickActionModal')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-sm shadow-md transition transform active:scale-95">
              <span>⚡</span> Registro Rápido
            </button>
          </div>
        </div>
        <!-- Decorative blur circles -->
        <div class="absolute -right-12 -top-12 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl"></div>
        <div class="absolute -left-12 -bottom-12 w-48 h-48 bg-indigo-400/30 rounded-full blur-2xl"></div>
      </div>

      <!-- Financial Metric Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Incomes -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm card-hover">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Ingresos Octubre</span>
            <span class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">↑</span>
          </div>
          <div class="text-2xl font-extrabold text-gray-900 dark:text-white font-mono">${formatMoney(totalIncomes)}</div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${state.incomes.length} ingresos registrados</p>
        </div>

        <!-- Expenses -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm card-hover">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Gastos Octubre</span>
            <span class="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">↓</span>
          </div>
          <div class="text-2xl font-extrabold text-gray-900 dark:text-white font-mono">${formatMoney(totalExpenses)}</div>
          <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-2">
            <div class="bg-rose-500 h-1.5 rounded-full" style="width: ${budgetUsedPct}%"></div>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${budgetUsedPct}% del presupuesto (${formatMoney(state.settings.monthlyBudget)})</p>
        </div>

        <!-- Net Balance -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm card-hover">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Balance Neto</span>
            <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">💼</span>
          </div>
          <div class="text-2xl font-extrabold ${netBalance >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'} font-mono">${formatMoney(netBalance)}</div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Ahorro mensual positivo</p>
        </div>

        <!-- Workouts & Habits -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm card-hover">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Fitness & Hábitos</span>
            <span class="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">🔥</span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-extrabold text-gray-900 dark:text-white font-mono">${workoutsThisWeek}/${state.settings.weeklyWorkoutGoal}</span>
            <span class="text-xs text-gray-500">entrenos</span>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Hoy: <strong>${habitsDoneToday}/${totalHabits}</strong> hábitos completados</p>
        </div>
      </div>

      <!-- Main Dashboard Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left: Today's Tasks & Habits -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Tasks for Today -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">${ICONS.tasks}</span>
                <h2 class="text-base font-bold text-gray-900 dark:text-white">Tareas del Día</h2>
              </div>
              <button onclick="setTab('tasks')" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Ver todas (${state.tasks.length}) →</button>
            </div>

            <div class="space-y-2.5">
              ${renderDashboardTasksList()}
            </div>
          </div>

          <!-- Habits Quick Check for Today -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">${ICONS.checkCircle}</span>
                <h2 class="text-base font-bold text-gray-900 dark:text-white">Hábitos de Hoy (13 Oct)</h2>
              </div>
              <button onclick="setTab('habits')" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Matriz semanal →</button>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              ${renderDashboardHabitsGrid(todayStr)}
            </div>
          </div>

          <!-- Active Goals Progress Preview -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">${ICONS.target}</span>
                <h2 class="text-base font-bold text-gray-900 dark:text-white">Objetivos en Progreso</h2>
              </div>
              <button onclick="setTab('goals')" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Gestionar metas →</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${state.goals.map(goal => {
                const pct = Math.min(100, Math.round((goal.currentValue / goal.targetValue) * 100));
                return `
                  <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                    <div class="flex justify-between items-start mb-2">
                      <span class="text-xs font-semibold text-gray-900 dark:text-white line-clamp-1">${goal.title}</span>
                      <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">${pct}%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                      <div class="bg-indigo-600 h-2 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                    </div>
                    <div class="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                      <span>${goal.currentValue} ${goal.unit}</span>
                      <span>Meta: ${goal.targetValue} ${goal.unit}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Right: Financial Chart & Shopping List Preview -->
        <div class="space-y-6">
          <!-- Expenses Breakdown Chart -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-base font-bold text-gray-900 dark:text-white">Gastos por Categoría</h2>
              <button onclick="setTab('finances')" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Detalle →</button>
            </div>
            <div class="relative h-56 flex items-center justify-center">
              <canvas id="expensesDonutChart"></canvas>
            </div>
          </div>

          <!-- Active Shopping List Preview -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h2 class="text-base font-bold text-gray-900 dark:text-white">Supermercado Semanal</h2>
                <p class="text-xs text-gray-500">Lista activa de la compra</p>
              </div>
              <button onclick="setTab('shopping')" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Ver lista →</button>
            </div>
            <div class="space-y-2">
              ${renderDashboardShoppingPreview()}
            </div>
          </div>

          <!-- Quick Routine Teaser -->
          <div class="bg-gradient-to-br from-gray-900 to-indigo-950 text-white rounded-2xl p-5 shadow-sm border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Último Récord</span>
              <span>🏆</span>
            </div>
            <p class="text-sm font-semibold text-gray-200">Sentadilla trasera: 102.5 kg</p>
            <p class="text-xs text-gray-400 mt-1 italic">"¡Nuevo récord personal en sentadilla con 102.5 kg!" (11 Oct)</p>
            <button onclick="setTab('fitness')" class="mt-4 w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition text-center block">
              Explorar Rutinas y Entrenos
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  initDashboardCharts();
}

function renderDashboardTasksList() {
  const todayStr = '2026-10-13';
  // prioritize today or pending
  const relevantTasks = state.tasks.slice(0, 4);

  return relevantTasks.map(task => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <div class="flex items-center gap-3">
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask('${task.id}')"
          class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer">
        <div>
          <p class="text-sm font-medium ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-white'}">
            ${task.title}
          </p>
          <div class="flex items-center gap-2 mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            <span>📅 ${formatDate(task.dueDate)}</span>
            ${task.dueTime ? `<span>⏰ ${task.dueTime}</span>` : ''}
            <span class="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold badge-priority-${task.priority}">${task.priority}</span>
          </div>
        </div>
      </div>
      ${task.isReminder ? '<span class="text-amber-500 text-xs">🔔</span>' : ''}
    </div>
  `).join('');
}

function renderDashboardHabitsGrid(todayStr) {
  return state.habits.map(habit => {
    const isDone = habit.completedDates.includes(todayStr);
    return `
      <button onclick="toggleHabitDay('${habit.id}', '${todayStr}')" 
        class="flex items-center gap-2.5 p-3 rounded-xl border text-left transition transform active:scale-95 ${
          isDone ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300' :
          'bg-gray-50 dark:bg-gray-700/40 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300'
        }">
        <span class="text-lg">${getHabitIcon(habit.icon)}</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-semibold truncate">${habit.name}</p>
          <p class="text-[10px] ${isDone ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'}">
            ${isDone ? '✓ Hecho hoy' : 'Pendiente'}
          </p>
        </div>
      </button>
    `;
  }).join('');
}

function renderDashboardShoppingPreview() {
  const activeList = state.shoppingLists.find(l => l.id === state.activeShoppingListId) || state.shoppingLists[0];
  if (!activeList) return '<p class="text-xs text-gray-400">No hay listas disponibles</p>';

  const pendingItems = activeList.items.filter(i => !i.completed).slice(0, 4);
  if (pendingItems.length === 0) {
    return `<p class="text-xs text-emerald-600 dark:text-emerald-400 py-2">¡Todo comprado en esta lista! 🎉</p>`;
  }

  return pendingItems.map(item => `
    <div class="flex items-center justify-between text-xs py-1.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <div class="flex items-center gap-2">
        <input type="checkbox" onchange="toggleShoppingItem('${activeList.id}', '${item.id}')"
          class="w-3.5 h-3.5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer">
        <span class="font-medium text-gray-800 dark:text-gray-200">${item.name}</span>
        <span class="text-gray-400">(${item.quantity} ${item.unit})</span>
      </div>
      <span class="font-mono text-gray-600 dark:text-gray-400">${formatMoney(item.estimatedPrice)}</span>
    </div>
  `).join('');
}

function initDashboardCharts() {
  const ctx = document.getElementById('expensesDonutChart');
  if (!ctx) return;

  // Aggregate expenses by category
  const catTotals = {};
  state.expenses.forEach(e => {
    catTotals[e.category] = (catTotals[e.category] || 0) + e.amount;
  });

  const labels = Object.keys(catTotals);
  const data = Object.values(catTotals);

  const colors = [
    '#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#14b8a6', '#f43f5e'
  ];

  charts.expensesDonut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: state.settings.theme === 'dark' ? '#1f2937' : '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            font: { size: 10 },
            color: state.settings.theme === 'dark' ? '#9ca3af' : '#4b5563'
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${formatMoney(context.raw)}`;
            }
          }
        }
      },
      cutout: '65%'
    }
  });
}

// -------------------------------------------------------------
// 2. FINANCES
// -------------------------------------------------------------
function renderFinances(container) {
  const totalIncomes = state.incomes.reduce((acc, i) => acc + i.amount, 0);
  const totalExpenses = state.expenses.reduce((acc, e) => acc + e.amount, 0);
  const net = totalIncomes - totalExpenses;

  // Compute expenses spent by category
  const spentByCat = {};
  state.expenses.forEach(e => {
    spentByCat[e.category] = (spentByCat[e.category] || 0) + e.amount;
  });

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Finance Header & Action Buttons -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Finanzas y Presupuesto</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Control de ingresos, gastos mensuales, gastos fijos y límites por categoría</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="openModal('addIncomeModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition">
            <span>+</span> Añadir Ingreso
          </button>
          <button onclick="openModal('addExpenseModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs shadow-sm transition">
            <span>+</span> Añadir Gasto
          </button>
        </div>
      </div>

      <!-- Financial Metrics Ribbon -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ingresos Totales</span>
          <div class="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">${formatMoney(totalIncomes)}</div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Gastos Totales</span>
          <div class="text-xl font-bold font-mono text-rose-600 dark:text-rose-400 mt-1">${formatMoney(totalExpenses)}</div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ahorro Neto</span>
          <div class="text-xl font-bold font-mono ${net >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600'} mt-1">${formatMoney(net)}</div>
        </div>
      </div>

      <!-- Category Budgets Grid -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-base font-bold text-gray-900 dark:text-white">Límites y Presupuestos por Categoría</h2>
            <p class="text-xs text-gray-500">Monitoreo de gasto mensual según los techos asignados</p>
          </div>
          <span class="text-xs font-mono text-gray-500">Presupuesto Global: <strong>${formatMoney(state.settings.monthlyBudget)}</strong></span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${state.categoryBudgets.map(cb => {
            const spent = spentByCat[cb.category] || 0;
            const pct = Math.min(100, Math.round((spent / cb.limit) * 100));
            const remaining = cb.limit - spent;
            const isDanger = pct >= 90;
            const isWarn = pct >= 70 && pct < 90;

            return `
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
                <div class="flex justify-between items-center mb-1.5">
                  <span class="font-bold text-sm text-gray-900 dark:text-white">${cb.category}</span>
                  <span class="text-xs font-mono font-bold ${isDanger ? 'text-rose-600' : isWarn ? 'text-amber-500' : 'text-emerald-600'}">${pct}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2 overflow-hidden">
                  <div class="${isDanger ? 'bg-rose-500' : isWarn ? 'bg-amber-500' : 'bg-emerald-500'} h-2 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
                  <span>Gastado: <strong>${formatMoney(spent)}</strong></span>
                  <span>Toque: ${formatMoney(cb.limit)}</span>
                </div>
                <p class="text-[11px] mt-1 ${remaining < 0 ? 'text-rose-500 font-semibold' : 'text-gray-400'}">
                  ${remaining >= 0 ? `Disponible: ${formatMoney(remaining)}` : `Superado por: ${formatMoney(Math.abs(remaining))}`}
                </p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Two column: Fixed Expenses & Recent Transactions -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Fixed Recurring Expenses -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-base font-bold text-gray-900 dark:text-white">Gastos Fijos Programados</h2>
                <p class="text-xs text-gray-500">Recurrentes de cada mes o periodo</p>
              </div>
              <button onclick="openAddFixedExpenseModal()" class="px-2.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold transition flex items-center gap-1">
                <span>+</span> Fijo
              </button>
            </div>
            <div class="space-y-3">
              ${state.fixedExpenses.length === 0 ? `
                <div class="p-6 text-center rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                  <span class="text-2xl block mb-1">📌</span>
                  <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">No hay gastos fijos todavía</p>
                  <p class="text-[11px] text-gray-400 mt-0.5 mb-3">Añade alquiler, gimnasio, internet o cuotas fijas</p>
                  <button onclick="openAddFixedExpenseModal()" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition">
                    + Añadir Primer Gasto Fijo
                  </button>
                </div>
              ` : ''}
              ${state.fixedExpenses.map(fix => `
                <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 flex items-center justify-between gap-2">
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-gray-900 dark:text-white truncate">${fix.concept}</p>
                    <p class="text-[11px] text-gray-500 dark:text-gray-400">
                      Día ${fix.dayOfMonth} · ${fix.frequency} · <span class="text-indigo-600 dark:text-indigo-400">${fix.category}</span>
                    </p>
                    ${fix.lastProcessedMonth === '2026-10' ? '<span class="inline-block mt-0.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">✓ Procesado este mes</span>' : ''}
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">${formatMoney(fix.amount)}</span>
                    <button onclick="deleteFixedExpense('${fix.id}')" class="text-gray-400 hover:text-rose-500 p-1 transition" title="Eliminar gasto fijo">
                      ${ICONS.trash}
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Transactions History (Expenses & Incomes) -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h2 class="text-base font-bold text-gray-900 dark:text-white">Movimientos Recientes (Octubre 2026)</h2>
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-400">Filtrar:</span>
              <button onclick="filterTransactions('all')" id="btn-tx-all" class="text-xs px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-medium">Todos</button>
              <button onclick="filterTransactions('expense')" id="btn-tx-expense" class="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">Gastos</button>
              <button onclick="filterTransactions('income')" id="btn-tx-income" class="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">Ingresos</button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700 text-gray-400 uppercase tracking-wider text-[10px]">
                  <th class="pb-2.5">Concepto</th>
                  <th class="pb-2.5">Categoría / Tipo</th>
                  <th class="pb-2.5">Fecha</th>
                  <th class="pb-2.5 text-right">Importe</th>
                  <th class="pb-2.5 text-right">Acción</th>
                </tr>
              </thead>
              <tbody id="transactionsTableBody" class="divide-y divide-gray-100 dark:divide-gray-700/60">
                ${renderTransactionsRows('all')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

let activeTxFilter = 'all';
function filterTransactions(type) {
  activeTxFilter = type;
  ['all', 'expense', 'income'].forEach(t => {
    const btn = document.getElementById(`btn-tx-${t}`);
    if (btn) {
      if (t === type) {
        btn.className = 'text-xs px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-medium';
      } else {
        btn.className = 'text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium';
      }
    }
  });
  const tbody = document.getElementById('transactionsTableBody');
  if (tbody) tbody.innerHTML = renderTransactionsRows(type);
}

function renderTransactionsRows(filter) {
  const combined = [];

  if (filter === 'all' || filter === 'income') {
    state.incomes.forEach(i => {
      combined.push({
        id: i.id,
        type: 'income',
        concept: i.concept,
        category: i.isRecurring ? 'Recurrente' : 'Puntual',
        date: i.date,
        amount: i.amount,
        notes: i.notes
      });
    });
  }

  if (filter === 'all' || filter === 'expense') {
    state.expenses.forEach(e => {
      combined.push({
        id: e.id,
        type: 'expense',
        concept: e.concept,
        category: e.category,
        date: e.date,
        amount: e.amount,
        notes: e.notes,
        isFixed: e.isFixed
      });
    });
  }

  // Sort descending by date
  combined.sort((a, b) => new Date(b.date) - new Date(a.date));

  return combined.map(tx => `
    <tr class="hover:bg-gray-50/70 dark:hover:bg-gray-700/30 transition">
      <td class="py-3 font-medium text-gray-900 dark:text-white">
        ${tx.concept}
        ${tx.notes ? `<span class="block text-[11px] text-gray-400 font-normal">${tx.notes}</span>` : ''}
      </td>
      <td class="py-3">
        <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${
          tx.type === 'income' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' :
          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        }">${tx.category}</span>
        ${tx.isFixed ? '<span class="ml-1 text-[10px] text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">📌 Fijo</span>' : ''}
      </td>
      <td class="py-3 text-gray-500 dark:text-gray-400 font-mono text-[11px]">${formatDate(tx.date)}</td>
      <td class="py-3 text-right font-mono font-bold ${tx.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
        ${tx.type === 'income' ? '+' : '-'}${formatMoney(tx.amount)}
      </td>
      <td class="py-3 text-right whitespace-nowrap">
        ${tx.type === 'expense' && !tx.isFixed ? `
          <button onclick="makeExpenseFixed('${tx.id}')" title="Convertir en Gasto Fijo Recurrente" class="px-2 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold mr-1 transition">
            📌 Hacer Fijo
          </button>
        ` : ''}
        <button onclick="deleteTransaction('${tx.type}', '${tx.id}')" class="text-gray-400 hover:text-rose-500 transition p-1" title="Eliminar">
          ${ICONS.trash}
        </button>
      </td>
    </tr>
  `).join('');
}

function deleteTransaction(type, id) {
  if (!confirm('¿Eliminar este movimiento?')) return;
  if (type === 'income') {
    state.incomes = state.incomes.filter(i => i.id !== id);
  } else {
    state.expenses = state.expenses.filter(e => e.id !== id);
  }
  saveState();
  renderFinances(document.getElementById('main-content'));
  showToast('Movimiento eliminado', 'info');
}

// -------------------------------------------------------------
// 3. FITNESS & WORKOUTS
// -------------------------------------------------------------
function renderFitness(container) {
  const currentWeekWorkouts = state.workouts.length;
  const goal = state.settings.weeklyWorkoutGoal;
  const goalPct = Math.min(100, Math.round((currentWeekWorkouts / goal) * 100));

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Fitness Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Fitness & Entrenamiento</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Rutinas semanales, registro de cargas y control de sesiones</p>
        </div>
        <button onclick="openModal('addWorkoutModal')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md transition">
          <span>+</span> Registrar Nuevo Entrenamiento
        </button>
      </div>

      <!-- Weekly Goal Ribbon -->
      <div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs uppercase tracking-wider font-bold bg-white/20 px-2.5 py-1 rounded-full">Objetivo Semanal</span>
          <h2 class="text-xl md:text-2xl font-black mt-2">${currentWeekWorkouts} de ${goal} Entrenamientos Completados</h2>
          <p class="text-amber-100 text-xs md:text-sm mt-1">¡Estás al ${goalPct}% de tu objetivo de la semana! Mantén el ritmo.</p>
        </div>
        <div class="w-full md:w-48 bg-white/20 rounded-full h-3">
          <div class="bg-white h-3 rounded-full transition-all duration-700" style="width: ${goalPct}%"></div>
        </div>
      </div>

      <!-- Routines Showcase -->
      <div>
        <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Rutinas Configuradas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          ${state.routines.map(rou => {
            const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const dayLabel = dayNames[rou.dayOfWeek] || `Día ${rou.dayOfWeek}`;

            return `
              <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between card-hover">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                      ${rou.activity}
                    </span>
                    <span class="text-xs text-gray-400 font-medium">${dayLabel}</span>
                  </div>
                  <h3 class="text-base font-bold text-gray-900 dark:text-white mb-3">${rou.name}</h3>
                  
                  <div class="space-y-2 mb-4">
                    ${rou.exercises.length > 0 ? rou.exercises.map(ex => `
                      <div class="text-xs p-2 rounded-lg bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <span class="font-medium text-gray-800 dark:text-gray-200 truncate pr-2">${ex.name}</span>
                        <span class="font-mono text-gray-500 dark:text-gray-400 text-[11px] whitespace-nowrap">
                          ${ex.targetSets}×${ex.targetReps} ${ex.targetWeightKg > 0 ? `@ ${ex.targetWeightKg}kg` : ''}
                        </span>
                      </div>
                    `).join('') : '<p class="text-xs text-gray-400 italic">Sesión de cardio / carrera al aire libre</p>'}
                  </div>
                </div>

                <button onclick="startRoutineWorkout('${rou.id}')" class="w-full py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-indigo-600 hover:text-white text-gray-700 dark:text-gray-300 font-semibold text-xs transition text-center">
                  Iniciar este Entrenamiento →
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Workouts History Log -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Historial de Entrenamientos Realizados</h2>

        <div class="space-y-4">
          ${state.workouts.map(work => `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-3">
                  <span class="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    🏋️
                  </span>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900 dark:text-white">${work.routineName}</h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      ${formatDate(work.date)} · ${work.activity} · ⏱️ ${work.durationMinutes} minutos
                    </p>
                  </div>
                </div>
                <button onclick="deleteWorkout('${work.id}')" class="text-xs text-gray-400 hover:text-rose-500 self-start sm:self-center">
                  Eliminar
                </button>
              </div>

              ${work.notes ? `
                <div class="mb-3 text-xs p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50 italic">
                  💬 ${work.notes}
                </div>
              ` : ''}

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                ${work.exercises.map(ex => `
                  <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs flex justify-between items-center">
                    <span class="font-medium text-gray-800 dark:text-gray-200 truncate pr-2">${ex.name}</span>
                    <span class="font-mono font-bold text-indigo-600 dark:text-indigo-400">${ex.sets}×${ex.reps} (${ex.weightKg} kg)</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function startRoutineWorkout(routineId) {
  const routine = state.routines.find(r => r.id === routineId);
  if (!routine) return;

  const newWorkout = {
    id: 'work-' + Date.now(),
    date: '2026-10-13',
    activity: routine.activity,
    routineName: routine.name,
    durationMinutes: 60,
    exercises: routine.exercises.map((e, idx) => ({
      id: 'el-' + Date.now() + '-' + idx,
      name: e.name,
      sets: e.targetSets,
      reps: e.targetReps,
      weightKg: e.targetWeightKg
    })),
    notes: 'Entrenamiento completado hoy.',
    createdAt: Date.now()
  };

  state.workouts.unshift(newWorkout);
  saveState();
  triggerCelebration();
  showToast(`¡Entrenamiento "${routine.name}" registrado! 💪`, 'success');
  renderFitness(document.getElementById('main-content'));
}

function deleteWorkout(id) {
  if (!confirm('¿Eliminar este registro de entrenamiento?')) return;
  state.workouts = state.workouts.filter(w => w.id !== id);
  saveState();
  renderFitness(document.getElementById('main-content'));
  showToast('Entrenamiento eliminado', 'info');
}

// -------------------------------------------------------------
// 4. HABITS TRACKER
// -------------------------------------------------------------
function renderHabits(container) {
  // 7-day range ending today 2026-10-13
  const dateRange = [
    '2026-10-07',
    '2026-10-08',
    '2026-10-09',
    '2026-10-10',
    '2026-10-11',
    '2026-10-12',
    '2026-10-13'
  ];

  const dayLabels = ['Mié 07', 'Jue 08', 'Vie 09', 'Sáb 10', 'Dom 11', 'Lun 12', 'Hoy 13'];

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Habits Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Seguimiento de Hábitos</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Control de constancia diaria y metas de repetición semanal</p>
        </div>
        <button onclick="openModal('addHabitModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition">
          <span>+</span> Nuevo Hábito
        </button>
      </div>

      <!-- Weekly Matrix Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700 text-gray-400 text-xs">
              <th class="pb-3 font-semibold uppercase tracking-wider text-[11px] w-64">Hábito</th>
              <th class="pb-3 text-center font-semibold uppercase tracking-wider text-[11px]">Meta</th>
              ${dateRange.map((d, i) => `
                <th class="pb-3 text-center font-semibold text-[11px] ${d === '2026-10-13' ? 'text-indigo-600 dark:text-indigo-400 font-extrabold' : ''}">
                  ${dayLabels[i]}
                </th>
              `).join('')}
              <th class="pb-3 text-center font-semibold uppercase tracking-wider text-[11px]">Racha</th>
              <th class="pb-3 text-right"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-700/60 text-sm">
            ${state.habits.map(habit => {
              const weekCompletedCount = dateRange.filter(d => habit.completedDates.includes(d)).length;
              const streak = calculateHabitStreak(habit);

              return `
                <tr class="hover:bg-gray-50/70 dark:hover:bg-gray-700/30 transition">
                  <!-- Name & Icon -->
                  <td class="py-3.5 pr-4">
                    <div class="flex items-center gap-3">
                      <span class="w-8 h-8 rounded-xl flex items-center justify-center text-base" style="background-color: ${habit.color}20; color: ${habit.color}">
                        ${getHabitIcon(habit.icon)}
                      </span>
                      <div>
                        <p class="font-bold text-gray-900 dark:text-white text-xs">${habit.name}</p>
                        <p class="text-[10px] text-gray-400">${weekCompletedCount} de ${habit.frequencyDaysPerWeek} días esta semana</p>
                      </div>
                    </div>
                  </td>

                  <!-- Target Badge -->
                  <td class="py-3.5 text-center font-mono text-xs text-gray-500 dark:text-gray-400">
                    <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-[10px]">
                      ${habit.frequencyDaysPerWeek}d / sem
                    </span>
                  </td>

                  <!-- 7 Days Checkboxes -->
                  ${dateRange.map(d => {
                    const checked = habit.completedDates.includes(d);
                    const isToday = d === '2026-10-13';
                    return `
                      <td class="py-3.5 text-center">
                        <button onclick="toggleHabitDay('${habit.id}', '${d}')"
                          class="w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all transform active:scale-90 ${
                            checked ? 
                            'bg-indigo-600 text-white shadow-sm' : 
                            isToday ? 'border-2 border-dashed border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50' : 'bg-gray-100 dark:bg-gray-700/60 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }">
                          ${checked ? '✓' : ''}
                        </button>
                      </td>
                    `;
                  }).join('')}

                  <!-- Streak -->
                  <td class="py-3.5 text-center font-mono font-bold text-xs text-orange-500">
                    <span class="inline-flex items-center gap-0.5">🔥 ${streak}d</span>
                  </td>

                  <!-- Delete -->
                  <td class="py-3.5 text-right pl-2">
                    <button onclick="deleteHabit('${habit.id}')" class="text-gray-400 hover:text-rose-500 transition">
                      ${ICONS.trash}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function calculateHabitStreak(habit) {
  // calculates streak up to 2026-10-13
  let streak = 0;
  const cur = new Date('2026-10-13');
  while (true) {
    const iso = cur.toISOString().split('T')[0];
    if (habit.completedDates.includes(iso)) {
      streak++;
      cur.setDate(cur.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function toggleHabitDay(habitId, dateStr) {
  const habit = state.habits.find(h => h.id === habitId);
  if (!habit) return;

  const idx = habit.completedDates.indexOf(dateStr);
  if (idx > -1) {
    habit.completedDates.splice(idx, 1);
  } else {
    habit.completedDates.push(dateStr);
    triggerCelebration();
  }
  saveState();
  renderCurrentTab();
  showToast(`Hábito "${habit.name}" actualizado`);
}

function deleteHabit(habitId) {
  if (!confirm('¿Eliminar este hábito?')) return;
  state.habits = state.habits.filter(h => h.id !== habitId);
  saveState();
  renderHabits(document.getElementById('main-content'));
  showToast('Hábito eliminado', 'info');
}

// -------------------------------------------------------------
// 5. TASKS
// -------------------------------------------------------------
function renderTasks(container) {
  const pendingTasks = state.tasks.filter(t => !t.completed);
  const completedTasks = state.tasks.filter(t => t.completed);

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Tareas & Recordatorios</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Organización por prioridad, fecha límite y avisos</p>
        </div>
        <button onclick="openModal('addTaskModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition">
          <span>+</span> Nueva Tarea
        </button>
      </div>

      <!-- Pending Tasks -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-bold text-gray-900 dark:text-white">Pendientes (${pendingTasks.length})</h2>
        </div>
        <div class="space-y-3">
          ${pendingTasks.length === 0 ? '<p class="text-xs text-gray-400 py-3">¡No hay tareas pendientes! Estás al día.</p>' : ''}
          ${pendingTasks.map(task => renderTaskItem(task)).join('')}
        </div>
      </div>

      <!-- Completed Tasks -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm opacity-80">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-bold text-gray-900 dark:text-white">Completadas (${completedTasks.length})</h2>
        </div>
        <div class="space-y-2">
          ${completedTasks.map(task => renderTaskItem(task)).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderTaskItem(task) {
  return `
    <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start justify-between gap-3 hover:bg-gray-100/80 dark:hover:bg-gray-700/60 transition">
      <div class="flex items-start gap-3 flex-1 min-w-0">
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask('${task.id}')"
          class="mt-1 w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-semibold ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-white'}">
              ${task.title}
            </span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase badge-priority-${task.priority}">
              ${task.priority}
            </span>
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
              ${task.category}
            </span>
            ${task.isReminder ? '<span class="text-amber-500 text-xs" title="Recordatorio activo">🔔</span>' : ''}
            ${task.recurring && task.recurring !== 'none' ? `<span class="text-[10px] text-indigo-500 font-mono">🔁 ${task.recurring}</span>` : ''}
          </div>
          ${task.description ? `<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${task.description}</p>` : ''}
          <div class="flex items-center gap-3 mt-2 text-[11px] text-gray-400 font-mono">
            <span>📅 Vence: ${formatDate(task.dueDate)}</span>
            ${task.dueTime ? `<span>⏰ ${task.dueTime}</span>` : ''}
          </div>
        </div>
      </div>

      <button onclick="deleteTask('${task.id}')" class="text-gray-400 hover:text-rose-500 p-1 transition">
        ${ICONS.trash}
      </button>
    </div>
  `;
}

function toggleTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  if (task.completed) {
    triggerCelebration();
  }
  saveState();
  renderCurrentTab();
  showToast(task.completed ? 'Tarea marcada como completada ✓' : 'Tarea reabierta');
}

function deleteTask(id) {
  if (!confirm('¿Eliminar esta tarea?')) return;
  state.tasks = state.tasks.filter(t => t.id !== id);
  saveState();
  renderCurrentTab();
  showToast('Tarea eliminada', 'info');
}

// -------------------------------------------------------------
// 6. SHOPPING LIST
// -------------------------------------------------------------
function renderShopping(container) {
  const activeList = state.shoppingLists.find(l => l.id === state.activeShoppingListId) || state.shoppingLists[0];
  const items = activeList ? activeList.items : [];
  const completedCount = items.filter(i => i.completed).length;
  const totalCost = items.reduce((acc, i) => acc + (i.estimatedPrice || 0), 0);

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Lista de la Compra</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Supermercados, cantidades, unidades y precios estimados</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="openModal('addShoppingItemModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition">
            <span>+</span> Añadir Producto
          </button>
          <button onclick="openModal('addShoppingListModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-800 dark:text-gray-200 font-semibold text-xs transition">
            + Nueva Lista
          </button>
        </div>
      </div>

      <!-- List Switcher Tabs -->
      <div class="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 overflow-x-auto">
        ${state.shoppingLists.map(list => `
          <button onclick="switchShoppingList('${list.id}')"
            class="px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              list.id === state.activeShoppingListId ?
              'bg-indigo-600 text-white shadow-sm' :
              'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
            }">
            🛒 ${list.name} (${list.items.length})
          </button>
        `).join('')}
      </div>

      <!-- Frequent Quick Items Ribbon -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
        <span class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2.5">
          ⚡ Añadir Rápido (Artículos Frecuentes):
        </span>
        <div class="flex flex-wrap gap-2">
          ${state.frequentShoppingItems.map(itemStr => `
            <button onclick="quickAddShoppingItem('${itemStr}')" 
              class="px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition flex items-center gap-1">
              <span>+</span> ${itemStr}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Active List Detail Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
          <div>
            <h2 class="text-lg font-bold text-gray-900 dark:text-white">${activeList ? activeList.name : 'Lista'}</h2>
            <p class="text-xs text-gray-500">${completedCount} de ${items.length} artículos comprados</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-400">Total Estimado:</span>
            <div class="text-lg font-bold font-mono text-gray-900 dark:text-white">${formatMoney(totalCost)}</div>
          </div>
        </div>

        <div class="space-y-2.5">
          ${items.length === 0 ? '<p class="text-xs text-gray-400 py-3">No hay productos en esta lista.</p>' : ''}
          ${items.map(item => `
            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-center justify-between gap-3 hover:bg-gray-100/80 transition">
              <div class="flex items-center gap-3 flex-1 min-w-0">
                <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleShoppingItem('${activeList.id}', '${item.id}')"
                  class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer">
                <div>
                  <p class="text-sm font-semibold ${item.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-white'}">
                    ${item.name}
                  </p>
                  <div class="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                    <span class="font-mono text-gray-600 dark:text-gray-300">${item.quantity} ${item.unit}</span>
                    <span>·</span>
                    <span class="px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-semibold">${item.supermarket}</span>
                    <span>·</span>
                    <span>${item.category}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-bold text-gray-800 dark:text-gray-200">${formatMoney(item.estimatedPrice)}</span>
                <button onclick="deleteShoppingItem('${activeList.id}', '${item.id}')" class="text-gray-400 hover:text-rose-500 transition p-1">
                  ${ICONS.trash}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function switchShoppingList(listId) {
  state.activeShoppingListId = listId;
  saveState();
  renderShopping(document.getElementById('main-content'));
}

function toggleShoppingItem(listId, itemId) {
  const list = state.shoppingLists.find(l => l.id === listId);
  if (!list) return;
  const item = list.items.find(i => i.id === itemId);
  if (!item) return;
  item.completed = !item.completed;
  if (item.completed) triggerCelebration();
  saveState();
  renderShopping(document.getElementById('main-content'));
}

function deleteShoppingItem(listId, itemId) {
  const list = state.shoppingLists.find(l => l.id === listId);
  if (!list) return;
  list.items = list.items.filter(i => i.id !== itemId);
  saveState();
  renderShopping(document.getElementById('main-content'));
  showToast('Artículo eliminado', 'info');
}

function quickAddShoppingItem(itemName) {
  const list = state.shoppingLists.find(l => l.id === state.activeShoppingListId) || state.shoppingLists[0];
  if (!list) return;

  const newItem = {
    id: 'item-' + Date.now(),
    name: itemName,
    quantity: 1,
    unit: 'ud',
    category: 'Varios',
    supermarket: 'Mercadona',
    estimatedPrice: 2.5,
    completed: false,
    createdAt: Date.now()
  };

  list.items.push(newItem);
  saveState();
  renderShopping(document.getElementById('main-content'));
  showToast(`"${itemName}" añadido a la lista`);
}

// -------------------------------------------------------------
// 7. GOALS
// -------------------------------------------------------------
function renderGoals(container) {
  container.innerHTML = `
    <div class="space-y-6">
      <!-- Goals Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Metas & Objetivos</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Progreso acumulado, objetivos financieros y personales</p>
        </div>
        <button onclick="openModal('addGoalModal')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition">
          <span>+</span> Nueva Meta
        </button>
      </div>

      <!-- Goals Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${state.goals.map(goal => {
          const pct = Math.min(100, Math.round((goal.currentValue / goal.targetValue) * 100));

          return `
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                    ${goal.category}
                  </span>
                  <span class="text-xs text-gray-400">📅 ${formatDate(goal.targetDate)}</span>
                </div>

                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">${goal.title}</h3>

                <!-- Big percentage and meter -->
                <div class="my-4">
                  <div class="flex justify-between items-baseline mb-1">
                    <span class="text-3xl font-black font-mono text-indigo-600 dark:text-indigo-400">${pct}%</span>
                    <span class="text-xs font-mono text-gray-500 dark:text-gray-400">
                      <strong>${goal.currentValue}</strong> / ${goal.targetValue} ${goal.unit}
                    </span>
                  </div>
                  <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-700" style="width: ${pct}%"></div>
                  </div>
                </div>
              </div>

              <!-- Quick Progress Adjustment controls -->
              <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <button onclick="adjustGoalValue('${goal.id}', -1)" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-700 dark:text-gray-300 font-bold text-xs">-1</button>
                  <button onclick="adjustGoalValue('${goal.id}', 1)" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-700 dark:text-gray-300 font-bold text-xs">+1</button>
                  <button onclick="adjustGoalValue('${goal.id}', 5)" class="px-2 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-700 dark:text-gray-300 font-bold text-xs">+5</button>
                </div>
                <button onclick="deleteGoal('${goal.id}')" class="text-gray-400 hover:text-rose-500 text-xs transition">
                  Eliminar
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function adjustGoalValue(goalId, delta) {
  const goal = state.goals.find(g => g.id === goalId);
  if (!goal) return;
  goal.currentValue = Math.max(0, Math.round((goal.currentValue + delta) * 10) / 10);
  if (goal.currentValue >= goal.targetValue) {
    triggerCelebration();
    showToast(`¡Felicidades! Meta "${goal.title}" completada 🎉`, 'success');
  }
  saveState();
  renderGoals(document.getElementById('main-content'));
}

function deleteGoal(id) {
  if (!confirm('¿Eliminar esta meta?')) return;
  state.goals = state.goals.filter(g => g.id !== id);
  saveState();
  renderGoals(document.getElementById('main-content'));
  showToast('Meta eliminada', 'info');
}

// -------------------------------------------------------------
// 8. SETTINGS & DATA BACKUP
// -------------------------------------------------------------
function renderSettings(container) {
  const hasSheets = state.settings && state.settings.googleSheetsUrl && state.settings.googleSheetsUrl.trim() !== '';

  container.innerHTML = `
    <div class="space-y-6 max-w-4xl">
      <!-- Settings Header -->
      <div>
        <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Ajustes & Gestión de Datos</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Personalización de usuario, sincronización con Google Sheets y respaldos</p>
      </div>

      <!-- Cloud Database: Google Sheets Sync -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🟢</span>
            <div>
              <h2 class="text-base font-bold text-gray-900 dark:text-white">Base de Datos: Google Sheets</h2>
              <p class="text-xs text-gray-500">Sincronización automática en tiempo real con tu Google Drive (Móvil y PC)</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold ${
            hasSheets ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' :
            'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
          }">
            ${hasSheets ? '✓ Conectado a Sheets' : 'Modo Local (Sin Nube)'}
          </span>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-700 text-xs space-y-2 text-slate-600 dark:text-slate-300">
          <p class="font-bold text-slate-800 dark:text-white">¿Cómo conectar tu Google Sheet?</p>
          <ol class="list-decimal list-inside space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
            <li>Crea una hoja en Google Sheets (<a href="https://sheets.new" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline font-semibold">sheets.new</a>).</li>
            <li>Ve a <strong>Extensiones > Apps Script</strong>, pega el código del archivo <code class="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-indigo-600 dark:text-indigo-300 font-mono">google-sheets-script.js</code> y guarda.</li>
            <li>Haz clic en <strong>Implementar > Nueva implementación > Aplicación web</strong> (Acceso: <em>Cualquiera</em>).</li>
            <li>Copia la <strong>URL de la aplicación web</strong> (termina en <em>/exec</em>) y pégala en el campo de abajo.</li>
          </ol>
        </div>

        <div>
          <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">URL de Google Apps Script Web App (/exec)</label>
          <input type="url" id="setting-googleSheetsUrl" value="${(state.settings && state.settings.googleSheetsUrl) || ''}" 
            placeholder="https://script.google.com/macros/s/AKfycb.../exec"
            class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-700 text-xs font-mono focus:ring-2 focus:ring-indigo-500">
        </div>

        <div class="flex flex-wrap items-center gap-2 pt-1">
          <button onclick="saveGoogleSheetsSettings()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition">
            Guardar y Conectar
          </button>
          ${hasSheets ? `
            <button onclick="pushToGoogleSheets(); showToast('Enviando datos a Google Sheets...');" class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition">
              ⬆️ Forzar Subida a Sheets
            </button>
            <button onclick="loadFromGoogleSheets()" class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-semibold text-xs transition">
              ⬇️ Forzar Descarga de Sheets
            </button>
            <button onclick="disconnectGoogleSheets()" class="px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold transition">
              Desconectar
            </button>
          ` : ''}
        </div>
      </div>

      <!-- User Profile Settings -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <h2 class="text-base font-bold text-gray-900 dark:text-white">Perfil y Preferencias</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Nombre de Usuario</label>
            <input type="text" id="setting-userName" value="${state.settings.userName}" 
              class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Presupuesto Mensual (€)</label>
            <input type="number" id="setting-monthlyBudget" value="${state.settings.monthlyBudget}" 
              class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Meta Semanal de Entrenamientos</label>
            <input type="number" id="setting-weeklyWorkoutGoal" value="${state.settings.weeklyWorkoutGoal}" 
              class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Tema Visual</label>
            <select id="setting-theme" class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-indigo-500">
              <option value="light" ${state.settings.theme === 'light' ? 'selected' : ''}>Claro</option>
              <option value="dark" ${state.settings.theme === 'dark' ? 'selected' : ''}>Oscuro</option>
            </select>
          </div>
        </div>

        <button onclick="saveUserProfileSettings()" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition">
          Guardar Cambios de Perfil
        </button>
      </div>

      <!-- Backup, JSON & Excel Export -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <h2 class="text-base font-bold text-gray-900 dark:text-white">Exportar & Importar Datos (Excel / JSON)</h2>
        <p class="text-xs text-gray-500">Descarga copias de seguridad en JSON o tablas formateadas en CSV compatibles con Microsoft Excel.</p>

        <div class="flex flex-wrap gap-3">
          <button onclick="exportToExcel()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-sm transition">
            <span>📊</span> Exportar a Excel (CSV)
          </button>

          <button onclick="exportJSONBackup()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold text-xs shadow-sm transition">
            <span>📥</span> Respaldo JSON Completo
          </button>

          <label class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition cursor-pointer">
            <span>📤</span> Importar Archivo JSON
            <input type="file" id="importJsonFileInput" accept=".json" onchange="importJSONBackup(event)" class="hidden">
          </label>

          <button onclick="resetToDefault()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs shadow-sm transition">
            <span>🔄</span> Restablecer Fábrica
          </button>
        </div>
      </div>
    </div>
  `;
}

function saveGoogleSheetsSettings() {
  const url = (document.getElementById('setting-googleSheetsUrl').value || '').trim();
  if (!state.settings) state.settings = {};
  state.settings.googleSheetsUrl = url;
  saveState();
  if (url) {
    showToast('Conectando con Google Sheets...', 'info');
    loadFromGoogleSheets();
  } else {
    updateSyncStatus('local');
    showToast('Modo local activado');
  }
  renderSettings(document.getElementById('main-content'));
}

function disconnectGoogleSheets() {
  if (confirm('¿Desconectar la sincronización de Google Sheets? Tus datos locales se conservarán.')) {
    if (!state.settings) state.settings = {};
    state.settings.googleSheetsUrl = '';
    saveState();
    updateSyncStatus('local');
    showToast('Desconectado de Google Sheets');
    renderSettings(document.getElementById('main-content'));
  }
}

function saveUserProfileSettings() {
  const userName = document.getElementById('setting-userName').value;
  const monthlyBudget = parseFloat(document.getElementById('setting-monthlyBudget').value);
  const weeklyWorkoutGoal = parseInt(document.getElementById('setting-weeklyWorkoutGoal').value, 10);
  const theme = document.getElementById('setting-theme').value;

  state.settings.userName = userName || 'Bilal ';
  state.settings.monthlyBudget = monthlyBudget || 1800;
  state.settings.weeklyWorkoutGoal = weeklyWorkoutGoal || 4;
  state.settings.theme = theme;

  saveState();
  applyTheme();
  showToast('Ajustes guardados correctamente', 'success');
}

function exportToExcel() {
  // Export formatted CSV with UTF-8 BOM so Microsoft Excel opens it directly without encoding issues
  let csvContent = '\uFEFF';

  // Gastos
  csvContent += "=== GASTOS ===\r\n";
  csvContent += "Fecha;Concepto;Categoria;Importe;Fijo;Notas\r\n";
  state.expenses.forEach(e => {
    csvContent += `"${e.date}";"${e.concept}";"${e.category}";"${e.amount.toString().replace('.', ',')}";"${e.isFixed ? 'SI' : 'NO'}";"${e.notes || ''}"\r\n`;
  });

  // Ingresos
  csvContent += "\r\n=== INGRESOS ===\r\n";
  csvContent += "Fecha;Concepto;Importe;Recurrente;Notas\r\n";
  state.incomes.forEach(i => {
    csvContent += `"${i.date}";"${i.concept}";"${i.amount.toString().replace('.', ',')}";"${i.isRecurring ? 'SI' : 'NO'}";"${i.notes || ''}"\r\n`;
  });

  // Tareas
  csvContent += "\r\n=== TAREAS ===\r\n";
  csvContent += "Titulo;Vencimiento;Hora;Prioridad;Categoria;Completada\r\n";
  state.tasks.forEach(t => {
    csvContent += `"${t.title}";"${t.dueDate}";"${t.dueTime || ''}";"${t.priority}";"${t.category}";"${t.completed ? 'SI' : 'NO'}"\r\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bilal-life-os-datos-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Archivo CSV para Excel descargado ✓', 'success');
}

function exportJSONBackup() {
  const jsonStr = JSON.stringify(state, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bilal-life-os-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Respaldo descargado con éxito', 'success');
}

function importJSONBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && parsed.settings && parsed.incomes && parsed.expenses) {
        state = parsed;
        saveState();
        applyTheme();
        renderCurrentTab();
        showToast('¡Datos importados con éxito!', 'success');
      } else {
        alert('El archivo no cumple con el formato esperado.');
      }
    } catch (err) {
      alert('Error al leer el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// -------------------------------------------------------------
// MODALS LOGIC
// -------------------------------------------------------------
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

// Form Handlers & Helpers
function onIncomeTypeChange() {
  const typeEl = document.getElementById('inc-type');
  const conceptInput = document.getElementById('inc-concept');
  const notesInput = document.getElementById('inc-notes');
  const recurringInput = document.getElementById('inc-recurring');
  if (!typeEl) return;

  const type = typeEl.value;
  if (type === 'nomina') {
    conceptInput.value = 'Nómina Mensual';
    notesInput.value = 'Ingreso principal mensual recurrente';
    recurringInput.checked = true;
  } else if (type === 'bonus') {
    conceptInput.value = 'Bonus Semestral';
    notesInput.value = 'Paga extra / Bonus (2 veces al año)';
    recurringInput.checked = false;
  } else {
    conceptInput.value = '';
    notesInput.value = '';
    recurringInput.checked = false;
  }
}

function toggleFixedOptions() {
  const chk = document.getElementById('exp-make-fixed');
  const container = document.getElementById('fixed-options-container');
  if (!chk || !container) return;
  if (chk.checked) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}

function makeExpenseFixed(expenseId) {
  const exp = state.expenses.find(e => e.id === expenseId);
  if (!exp) return;
  if (exp.isFixed) {
    showToast('Este gasto ya es un gasto fijo recurrente', 'info');
    return;
  }

  const day = prompt(`¿Qué día del mes se cobrará habitualmente este gasto? (1-31):`, "1");
  if (!day) return;

  const fixId = 'fix-' + Date.now();
  state.fixedExpenses.unshift({
    id: fixId,
    concept: exp.concept,
    amount: exp.amount,
    category: exp.category,
    dayOfMonth: parseInt(day, 10) || 1,
    frequency: 'mensual',
    active: true,
    lastProcessedMonth: exp.date ? exp.date.slice(0, 7) : '2026-10',
    createdAt: Date.now()
  });

  exp.isFixed = true;
  exp.fixedExpenseId = fixId;
  saveState();
  triggerCelebration();
  showToast(`¡"${exp.concept}" convertido en Gasto Fijo recurrente! 📌`, 'success');
  renderFinances(document.getElementById('main-content'));
}

function openAddFixedExpenseModal() {
  openModal('addExpenseModal');
  const chk = document.getElementById('exp-make-fixed');
  if (chk) {
    chk.checked = true;
    toggleFixedOptions();
  }
}

function deleteFixedExpense(id) {
  if (!confirm('¿Eliminar este gasto fijo recurrente?')) return;
  state.fixedExpenses = state.fixedExpenses.filter(f => f.id !== id);
  saveState();
  renderFinances(document.getElementById('main-content'));
  showToast('Gasto fijo eliminado', 'info');
}

function submitAddIncome(e) {
  e.preventDefault();
  const concept = document.getElementById('inc-concept').value;
  const amount = parseFloat(document.getElementById('inc-amount').value);
  const date = document.getElementById('inc-date').value || '2026-10-13';
  const isRecurring = document.getElementById('inc-recurring').checked;
  const notes = document.getElementById('inc-notes').value;

  state.incomes.unshift({
    id: 'inc-' + Date.now(),
    concept,
    amount,
    date,
    isRecurring,
    notes,
    createdAt: Date.now()
  });

  saveState();
  closeModal('addIncomeModal');
  triggerCelebration();
  showToast('Ingreso registrado con éxito 💰', 'success');
  renderCurrentTab();
}

function submitAddExpense(e) {
  e.preventDefault();
  const concept = document.getElementById('exp-concept').value;
  const amount = parseFloat(document.getElementById('exp-amount').value);
  const category = document.getElementById('exp-category').value;
  const date = document.getElementById('exp-date').value || '2026-10-13';
  const notes = document.getElementById('exp-notes').value;

  const makeFixed = document.getElementById('exp-make-fixed') ? document.getElementById('exp-make-fixed').checked : false;
  let fixId = null;

  if (makeFixed) {
    fixId = 'fix-' + Date.now();
    const day = parseInt(document.getElementById('exp-fixed-day').value, 10) || 1;
    const freq = document.getElementById('exp-fixed-freq').value || 'mensual';

    state.fixedExpenses.unshift({
      id: fixId,
      concept,
      amount,
      category,
      dayOfMonth: day,
      frequency: freq,
      active: true,
      lastProcessedMonth: date.slice(0, 7),
      createdAt: Date.now()
    });
  }

  state.expenses.unshift({
    id: 'exp-' + Date.now(),
    concept,
    amount,
    category,
    date,
    notes,
    isFixed: makeFixed,
    fixedExpenseId: fixId,
    createdAt: Date.now()
  });

  saveState();
  closeModal('addExpenseModal');
  if (makeFixed) {
    triggerCelebration();
    showToast('Gasto registrado y añadido a Gastos Fijos recurrentes 📌', 'success');
  } else {
    showToast('Gasto registrado correctamente', 'success');
  }
  renderCurrentTab();
}

function submitAddTask(e) {
  e.preventDefault();
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-desc').value;
  const dueDate = document.getElementById('task-dueDate').value || '2026-10-13';
  const dueTime = document.getElementById('task-dueTime').value || '18:00';
  const priority = document.getElementById('task-priority').value;
  const category = document.getElementById('task-category').value;
  const isReminder = document.getElementById('task-isReminder').checked;

  state.tasks.unshift({
    id: 'task-' + Date.now(),
    title,
    description,
    dueDate,
    dueTime,
    priority,
    category,
    completed: false,
    isReminder,
    recurring: 'none',
    createdAt: Date.now()
  });

  saveState();
  closeModal('addTaskModal');
  showToast('Tarea añadida con éxito', 'success');
  renderCurrentTab();
}

function submitAddHabit(e) {
  e.preventDefault();
  const name = document.getElementById('habit-name').value;
  const frequency = parseInt(document.getElementById('habit-freq').value, 10) || 7;
  const icon = document.getElementById('habit-icon').value;
  const color = document.getElementById('habit-color').value;

  state.habits.push({
    id: 'hab-' + Date.now(),
    name,
    icon,
    color,
    frequencyDaysPerWeek: frequency,
    completedDates: [],
    createdAt: Date.now()
  });

  saveState();
  closeModal('addHabitModal');
  showToast('Nuevo hábito añadido', 'success');
  renderCurrentTab();
}

function submitAddShoppingItem(e) {
  e.preventDefault();
  const list = state.shoppingLists.find(l => l.id === state.activeShoppingListId) || state.shoppingLists[0];
  if (!list) return;

  const name = document.getElementById('shop-name').value;
  const quantity = parseFloat(document.getElementById('shop-qty').value) || 1;
  const unit = document.getElementById('shop-unit').value || 'ud';
  const supermarket = document.getElementById('shop-super').value || 'Mercadona';
  const category = document.getElementById('shop-cat').value || 'General';
  const estimatedPrice = parseFloat(document.getElementById('shop-price').value) || 0;

  list.items.push({
    id: 'item-' + Date.now(),
    name,
    quantity,
    unit,
    supermarket,
    category,
    estimatedPrice,
    completed: false,
    createdAt: Date.now()
  });

  saveState();
  closeModal('addShoppingItemModal');
  showToast('Producto añadido a la lista', 'success');
  renderCurrentTab();
}

function submitAddShoppingList(e) {
  e.preventDefault();
  const name = document.getElementById('new-list-name').value;
  if (!name) return;

  const newList = {
    id: 'list-' + Date.now(),
    name,
    createdAt: Date.now(),
    items: []
  };

  state.shoppingLists.push(newList);
  state.activeShoppingListId = newList.id;
  saveState();
  closeModal('addShoppingListModal');
  showToast(`Lista "${name}" creada`, 'success');
  renderCurrentTab();
}

function submitAddGoal(e) {
  e.preventDefault();
  const title = document.getElementById('goal-title').value;
  const category = document.getElementById('goal-category').value;
  const targetValue = parseFloat(document.getElementById('goal-target').value);
  const currentValue = parseFloat(document.getElementById('goal-current').value) || 0;
  const unit = document.getElementById('goal-unit').value;
  const targetDate = document.getElementById('goal-date').value || '2026-12-31';

  state.goals.push({
    id: 'goal-' + Date.now(),
    title,
    category,
    targetValue,
    currentValue,
    unit,
    targetDate,
    createdAt: Date.now()
  });

  saveState();
  closeModal('addGoalModal');
  showToast('Nueva meta establecida', 'success');
  renderCurrentTab();
}

function submitAddWorkout(e) {
  e.preventDefault();
  const routineName = document.getElementById('wout-routine').value;
  const activity = document.getElementById('wout-activity').value;
  const durationMinutes = parseInt(document.getElementById('wout-duration').value, 10) || 60;
  const notes = document.getElementById('wout-notes').value;

  state.workouts.unshift({
    id: 'work-' + Date.now(),
    date: '2026-10-13',
    activity,
    routineName,
    durationMinutes,
    exercises: [],
    notes,
    createdAt: Date.now()
  });

  saveState();
  triggerCelebration();
  closeModal('addWorkoutModal');
  showToast('Entrenamiento guardado 💪', 'success');
  renderCurrentTab();
}

// Global App Initialization
function renderApp() {
  applyTheme();
  setTab(currentTab);
  if (state.settings && state.settings.googleSheetsUrl && state.settings.googleSheetsUrl.trim() !== '') {
    loadFromGoogleSheets();
  } else {
    updateSyncStatus('local');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
