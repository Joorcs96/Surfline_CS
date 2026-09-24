/**
 * SURFLINE CASTELLÓN - Motor de Previsión Costera y Dashboard PWA
 * Basado en las especificaciones de MASTER_CONTEXT.md
 */

// ==========================================
// 1. CONFIGURACIÓN FÍSICA DE LOS SPOTS
// ==========================================

const SPOTS = [
  {
    id: 'Planetario',
    name: 'Planetario',
    zone: 'grao',
    zoneName: 'Grao de Castellón',
    label: 'Grao - Planetario',
    lat: 39.98,
    lon: 0.03,
    azimut: 26,
    thetaCrit: 45,
    sBase: 0.15,
    offshoreMin: 275,
    offshoreMax: 315,
    desc: 'Fondo de arena frente al planetario del Grao. Funciona con oleaje de Levante y Gregal.'
  },
  {
    id: 'Gurugu',
    name: 'Gurugu',
    zone: 'grao',
    zoneName: 'Grao de Castellón',
    label: 'Grao - Gurugú',
    lat: 39.99,
    lon: 0.04,
    azimut: 26,
    thetaCrit: 45,
    sBase: 0.15,
    offshoreMin: 275,
    offshoreMax: 315,
    desc: 'Playa abierta con picos variables. Muy expuesta, ideal con vientos terrales flojos.'
  },
  {
    id: 'Piramides',
    name: 'Pirámides',
    zone: 'grao',
    zoneName: 'Grao / Almassora',
    label: 'Grao - Pirámides',
    lat: 40.05,
    lon: 0.07,
    azimut: 38,
    thetaCrit: 50,
    sBase: 0.10,
    offshoreMin: 285,
    offshoreMax: 330,
    desc: 'Estructuras piramidales en el límite sur del Grao. Bancos estables protegidos con W/NW.'
  },
  {
    id: 'Palaciet',
    name: 'El Palaciet',
    zone: 'grao',
    zoneName: 'Benicàssim',
    label: 'Benicàssim - El Palaciet',
    lat: 40.05,
    lon: 0.07,
    azimut: 45,
    thetaCrit: 55,
    sBase: 0.10,
    offshoreMin: 290,
    offshoreMax: 340,
    desc: 'Playa abrigada junto a la antigua vía de Benicàssim con rompiente suave para tablones.'
  },
  {
    id: 'Voramar',
    name: 'Voramar',
    zone: 'grao',
    zoneName: 'Benicàssim',
    label: 'Benicàssim - Voramar',
    lat: 40.06,
    lon: 0.08,
    azimut: 54,
    thetaCrit: 65,
    sBase: 0.05,
    offshoreMin: 300,
    offshoreMax: 350,
    desc: 'Punta norte de Benicàssim protegida por la bahía. Aguanta temporales grandes de Levante.'
  },
  {
    id: 'Heliopolis',
    name: 'Heliópolis',
    zone: 'grao',
    zoneName: 'Benicàssim',
    label: 'Benicàssim - Heliópolis',
    lat: 40.03,
    lon: 0.06,
    azimut: 35,
    thetaCrit: 45,
    sBase: 0.15,
    offshoreMin: 280,
    offshoreMax: 330,
    desc: 'Línea de rompiente en la zona sur de Benicàssim con buenas secciones derechas.'
  },
  {
    id: 'MorroGos',
    name: 'Morro de Gos',
    zone: 'norte',
    zoneName: 'Oropesa del Mar',
    label: 'Oropesa - Morro de Gos',
    lat: 40.098,
    lon: 0.147,
    azimut: 60,
    thetaCrit: 65,
    sBase: 0.05,
    offshoreMin: 300,
    offshoreMax: 350,
    desc: 'Playa abierta de Oropesa. Recibe mar de fondo intenso con vientos del oeste.'
  },
  {
    id: 'Renega',
    name: 'La Renegà',
    zone: 'norte',
    zoneName: 'Oropesa del Mar',
    label: 'Oropesa - La Renegà',
    lat: 40.03,
    lon: 0.09,
    azimut: 172,
    thetaCrit: 10,
    sBase: 0.90,
    offshoreMin: 260,
    offshoreMax: 310,
    desc: 'Calas rocosas vírgenes protegidas del viento del norte. Requiere fondo de roca.'
  },
  {
    id: 'Burriana',
    name: 'Burriana',
    zone: 'sur',
    zoneName: 'Burriana',
    label: 'Burriana - Arenal / Escollera',
    lat: 39.88,
    lon: -0.05,
    azimut: 26,
    thetaCrit: 45,
    sBase: 0.20,
    offshoreMin: 275,
    offshoreMax: 315,
    desc: 'Rompiente clásica junto a la escollera del puerto. Derecha larga sobre fondo de arena.'
  },
  {
    id: 'Nules',
    name: 'Nules',
    zone: 'sur',
    zoneName: 'Nules',
    label: 'Nules - Espigones',
    lat: 39.85,
    lon: 0.08,
    azimut: 26,
    thetaCrit: 40,
    sBase: 0.25,
    offshoreMin: 275,
    offshoreMax: 315,
    desc: 'Zona de espigones cortos con picos rápidos de derecha e izquierda.'
  },
  {
    id: 'Almenara',
    name: 'Almenara',
    zone: 'sur',
    zoneName: 'Almenara',
    label: 'Almenara - Casablanca',
    lat: 39.75,
    lon: 0.05,
    azimut: 26,
    thetaCrit: 35,
    sBase: 0.30,
    offshoreMin: 275,
    offshoreMax: 315,
    desc: 'Orillera contundente en playa mixta de grava y arena. Picos rápidos y tuberos.'
  },
  {
    id: 'Peniscola N',
    name: 'Peñíscola N',
    zone: 'norte',
    zoneName: 'Peñíscola',
    label: 'Peñíscola - Playa Norte',
    lat: 40.37,
    lon: 0.40,
    azimut: 10,
    thetaCrit: 10,
    sBase: 0.80,
    offshoreMin: 260,
    offshoreMax: 300,
    desc: 'Bahía natural protegida por el peñón templario. Funciona con swells fuertes del Este.'
  },
  {
    id: 'Vinaros',
    name: 'Vinaròs',
    zone: 'norte',
    zoneName: 'Vinaròs',
    label: 'Vinaròs - El Fortí',
    lat: 40.47,
    lon: 0.48,
    azimut: 10,
    thetaCrit: 10,
    sBase: 0.85,
    offshoreMin: 260,
    offshoreMax: 300,
    desc: 'Playa urbana con rompientes definidas cerca del espigón del puerto.'
  }
];

// Mapa de configuraciones para la física exacta según MASTER_CONTEXT.md
const SPOT_CONFIG = {
  'Planetario':   { azimut: 26,  thetaCrit: 45, sBase: 0.15, offshoreMin: 275, offshoreMax: 315 },
  'Gurugu':       { azimut: 26,  thetaCrit: 45, sBase: 0.15, offshoreMin: 275, offshoreMax: 315 },
  'Gurugú':       { azimut: 26,  thetaCrit: 45, sBase: 0.15, offshoreMin: 275, offshoreMax: 315 },
  'Pirámides':    { azimut: 38,  thetaCrit: 50, sBase: 0.10, offshoreMin: 285, offshoreMax: 330 },
  'Piramides':    { azimut: 38,  thetaCrit: 50, sBase: 0.10, offshoreMin: 285, offshoreMax: 330 },
  'Palaciet':     { azimut: 45,  thetaCrit: 55, sBase: 0.10, offshoreMin: 290, offshoreMax: 340 },
  'El Palaciet':  { azimut: 45,  thetaCrit: 55, sBase: 0.10, offshoreMin: 290, offshoreMax: 340 },
  'Voramar':      { azimut: 54,  thetaCrit: 65, sBase: 0.05, offshoreMin: 300, offshoreMax: 350 },
  'Heliopolis':   { azimut: 35,  thetaCrit: 45, sBase: 0.15, offshoreMin: 280, offshoreMax: 330 },
  'Heliópolis':   { azimut: 35,  thetaCrit: 45, sBase: 0.15, offshoreMin: 280, offshoreMax: 330 },
  'Morro de Gos': { azimut: 60,  thetaCrit: 65, sBase: 0.05, offshoreMin: 300, offshoreMax: 350 },
  'MorroGos':     { azimut: 60,  thetaCrit: 65, sBase: 0.05, offshoreMin: 300, offshoreMax: 350 },
  'La Renegà':    { azimut: 172, thetaCrit: 10, sBase: 0.90, offshoreMin: 260, offshoreMax: 310 },
  'Renega':       { azimut: 172, thetaCrit: 10, sBase: 0.90, offshoreMin: 260, offshoreMax: 310 },
  'Burriana':     { azimut: 26,  thetaCrit: 45, sBase: 0.20, offshoreMin: 275, offshoreMax: 315 },
  'Nules':        { azimut: 26,  thetaCrit: 40, sBase: 0.25, offshoreMin: 275, offshoreMax: 315 },
  'Almenara':     { azimut: 26,  thetaCrit: 35, sBase: 0.30, offshoreMin: 275, offshoreMax: 315 },
  'Peñíscola N':  { azimut: 10,  thetaCrit: 10, sBase: 0.80, offshoreMin: 260, offshoreMax: 300 },
  'Peniscola N':  { azimut: 10,  thetaCrit: 10, sBase: 0.80, offshoreMin: 260, offshoreMax: 300 },
  'Vinaròs':      { azimut: 10,  thetaCrit: 10, sBase: 0.85, offshoreMin: 260, offshoreMax: 300 },
  'Vinaros':      { azimut: 10,  thetaCrit: 10, sBase: 0.85, offshoreMin: 260, offshoreMax: 300 }
};

function getSpotConfig(nombre) {
  const keys = Object.keys(SPOT_CONFIG);
  for (let i = 0; i < keys.length; i++) {
    if (nombre.indexOf(keys[i]) !== -1) return SPOT_CONFIG[keys[i]];
  }
  return { azimut: 26, thetaCrit: 40, sBase: 0.20, offshoreMin: 275, offshoreMax: 315 };
}

/**
 * Cálculo físico de la altura de ola efectiva en un spot
 * Exactamente como se describe en MASTER_CONTEXT.md
 */
function calcularFisica(nombre, h, periodo, dirSwell) {
  h = Number(h) || 0;
  periodo = Number(periodo) || 0;
  dirSwell = Number(dirSwell) || 0;
  if (h <= 0) return 0;

  const cfg = getSpotConfig(nombre);
  const k = 0.15;
  const sf = cfg.sBase + (1 - cfg.sBase) / (1 + Math.exp(-k * (dirSwell - cfg.thetaCrit)));

  let amplificador = 1.0;
  if (dirSwell < 75) {
    let ganancia = Math.pow(periodo / 4.0, 2);
    ganancia = Math.min(Math.max(ganancia, 1.0), 2.5);
    const factorSombra = 1.0 - sf;
    amplificador = 1.0 + ((ganancia - 1.0) * factorSombra);
  }

  const normalCosta = cfg.azimut + 90;
  let exposicion = Math.abs(Math.cos((dirSwell - normalCosta) * Math.PI / 180));
  exposicion = Math.max(exposicion, 0.05);

  return Math.round(h * sf * amplificador * exposicion * 100) / 100;
}

/**
 * Algoritmo de calidad pre-IA (0 a 5 estrellas)
 * Exactamente como se describe en MASTER_CONTEXT.md
 */
function calcularCalidad(h, p, ws, wd, nombre, presion, visib) {
  h = Number(h) || 0;
  p = Number(p) || 0;
  ws = Number(ws) || 0;
  wd = Number(wd) || 0;

  if (h < 0.2) return 0;
  if (h < 0.35) return 1;

  let s = 2;
  if (h >= 0.5) s++;
  if (h >= 0.9) s++;
  if (p >= 6) s += 0.5;
  if (p >= 8) s += 0.5;

  const energia = h * h * p;
  if (energia >= 5) s += 0.5;
  if (energia >= 15) s += 0.5;

  const cfg = nombre ? getSpotConfig(nombre) : null;
  if (cfg) {
    const isOffshore = (cfg.offshoreMin < cfg.offshoreMax)
      ? (wd >= cfg.offshoreMin && wd <= cfg.offshoreMax)
      : (wd >= cfg.offshoreMin || wd <= cfg.offshoreMax);
    if (isOffshore && ws < 15) s += 1;
    if (isOffshore && ws < 8) s += 0.5;
  } else {
    const offGen = (wd >= 260 && wd <= 360) || (wd >= 0 && wd < 45);
    if (offGen && ws < 12) s++;
  }

  if (ws > 20) s -= 1;
  if (ws > 30) s -= 1;

  presion = Number(presion) || 1013;
  if (presion > 0 && presion < 1008) s += 0.5;
  if (presion > 0 && presion < 995) s += 0.5;

  return Math.min(Math.max(Math.round(s), 0), 5);
}

// ==========================================
// 2. HELPERS DE DIRECCIÓN, VIENTO Y FORMATO
// ==========================================

function getWindCondition(wd, ws, spotName) {
  const cfg = getSpotConfig(spotName);
  const isOffshore = (cfg.offshoreMin < cfg.offshoreMax)
    ? (wd >= cfg.offshoreMin && wd <= cfg.offshoreMax)
    : (wd >= cfg.offshoreMin || wd <= cfg.offshoreMax);

  // Normal a la costa aproximada (+-45 grados del este directo)
  const normalCosta = cfg.azimut + 90;
  let diffNormal = Math.abs(wd - normalCosta);
  if (diffNormal > 180) diffNormal = 360 - diffNormal;
  const isOnshore = diffNormal <= 45;

  if (isOffshore) {
    return {
      type: 'offshore',
      label: 'OFFSHORE',
      bgClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      dotClass: 'bg-emerald-400',
      icon: 'air',
      desc: 'Terral limpio'
    };
  } else if (isOnshore) {
    return {
      type: 'onshore',
      label: 'ONSHORE',
      bgClass: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      dotClass: 'bg-rose-500',
      icon: 'waves',
      desc: 'Mar picado / Chopi'
    };
  } else {
    return {
      type: 'cross',
      label: 'CROSS-SHORE',
      bgClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      dotClass: 'bg-amber-400',
      icon: 'swap_horiz',
      desc: 'Viento cruzado'
    };
  }
}

function degreesToCompass(deg) {
  const val = Math.floor((deg / 22.5) + 0.5);
  const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

function getRatingMeta(stars) {
  stars = Math.max(0, Math.min(5, Math.round(stars)));
  switch (stars) {
    case 5:
      return { label: 'ÉPICO', badgeClass: 'bg-violet-500/25 text-violet-300 border-violet-400/40', starColor: 'text-violet-400' };
    case 4:
      return { label: 'MUY BUENO', badgeClass: 'bg-emerald-500/25 text-emerald-300 border-emerald-400/40', starColor: 'text-emerald-400' };
    case 3:
      return { label: 'ACEPTABLE', badgeClass: 'bg-teal-500/25 text-teal-300 border-teal-400/40', starColor: 'text-teal-400' };
    case 2:
      return { label: 'REGULAR', badgeClass: 'bg-sky-500/20 text-sky-300 border-sky-400/30', starColor: 'text-sky-400' };
    case 1:
      return { label: 'POBRE', badgeClass: 'bg-slate-700/50 text-slate-300 border-slate-600', starColor: 'text-slate-400' };
    default:
      return { label: 'PLATO', badgeClass: 'bg-slate-800 text-slate-400 border-slate-700', starColor: 'text-slate-600' };
  }
}

function renderStarsHTML(stars, starColor = 'text-amber-400') {
  stars = Math.max(0, Math.min(5, Math.round(stars)));
  let html = '<div class="flex items-center gap-0.5 ' + starColor + '">';
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      html += '<span class="material-symbols-outlined text-sm material-symbols-fill">star</span>';
    } else {
      html += '<span class="material-symbols-outlined text-sm text-slate-700">star</span>';
    }
  }
  html += '</div>';
  return html;
}

// ==========================================
// 3. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================

const AppState = {
  forecastData: null,
  currentSpotId: 'Gurugu',
  currentDayIndex: 0,
  currentFilter: 'all',
  activeCamTab: 'live',
  hlsInstance: null
};

// ==========================================
// 4. GENERADOR DE DATOS DE RESPALDO (OFFLINE)
// ==========================================

function generateFallbackForecastData() {
  const times = [];
  const wave_height = [];
  const wave_period = [];
  const wave_direction = [];
  const wind_speed_10m = [];
  const wind_direction_10m = [];
  const wind_gusts_10m = [];
  const surface_pressure = [];

  const now = new Date();
  now.setMinutes(0, 0, 0);

  // Generar 96 horas (4 días) de previsión realista mediterránea
  for (let i = 0; i < 96; i++) {
    const t = new Date(now.getTime() + i * 3600000);
    times.push(t.toISOString());

    // Patrón de marejada mediterránea con oleaje del ENE (70°) y terral matutino (290°)
    const hour = t.getHours();
    const isMorning = hour >= 6 && hour <= 11;
    const baseH = 0.8 + 0.4 * Math.sin((i / 24) * Math.PI); // Swell de 0.6m a 1.2m
    wave_height.push(Math.max(0.2, Math.round(baseH * 100) / 100));
    wave_period.push(Math.round((6.5 + 1.2 * Math.sin(i / 15)) * 10) / 10);
    wave_direction.push(72); // ENE dominante en otoño/invierno

    // Viento: terral WNW (290°) matinal, brisa marina SE (130°) tarde
    if (isMorning) {
      wind_direction_10m.push(290);
      wind_speed_10m.push(9.5);
      wind_gusts_10m.push(14.0);
    } else {
      wind_direction_10m.push(125);
      wind_speed_10m.push(16.0);
      wind_gusts_10m.push(22.0);
    }
    surface_pressure.push(1014);
  }

  return {
    times,
    marine: {
      wave_height,
      wave_period,
      wave_direction
    },
    weather: {
      wind_speed_10m,
      wind_direction_10m,
      wind_gusts_10m,
      surface_pressure
    }
  };
}

// ==========================================
// 5. OBTENCIÓN DE DATOS (OPEN-METEO API)
// ==========================================

async function fetchOpenMeteoData() {
  const marineUrl = 'https://marine-api.open-meteo.com/v1/marine?latitude=39.98&longitude=0.05&hourly=wave_height,wave_period,wave_direction&timezone=auto';
  const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=39.98&longitude=-0.05&hourly=wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure&timezone=auto';

  // Timeout de 4 segundos para evitar que la app se quede colgada en conexiones móviles lentas
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(() => controller.abort(), 4000) : null;

  try {
    const fetchOptions = controller ? { signal: controller.signal } : {};
    const [marineRes, weatherRes] = await Promise.all([
      fetch(marineUrl, fetchOptions),
      fetch(weatherUrl, fetchOptions)
    ]);
    if (timeoutId) clearTimeout(timeoutId);

    if (!marineRes.ok || !weatherRes.ok) {
      throw new Error('Respuesta no válida de Open-Meteo');
    }

    const marineData = await marineRes.json();
    const weatherData = await weatherRes.json();

    const result = {
      times: marineData.hourly.time,
      marine: marineData.hourly,
      weather: weatherData.hourly,
      fetchedAt: new Date().toISOString()
    };

    // Guardar en localStorage para caché persistente
    try {
      localStorage.setItem('surfline_cs_cache', JSON.stringify(result));
    } catch (e) {
      console.warn('No se pudo guardar en localStorage', e);
    }

    return result;
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);
    console.warn('Aviso: Conexión lenta o error en Open-Meteo. Usando caché local o fallback inmediato.', error);
    
    // Intentar recuperar de localStorage
    try {
      const cached = localStorage.getItem('surfline_cs_cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        console.log('Cargados datos desde caché local de la última sesión.');
        return parsed;
      }
    } catch (e) {}

    // Fallback sintético instantáneo
    return generateFallbackForecastData();
  }
}

// ==========================================
// 6. RENDERIZADO DEL HERO Y CONDICIONES GLOBALES
// ==========================================

function renderHero(data) {
  if (!data || !data.times || !data.times.length) return;

  // Tomar el índice correspondiente a la hora actual
  const nowIso = new Date().toISOString();
  let currentIndex = 0;
  for (let i = 0; i < data.times.length; i++) {
    if (data.times[i] >= nowIso.slice(0, 13)) {
      currentIndex = i;
      break;
    }
  }

  const h = data.marine.wave_height[currentIndex] || 0;
  const p = data.marine.wave_period[currentIndex] || 0;
  const sDir = data.marine.wave_direction[currentIndex] || 0;
  const ws = data.weather.wind_speed_10m[currentIndex] || 0;
  const wd = data.weather.wind_direction_10m[currentIndex] || 0;
  const gusts = data.weather.wind_gusts_10m[currentIndex] || 0;

  // Actualizar valores en el DOM
  const swellHeightEl = document.getElementById('hero-swell-height');
  const swellPeriodEl = document.getElementById('hero-swell-period');
  const swellDirEl = document.getElementById('hero-swell-dir');
  const swellDegEl = document.getElementById('hero-swell-deg');
  const swellArrowEl = document.getElementById('hero-swell-arrow');
  const windSpeedEl = document.getElementById('hero-wind-speed');
  const windDescEl = document.getElementById('hero-wind-desc');
  const windArrowEl = document.getElementById('hero-wind-arrow');
  const timestampEl = document.getElementById('hero-timestamp');
  const bestSpotEl = document.getElementById('hero-best-spot');

  if (swellHeightEl) swellHeightEl.textContent = `${h.toFixed(1)} m`;
  if (swellPeriodEl) swellPeriodEl.textContent = `${p.toFixed(0)} s`;
  if (swellDirEl) swellDirEl.textContent = degreesToCompass(sDir);
  if (swellDegEl) swellDegEl.textContent = `${Math.round(sDir)}°`;
  if (swellArrowEl) swellArrowEl.style.transform = `rotate(${Math.round(sDir)}deg)`;

  if (windSpeedEl) windSpeedEl.textContent = `${Math.round(ws)} km/h`;
  if (windDescEl) windDescEl.textContent = `Ráfagas ${Math.round(gusts)} km/h · ${degreesToCompass(wd)}`;
  if (windArrowEl) windArrowEl.style.transform = `rotate(${Math.round(wd)}deg)`;

  if (timestampEl) {
    const d = new Date();
    timestampEl.textContent = `Actualizado ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  // Calcular cuál es el spot recomendado ahora mismo
  let bestSpot = SPOTS[0];
  let maxScore = -1;

  SPOTS.forEach(spot => {
    const hSpot = calcularFisica(spot.name, h, p, sDir);
    const score = calcularCalidad(hSpot, p, ws, wd, spot.name, 1013, 10);
    if (score > maxScore || (score === maxScore && hSpot > calcularFisica(bestSpot.name, h, p, sDir))) {
      maxScore = score;
      bestSpot = spot;
    }
  });

  if (bestSpotEl) {
    const meta = getRatingMeta(maxScore);
    const hSpot = calcularFisica(bestSpot.name, h, p, sDir);
    bestSpotEl.innerHTML = `<strong>${bestSpot.label}</strong> (${hSpot.toFixed(1)}m · ${meta.label})`;
  }
}

// ==========================================
// 7. RENDERIZADO DE LAS TARJETAS DE SPOTS
// ==========================================

function renderSpotCards(data, filter = 'all') {
  const container = document.getElementById('spots-grid');
  if (!container || !data || !data.times) return;

  const nowIso = new Date().toISOString();
  let currentIndex = 0;
  for (let i = 0; i < data.times.length; i++) {
    if (data.times[i] >= nowIso.slice(0, 13)) {
      currentIndex = i;
      break;
    }
  }

  const h = data.marine.wave_height[currentIndex] || 0;
  const p = data.marine.wave_period[currentIndex] || 0;
  const sDir = data.marine.wave_direction[currentIndex] || 0;
  const ws = data.weather.wind_speed_10m[currentIndex] || 0;
  const wd = data.weather.wind_direction_10m[currentIndex] || 0;
  const pres = data.weather.surface_pressure[currentIndex] || 1013;

  const filteredSpots = SPOTS.filter(s => {
    if (filter === 'all') return true;
    return s.zone === filter;
  });

  if (filteredSpots.length === 0) {
    container.innerHTML = `<div class="col-span-full py-8 text-center text-slate-400">No hay spots en esta zona.</div>`;
    return;
  }

  let html = '';

  filteredSpots.forEach(spot => {
    const hLocal = calcularFisica(spot.name, h, p, sDir);
    const quality = calcularCalidad(hLocal, p, ws, wd, spot.name, pres, 10);
    const meta = getRatingMeta(quality);
    const windInfo = getWindCondition(wd, ws, spot.name);
    const compassSwell = degreesToCompass(sDir);
    const compassWind = degreesToCompass(wd);

    // Altura mínima y máxima estimada (rango de serie)
    const minH = Math.max(0.1, (hLocal * 0.8)).toFixed(1);
    const maxH = (hLocal * 1.25).toFixed(1);

    const isSelected = spot.id === AppState.currentSpotId;

    html += `
      <div data-spot-id="${spot.id}" class="spot-card relative bg-surf-900 border ${isSelected ? 'border-sky-500 ring-2 ring-sky-500/20' : 'border-surf-800 hover:border-surf-700'} rounded-2xl p-5 shadow-lg transition-all hover:shadow-xl hover:shadow-black/30 cursor-pointer flex flex-col justify-between group">
        
        <!-- Cabecera de la tarjeta: Nombre y Rating -->
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-surf-850 text-slate-400 border border-surf-700">
                  ${spot.zoneName}
                </span>
                ${spot.id === AppState.currentSpotId ? '<span class="text-[10px] font-bold text-sky-400">Activo</span>' : ''}
              </div>
              <h3 class="text-lg font-black text-white group-hover:text-sky-300 transition-colors mt-1">
                ${spot.name}
              </h3>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg border ${meta.badgeClass}">
                ${meta.label}
              </span>
              <div class="mt-1">
                ${renderStarsHTML(quality, meta.starColor)}
              </div>
            </div>
          </div>

          <!-- Altura de la Ola Prominente (Estilo Surfline) -->
          <div class="my-4 p-3.5 rounded-xl bg-surf-950/70 border border-surf-800/80 flex items-baseline justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Altura Rompiente</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="text-2xl sm:text-3xl font-black text-white">${hLocal.toFixed(1)}</span>
                <span class="text-sm font-semibold text-slate-400">m</span>
                <span class="text-xs text-slate-500 ml-1.5">(${minH} - ${maxH} m)</span>
              </div>
            </div>
            
            <!-- Badge de Viento Offshore / Onshore -->
            <div class="flex flex-col items-end">
              <span class="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${windInfo.bgClass}">
                <span class="w-1.5 h-1.5 rounded-full ${windInfo.dotClass}"></span>
                ${windInfo.label}
              </span>
              <span class="text-[10px] text-slate-400 mt-1">${windInfo.desc}</span>
            </div>
          </div>

          <!-- Métricas: Swell y Viento -->
          <div class="grid grid-cols-2 gap-2 text-xs">
            <!-- Swell Info -->
            <div class="p-2.5 rounded-lg bg-surf-850/60 border border-surf-800">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Swell Dominante</span>
              <div class="flex items-center gap-1.5 mt-1 font-bold text-white">
                <span class="material-symbols-outlined text-sm text-sky-400 inline-block transition-transform" style="transform: rotate(${Math.round(sDir)}deg)">navigation</span>
                <span>${compassSwell} (${Math.round(sDir)}°)</span>
              </div>
              <span class="text-[10px] text-slate-400 mt-0.5 block">${p.toFixed(0)}s de período</span>
            </div>

            <!-- Viento Info -->
            <div class="p-2.5 rounded-lg bg-surf-850/60 border border-surf-800">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Viento Local</span>
              <div class="flex items-center gap-1.5 mt-1 font-bold text-white">
                <span class="material-symbols-outlined text-sm text-amber-400 inline-block transition-transform" style="transform: rotate(${Math.round(wd)}deg)">navigation</span>
                <span>${Math.round(ws)} km/h ${compassWind}</span>
              </div>
              <span class="text-[10px] text-slate-400 mt-0.5 block">Terral: ${spot.offshoreMin}°-${spot.offshoreMax}°</span>
            </div>
          </div>

          <p class="text-[11px] text-slate-400 mt-3 line-clamp-2 leading-relaxed">
            ${spot.desc}
          </p>
        </div>

        <!-- Botón de Acción -->
        <div class="mt-4 pt-3 border-t border-surf-800/80 flex items-center justify-between">
          <span class="text-xs font-semibold text-sky-400 group-hover:text-sky-300 flex items-center gap-1">
            Ver tabla horaria
            <span class="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </span>
          <span class="material-symbols-outlined text-slate-600 group-hover:text-sky-400 transition-colors text-base">calendar_view_day</span>
        </div>

      </div>
    `;
  });

  container.innerHTML = html;

  // Asignar eventos de clic a cada tarjeta
  container.querySelectorAll('.spot-card').forEach(card => {
    card.addEventListener('click', () => {
      const spotId = card.getAttribute('data-spot-id');
      if (spotId) {
        selectSpot(spotId);
        // Scroll suave hacia la tabla horaria
        const tableSection = document.getElementById('tabla-horaria');
        if (tableSection) {
          tableSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ==========================================
// 8. RENDERIZADO DE LA TABLA HORARIA
// ==========================================

function renderHourlyTable(data, spotId, dayOffset = 0) {
  const tbody = document.getElementById('hourly-table-body');
  if (!tbody || !data || !data.times) return;

  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];

  // Calcular la fecha objetivo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + dayOffset);
  const targetDateStr = targetDate.toISOString().slice(0, 10);

  // Filtrar los datos para las 24 horas del día seleccionado
  const hourlyRows = [];
  for (let i = 0; i < data.times.length; i++) {
    if (data.times[i].startsWith(targetDateStr)) {
      hourlyRows.push({
        time: data.times[i],
        wave_height: data.marine.wave_height[i],
        wave_period: data.marine.wave_period[i],
        wave_direction: data.marine.wave_direction[i],
        wind_speed: data.weather.wind_speed_10m[i],
        wind_direction: data.weather.wind_direction_10m[i],
        wind_gusts: data.weather.wind_gusts_10m[i],
        pressure: data.weather.surface_pressure[i]
      });
    }
  }

  if (hourlyRows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-500">No hay datos horarios disponibles para este día.</td></tr>`;
    return;
  }

  let html = '';

  // Mostrar filas clave del día (cada 2 o 3 horas entre 06:00 y 21:00 para máxima legibilidad)
  const displayHours = [6, 8, 10, 12, 14, 16, 18, 20, 22];
  const filteredRows = hourlyRows.filter(r => {
    const h = new Date(r.time).getHours();
    return displayHours.includes(h);
  });

  const rowsToRender = filteredRows.length > 0 ? filteredRows : hourlyRows.slice(0, 12);

  rowsToRender.forEach(row => {
    const d = new Date(row.time);
    const hourLabel = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Cálculo de física costera en este punto horario
    const hLocal = calcularFisica(spot.name, row.wave_height, row.wave_period, row.wave_direction);
    const quality = calcularCalidad(hLocal, row.wave_period, row.wind_speed, row.wind_direction, spot.name, row.pressure, 10);
    const meta = getRatingMeta(quality);
    const windInfo = getWindCondition(row.wind_direction, row.wind_speed, spot.name);
    const compassSwell = degreesToCompass(row.wave_direction);
    const compassWind = degreesToCompass(row.wind_direction);

    // Barra visual de tamaño (máximo estimado 2.0m)
    const barWidthPct = Math.min(100, Math.round((hLocal / 2.0) * 100));

    html += `
      <tr class="hover:bg-surf-850/60 transition-colors">
        
        <!-- Hora -->
        <td class="py-3 px-4 font-bold text-white whitespace-nowrap">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-xs text-sky-400">schedule</span>
            <span>${hourLabel}</span>
          </div>
        </td>

        <!-- Calidad Surfline -->
        <td class="py-3 px-4 whitespace-nowrap">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${meta.badgeClass}">
              ${meta.label}
            </span>
            ${renderStarsHTML(quality, meta.starColor)}
          </div>
        </td>

        <!-- Altura Ola Spot -->
        <td class="py-3 px-4 whitespace-nowrap">
          <div class="flex items-center gap-3">
            <span class="text-base font-black text-white w-12">${hLocal.toFixed(1)} m</span>
            <div class="hidden sm:block w-24 bg-surf-800 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-sky-500 to-cyan-400 h-full rounded-full" style="width: ${barWidthPct}%"></div>
            </div>
          </div>
        </td>

        <!-- Período -->
        <td class="py-3 px-4 whitespace-nowrap text-slate-300 font-bold">
          ${Math.round(row.wave_period)} s
        </td>

        <!-- Swell Alta Mar -->
        <td class="py-3 px-4 whitespace-nowrap text-slate-300">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-xs text-sky-400 inline-block" style="transform: rotate(${Math.round(row.wave_direction)}deg)">navigation</span>
            <span>${row.wave_height.toFixed(1)}m ${compassSwell}</span>
          </div>
        </td>

        <!-- Viento -->
        <td class="py-3 px-4 whitespace-nowrap text-slate-300">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-xs text-amber-400 inline-block" style="transform: rotate(${Math.round(row.wind_direction)}deg)">navigation</span>
            <span class="font-bold text-white">${Math.round(row.wind_speed)}</span>
            <span class="text-xs text-slate-400">km/h (${Math.round(row.wind_gusts)})</span>
          </div>
        </td>

        <!-- Condición Viento -->
        <td class="py-3 px-4 whitespace-nowrap">
          <span class="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${windInfo.bgClass}">
            <span class="w-1.5 h-1.5 rounded-full ${windInfo.dotClass}"></span>
            ${windInfo.label}
          </span>
        </td>

      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// ==========================================
// 9. CONTROL DE SPOT SELECCIONADO, MAPA Y GRÁFICAS
// ==========================================

function logTelemetry(msg, type = 'info') {
  const term = document.getElementById('aiTerminal');
  if (!term) return;
  const time = new Date().toLocaleTimeString('es-ES', { hour12: false });
  let color = 'text-sky-400';
  if (type === 'warn') color = 'text-amber-400';
  else if (type === 'math') color = 'text-violet-400';
  else if (type === 'success') color = 'text-emerald-400';

  const entry = document.createElement('div');
  entry.className = 'leading-tight';
  entry.innerHTML = `<span class="text-slate-500 font-bold">[${time}]</span> <span class="${color}">${msg}</span>`;
  term.appendChild(entry);
  term.scrollTop = term.scrollHeight;
}

let leafletMap = null;
let mapMarkers = {};

function initLeafletMap() {
  if (leafletMap) return;
  const mapEl = document.getElementById('map');
  if (!mapEl || !window.L) return;

  const isMobile = window.innerWidth < 768;
  leafletMap = L.map('map', {
    zoomControl: !isMobile,
    scrollWheelZoom: false,
    dragging: !isMobile,
    tap: !isMobile
  }).setView([40.05, 0.15], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    className: 'dark-tiles',
    attribution: '&copy; OpenStreetMap'
  }).addTo(leafletMap);

  SPOTS.forEach(spot => {
    if (spot.lat && spot.lon) {
      const marker = L.circleMarker([spot.lat, spot.lon], {
        radius: spot.id === AppState.currentSpotId ? 9 : 7,
        fillColor: spot.id === AppState.currentSpotId ? '#38bdf8' : '#0284c7',
        color: '#ffffff',
        weight: spot.id === AppState.currentSpotId ? 3 : 1.5,
        fillOpacity: 0.95
      }).addTo(leafletMap);

      marker.on('click', () => {
        selectSpot(spot.id);
        const heroEl = document.getElementById('hero-section');
        if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
        logTelemetry(`[MAP] Spot seleccionado por mapa: ${spot.label}`, 'info');
      });

      mapMarkers[spot.id] = marker;
    }
  });

  if (AppState.forecastData) {
    updateMapMarkers(AppState.forecastData);
  }
}

function updateMapHighlight(selectedSpotId) {
  if (!leafletMap) return;
  SPOTS.forEach(spot => {
    const marker = mapMarkers[spot.id];
    if (!marker) return;
    const isSelected = spot.id === selectedSpotId;
    marker.setStyle({
      radius: isSelected ? 9 : 7,
      fillColor: isSelected ? '#38bdf8' : '#0284c7',
      color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.7)',
      weight: isSelected ? 3 : 1.5
    });
  });
}

function updateMapMarkers(data) {
  if (!leafletMap || !data || !data.times || !data.times.length) return;

  const nowIso = new Date().toISOString();
  let currentIndex = 0;
  for (let i = 0; i < data.times.length; i++) {
    if (data.times[i] >= nowIso.slice(0, 13)) {
      currentIndex = i;
      break;
    }
  }

  const h = data.marine.wave_height[currentIndex] || 0.4;
  const p = data.marine.wave_period[currentIndex] || 4.5;
  const sDir = data.marine.wave_direction[currentIndex] || 80;
  const ws = data.weather.wind_speed_10m[currentIndex] || 10;
  const wd = data.weather.wind_direction_10m[currentIndex] || 0;

  SPOTS.forEach(spot => {
    const marker = mapMarkers[spot.id];
    if (!marker) return;

    const hLocal = calcularFisica(spot.name, h, p, sDir);
    const quality = calcularCalidad(hLocal, p, ws, wd, spot.name, 1013, 10);
    const meta = getRatingMeta(quality);

    marker.unbindTooltip();
    marker.bindTooltip(`
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center justify-between gap-2 text-[11px] font-black text-white">
          <span>${spot.name}</span>
          <span class="text-sky-400 font-mono">${hLocal.toFixed(1)}m</span>
        </div>
        <div class="text-[10px] text-slate-300 flex items-center justify-between gap-2">
          <span class="${meta.color}">${meta.label}</span>
          <span class="text-slate-400">${Math.round(ws)} km/h</span>
        </div>
      </div>
    `, {
      permanent: true,
      direction: 'top',
      className: 'spot-tooltip'
    });
  });
}

let chartHeightInstance = null;
let chartPeriodInstance = null;

function renderCharts(spotId, data) {
  if (!window.Chart || !data || !data.times || !data.times.length) return;

  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  const chartSpotName = document.getElementById('chart-spot-name');
  if (chartSpotName) chartSpotName.textContent = spot.label;

  const ctxH = document.getElementById('chartHeight');
  const ctxP = document.getElementById('chartPeriod');
  if (!ctxH || !ctxP) return;

  const labels = [];
  const heights = [];
  const periods = [];

  const nowIso = new Date().toISOString();
  let startIndex = 0;
  for (let i = 0; i < data.times.length; i++) {
    if (data.times[i] >= nowIso.slice(0, 13)) {
      startIndex = i;
      break;
    }
  }

  const hoursToTake = Math.min(48, data.times.length - startIndex);
  for (let i = 0; i < hoursToTake; i += 2) {
    const idx = startIndex + i;
    const tStr = data.times[idx];
    const hour = tStr ? tStr.slice(11, 16) : `${i}:00`;
    labels.push(hour);

    const h = data.marine.wave_height[idx] || 0.4;
    const p = data.marine.wave_period[idx] || 4.5;
    const sDir = data.marine.wave_direction[idx] || 80;

    const hLocal = Number(calcularFisica(spot.name, h, p, sDir).toFixed(2));
    heights.push(hLocal);
    periods.push(Number(p.toFixed(1)));
  }

  if (chartHeightInstance) chartHeightInstance.destroy();
  if (chartPeriodInstance) chartPeriodInstance.destroy();

  const commonOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0c1322',
        titleColor: '#ffffff',
        bodyColor: '#38bdf8',
        borderColor: 'rgba(56, 189, 248, 0.3)',
        borderWidth: 1,
        padding: 8
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 9 } }
      },
      x: {
        grid: { display: false },
        ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 9 }, maxTicksLimit: 8 }
      }
    }
  };

  chartHeightInstance = new Chart(ctxH.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Altura (m)',
        data: heights,
        backgroundColor: 'rgba(14, 165, 233, 0.75)',
        hoverBackgroundColor: '#38bdf8',
        borderRadius: 4
      }]
    },
    options: commonOptions
  });

  chartPeriodInstance = new Chart(ctxP.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Periodo (s)',
        data: periods,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 0
      }]
    },
    options: commonOptions
  });
}

function initWindyRadarModal() {
  const openBtn = document.getElementById('open-windy-radar-btn');
  const closeBtn = document.getElementById('close-windy-modal-btn');
  const modal = document.getElementById('windy-modal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      logTelemetry('[WINDY] Abierto radar interactivo de oleaje en tiempo real.', 'info');
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }
}

function selectSpot(spotId) {
  AppState.currentSpotId = spotId;

  // Actualizar selector desplegable
  const dropdown = document.getElementById('spot-selector-hourly');
  if (dropdown) dropdown.value = spotId;

  // Actualizar tarjetas, tabla, gráficas y mapa
  if (AppState.forecastData) {
    renderSpotCards(AppState.forecastData, AppState.currentFilter);
    renderHourlyTable(AppState.forecastData, spotId, AppState.currentDayIndex);
    renderCharts(spotId, AppState.forecastData);
    updateMapHighlight(spotId);
  }

  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  const cfg = getSpotConfig(spot.name);
  logTelemetry(`[PHYSICS] Spot activo: ${spot.label} (Azimut ${cfg.azimut}°, θcrit ${cfg.thetaCrit}°, sBase ${cfg.sBase})`, 'math');
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll('.spot-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      AppState.currentFilter = filter;

      // Actualizar estilos activos de los botones
      buttons.forEach(b => {
        b.className = 'spot-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-surf-900 hover:bg-surf-800 text-slate-300 border border-surf-800 transition-colors';
      });
      btn.className = 'spot-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 transition-colors';

      if (AppState.forecastData) {
        renderSpotCards(AppState.forecastData, filter);
      }
    });
  });

  // Selector desplegable en la tabla horaria
  const hourlySpotSelect = document.getElementById('spot-selector-hourly');
  if (hourlySpotSelect) {
    hourlySpotSelect.addEventListener('change', (e) => {
      selectSpot(e.target.value);
    });
  }

  // Botones de días en la tabla horaria
  const dayButtons = document.querySelectorAll('.day-tab-btn');
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const day = parseInt(btn.getAttribute('data-day') || '0', 10);
      AppState.currentDayIndex = day;

      dayButtons.forEach(b => {
        b.className = 'day-tab-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-colors';
      });
      btn.className = 'day-tab-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500 text-slate-950 transition-colors';

      if (AppState.forecastData) {
        renderHourlyTable(AppState.forecastData, AppState.currentSpotId, day);
      }
    });
  });

  // Botón manual de refresco de datos meteorológicos
  const refreshBtn = document.getElementById('refresh-data-btn');
  const refreshIcon = document.getElementById('refresh-icon');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      if (refreshIcon) refreshIcon.classList.add('animate-spin');
      const data = await fetchOpenMeteoData();
      AppState.forecastData = data;
      renderHero(data);
      renderSpotCards(data, AppState.currentFilter);
      renderHourlyTable(data, AppState.currentSpotId, AppState.currentDayIndex);
      renderCharts(AppState.currentSpotId, data);
      updateMapMarkers(data);
      logTelemetry('[REFRESH] Datos meteorológicos actualizados manualmente.', 'info');
      setTimeout(() => {
        if (refreshIcon) refreshIcon.classList.remove('animate-spin');
      }, 600);
    });
  }
}

// ==========================================
// 10. GESTOR DE WEBCAMS EN DIRECTO Y STREAMING
// ==========================================

const LIVE_WEBCAMS = {
  voramar: {
    name: 'Benicàssim - Playa Voramar',
    embedUrl: 'https://webcams.windy.com/webcams/public/embed/player/1545163016/day',
    officialUrl: 'https://voramar.net',
    desc: 'Vistas a la bahía y rompiente de Voramar frente al hotel emblemático.'
  },
  grao_castellon: {
    name: 'Grao de Castellón - Gurugú / Puerto',
    embedUrl: 'https://webcams.windy.com/webcams/public/embed/player/1569429452/day',
    officialUrl: 'https://www.portcastello.com',
    desc: 'Faro y bocana del puerto con vistas al oleaje del Grao y playa del Gurugú.'
  },
  peniscola: {
    name: 'Peñíscola - Castillo y Playa Norte',
    embedUrl: 'https://webcams.windy.com/webcams/public/embed/player/1233066442/day',
    officialUrl: 'https://www.skylinewebcams.com/es/webcam/espana/comunidad-valenciana/castellon/peniscola.html',
    desc: 'Panorámica de la Playa Norte de Peñíscola y la rompiente junto al tómbolo del castillo.'
  },
  burriana: {
    name: 'Burriana - Puerto y Playa Arenal',
    embedUrl: 'https://webcams.windy.com/webcams/public/embed/player/1566896263/day',
    officialUrl: 'https://www.comunitatvalenciana.com',
    desc: 'Rompiente y escollera del puerto de Burriana frente a la playa del Arenal.'
  },
  heliopolis: {
    name: 'Benicàssim - Playa Heliópolis',
    embedUrl: 'https://webcams.windy.com/webcams/public/embed/player/1545162985/day',
    officialUrl: 'https://www.skylinewebcams.com/es/webcam/espana/comunidad-valenciana/castellon/playa-benicassim.html',
    desc: 'Paseo marítimo y rompiente sur de Benicàssim.'
  }
};

const HLS_PRESETS = {
  test_med: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  mux_stream: 'https://cph-p2p-msl.akamaized.net/hls/live/200034/test/master.m3u8'
};

function initWebcams() {
  // 1. Pestañas de Webcams (Directo / HLS / Portales)
  const tabLive = document.getElementById('cam-tab-live');
  const tabHls = document.getElementById('cam-tab-hls');
  const tabPortales = document.getElementById('cam-tab-portales');

  const viewLive = document.getElementById('cam-view-live');
  const viewHls = document.getElementById('cam-view-hls');
  const viewPortales = document.getElementById('cam-view-portales');

  function switchCamTab(tabName) {
    AppState.activeCamTab = tabName;

    // Resetear estilos de botones y vistas
    [tabLive, tabHls, tabPortales].forEach(t => {
      if (t) t.className = 'cam-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-all flex items-center gap-1.5';
    });
    [viewLive, viewHls, viewPortales].forEach(v => {
      if (v) v.classList.add('hidden');
    });

    if (tabName === 'live') {
      if (tabLive) tabLive.className = 'cam-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-500 text-slate-950 transition-all flex items-center gap-1.5';
      if (viewLive) viewLive.classList.remove('hidden');
    } else if (tabName === 'hls') {
      if (tabHls) tabHls.className = 'cam-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-500 text-slate-950 transition-all flex items-center gap-1.5';
      if (viewHls) viewHls.classList.remove('hidden');
      setupHlsPlayer();
    } else if (tabName === 'portales') {
      if (tabPortales) tabPortales.className = 'cam-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-500 text-slate-950 transition-all flex items-center gap-1.5';
      if (viewPortales) viewPortales.classList.remove('hidden');
    }
  }

  if (tabLive) tabLive.addEventListener('click', () => switchCamTab('live'));
  if (tabHls) tabHls.addEventListener('click', () => switchCamTab('hls'));
  if (tabPortales) tabPortales.addEventListener('click', () => switchCamTab('portales'));

  // 2. Control del Reproductor HD en Directo (Windy / Feeds Oficiales)
  const liveSelector = document.getElementById('live-cam-selector');
  const liveIframe = document.getElementById('live-webcam-iframe');
  const liveDesc = document.getElementById('live-cam-desc');
  const liveOfficialLink = document.getElementById('live-cam-official-link');
  const liveStatus = document.getElementById('live-cam-status');
  const liveLoader = document.getElementById('live-cam-loader');

  function updateLiveCam(camKey) {
    const cam = LIVE_WEBCAMS[camKey] || LIVE_WEBCAMS.voramar;
    if (liveLoader) liveLoader.classList.remove('hidden');

    if (liveIframe) {
      liveIframe.src = cam.embedUrl;
      liveIframe.onload = () => {
        if (liveLoader) liveLoader.classList.add('hidden');
      };
      setTimeout(() => {
        if (liveLoader) liveLoader.classList.add('hidden');
      }, 2500);
    }
    if (liveDesc) liveDesc.textContent = cam.desc;
    if (liveOfficialLink) liveOfficialLink.href = cam.officialUrl;
    if (liveStatus) liveStatus.textContent = 'Señal Activa';
  }

  if (liveSelector) {
    liveSelector.addEventListener('change', (e) => {
      updateLiveCam(e.target.value);
    });
  }

  // Carga asíncrona de webcams.json para datos actualizados
  fetch('webcams.json')
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (data && Array.isArray(data.webcams)) {
        data.webcams.forEach(item => {
          if (LIVE_WEBCAMS[item.id]) {
            if (item.embedUrl) LIVE_WEBCAMS[item.id].embedUrl = item.embedUrl;
            if (item.officialUrl) LIVE_WEBCAMS[item.id].officialUrl = item.officialUrl;
            if (item.description) LIVE_WEBCAMS[item.id].desc = item.description;
          }
        });
      }
    })
    .catch(() => {});

  // 3. Lógica Streaming HLS (.m3u8) con Hls.js
  const hlsVideo = document.getElementById('hls-video-player');
  const hlsSelector = document.getElementById('hls-cam-selector');
  const hlsBadge = document.getElementById('hls-status-badge');
  const hlsCustomContainer = document.getElementById('hls-custom-container');
  const hlsCustomUrlInput = document.getElementById('hls-custom-url');
  const hlsLoadCustomBtn = document.getElementById('hls-load-custom-btn');

  function loadHlsStream(streamUrl) {
    if (!hlsVideo) return;

    if (hlsBadge) {
      hlsBadge.className = 'px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold flex items-center gap-1.5';
      hlsBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span> Conectando HLS...';
    }

    if (window.Hls && Hls.isSupported()) {
      if (AppState.hlsInstance) {
        AppState.hlsInstance.destroy();
      }
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      AppState.hlsInstance = hls;

      hls.loadSource(streamUrl);
      hls.attachMedia(hlsVideo);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (hlsBadge) {
          hlsBadge.className = 'px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5';
          hlsBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Stream Activo (HLS.js)';
        }
        hlsVideo.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          if (hlsBadge) {
            hlsBadge.className = 'px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold flex items-center gap-1.5';
            hlsBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-500"></span> Error de stream';
          }
        }
      });
    } else if (hlsVideo.canPlayType('application/vnd.apple.mpegurl')) {
      // Soporte nativo de HLS (Safari en iOS / macOS)
      hlsVideo.src = streamUrl;
      hlsVideo.addEventListener('loadedmetadata', () => {
        if (hlsBadge) {
          hlsBadge.className = 'px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5';
          hlsBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span> En Directo (Nativo)';
        }
        hlsVideo.play().catch(() => {});
      });
    } else {
      if (hlsBadge) {
        hlsBadge.className = 'px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-1.5';
        hlsBadge.textContent = 'HLS no soportado por este navegador';
      }
    }
  }

  function setupHlsPlayer() {
    if (!hlsSelector) return;
    const selected = hlsSelector.value;
    if (selected === 'custom') {
      if (hlsCustomContainer) hlsCustomContainer.classList.remove('hidden');
    } else {
      if (hlsCustomContainer) hlsCustomContainer.classList.add('hidden');
      const url = HLS_PRESETS[selected] || HLS_PRESETS.test_med;
      loadHlsStream(url);
    }
  }

  if (hlsSelector) {
    hlsSelector.addEventListener('change', () => setupHlsPlayer());
  }

  if (hlsLoadCustomBtn && hlsCustomUrlInput) {
    hlsLoadCustomBtn.addEventListener('click', () => {
      const customUrl = hlsCustomUrlInput.value.trim();
      if (customUrl) loadHlsStream(customUrl);
    });
  }
}

// ==========================================
// 11. REGISTRO PWA Y SERVICE WORKER
// ==========================================

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker de Surfline CS registrado con éxito:', reg.scope))
        .catch(err => console.warn('Fallo al registrar Service Worker:', err));
    });
  }

  // Capturar evento de instalación de PWA
  let deferredPrompt;
  const installBtn = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) {
      installBtn.classList.remove('hidden');
      installBtn.classList.add('flex');
    }
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`Respuesta del usuario a la instalación PWA: ${outcome}`);
      deferredPrompt = null;
      installBtn.classList.add('hidden');
      installBtn.classList.remove('flex');
    });
  }

  // Detectar estado de conexión
  const offlineBanner = document.getElementById('offline-banner');
  function updateOnlineStatus() {
    if (navigator.onLine) {
      if (offlineBanner) offlineBanner.classList.add('hidden');
    } else {
      if (offlineBanner) offlineBanner.classList.remove('hidden');
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

// ==========================================
// 12. GESTIÓN DE SESIÓN DE USUARIO Y TOASTS
// ==========================================

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast-notify');
  const toastMsg = document.getElementById('toast-msg');
  const toastIcon = document.getElementById('toast-icon');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  if (toastIcon) {
    toastIcon.textContent = type === 'success' ? 'check_circle' : 'info';
    toastIcon.className = `material-symbols-outlined text-lg ${type === 'success' ? 'text-emerald-400' : 'text-sky-400'}`;
  }

  toast.classList.remove('opacity-0', 'translate-y-20', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-20', 'pointer-events-none');
  }, 3500);
}

function initUserSession() {
  const sessionBtn = document.getElementById('user-session-btn');
  const sessionLabel = document.getElementById('user-session-label');
  const sessionIcon = document.getElementById('user-session-icon');
  const modal = document.getElementById('user-modal');
  const closeModalBtn = document.getElementById('close-user-modal-btn');
  const loginForm = document.getElementById('user-login-form');
  const loggedView = document.getElementById('user-logged-view');
  const loggedName = document.getElementById('user-logged-name');
  const loggedEmail = document.getElementById('user-logged-email');
  const logoutBtn = document.getElementById('logout-btn');

  function getUser() {
    try {
      const u = localStorage.getItem('surfline_cs_user');
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  }

  function updateUserUI() {
    const user = getUser();
    if (user && user.alias) {
      if (sessionLabel) sessionLabel.textContent = user.alias;
      if (sessionIcon) {
        sessionIcon.textContent = 'verified_user';
        sessionIcon.className = 'material-symbols-outlined text-base text-emerald-400';
      }
      if (sessionBtn) {
        sessionBtn.classList.add('border-emerald-500/40', 'bg-emerald-950/20');
        sessionBtn.title = `Conectado como ${user.alias}`;
      }
      if (loginForm) loginForm.classList.add('hidden');
      if (loggedView) loggedView.classList.remove('hidden');
      if (loggedName) loggedName.textContent = user.alias;
      if (loggedEmail) loggedEmail.textContent = user.email || 'Surfista Local de Castellón';
    } else {
      if (sessionLabel) sessionLabel.textContent = 'Entrar';
      if (sessionIcon) {
        sessionIcon.textContent = 'account_circle';
        sessionIcon.className = 'material-symbols-outlined text-base text-sky-400';
      }
      if (sessionBtn) {
        sessionBtn.classList.remove('border-emerald-500/40', 'bg-emerald-950/20');
        sessionBtn.title = 'Sesión de Surfista';
      }
      if (loginForm) loginForm.classList.remove('hidden');
      if (loggedView) loggedView.classList.add('hidden');
    }
  }

  function openModal() {
    if (!modal) return;
    updateUserUI();
    const user = getUser();
    const aliasInput = document.getElementById('login-alias');
    const emailInput = document.getElementById('login-email');
    if (!user && aliasInput && !aliasInput.value) {
      aliasInput.value = 'mr.alcachofino';
      if (emailInput && !emailInput.value) emailInput.value = 'mr.alcachofino@gmail.com';
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  if (sessionBtn) sessionBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alias = document.getElementById('login-alias')?.value.trim() || 'Surfista';
      const email = document.getElementById('login-email')?.value.trim() || '';

      const userData = {
        alias,
        email,
        savedAt: new Date().toISOString()
      };

      try {
        localStorage.setItem('surfline_cs_user', JSON.stringify(userData));
      } catch (err) {
        console.warn('Error guardando usuario local:', err);
      }

      updateUserUI();
      closeModal();
      showToast(`¡Sesión iniciada con éxito! Hola, ${alias}`, 'success');
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      try {
        localStorage.removeItem('surfline_cs_user');
      } catch (e) {}
      updateUserUI();
      closeModal();
      showToast('Has cerrado la sesión.', 'info');
    });
  }

  // Comprobar si hay sesión por defecto guardada o iniciar automáticamente si no existe conflicto
  const existingUser = getUser();
  if (!existingUser) {
    // Inicializar sesión por defecto para el usuario local
    const defaultUser = {
      alias: 'mr.alcachofino',
      email: 'mr.alcachofino@gmail.com',
      savedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem('surfline_cs_user', JSON.stringify(defaultUser));
    } catch (e) {}
  }

  updateUserUI();
}

// ==========================================
// 13. INICIALIZACIÓN DE LA APLICACIÓN (INSTANT-LOAD)
// ==========================================

document.addEventListener('DOMContentLoaded', async () => {
  setupFilterButtons();
  initWebcams();
  initPWA();
  initUserSession();
  initLeafletMap();
  initWindyRadarModal();

  // 1. Carga instantánea desde caché local para evitar cualquier bloqueo en móvil
  try {
    const cachedStr = localStorage.getItem('surfline_cs_cache');
    if (cachedStr) {
      const cachedData = JSON.parse(cachedStr);
      AppState.forecastData = cachedData;
      renderHero(cachedData);
      renderSpotCards(cachedData, AppState.currentFilter);
      renderHourlyTable(cachedData, AppState.currentSpotId, AppState.currentDayIndex);
      renderCharts(AppState.currentSpotId, cachedData);
      updateMapMarkers(cachedData);
      logTelemetry('⚡ Renderizado instantáneo desde memoria local completado.', 'success');
    }
  } catch (e) {
    console.warn('Caché no disponible en primer arranque');
  }

  // 2. Consulta en segundo plano de datos frescos (con timeout de 4s)
  const freshData = await fetchOpenMeteoData();
  AppState.forecastData = freshData;

  // 3. Renderizar con datos actualizados
  renderHero(freshData);
  renderSpotCards(freshData, AppState.currentFilter);
  renderHourlyTable(freshData, AppState.currentSpotId, AppState.currentDayIndex);
  renderCharts(AppState.currentSpotId, freshData);
  updateMapMarkers(freshData);
  logTelemetry('[NET] Previsión meteorológica Copernicus/ECMWF 96h sincronizada.', 'success');
});

