/**
 * SURFLINE CASTELLÓN - Motor de Previsión Costera y Dashboard Náutico PWA
 * Basado en las especificaciones de MASTER_CONTEXT.md y estándares de Surfline
 * Cero emojis · Webcams integradas por spot · Física costera de 13 rompientes
 */

// ==========================================
// 1. CONFIGURACIÓN FÍSICA Y GEOGRÁFICA DE LOS 13 SPOTS
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
    webcamId: 'planetario',
    webcamType: 'direct',
    bottom: 'Arena',
    bestTide: 'Media marea subiendo',
    desc: 'Fondo de arena frente al planetario del Grao. Rompiente clásica con oleaje de Levante y Gregal.'
  },
  {
    id: 'Gurugu',
    name: 'Gurugú',
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
    webcamId: 'gurugu',
    webcamType: 'direct',
    bottom: 'Arena',
    bestTide: 'Todas las mareas',
    desc: 'Playa abierta con picos variables. Muy expuesta y consistente, ideal con vientos terrales flojos.'
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
    webcamId: 'planetario',
    webcamType: 'reference',
    referenceDist: '2 km al norte',
    bottom: 'Arena y bloques sumergidos',
    bestTide: 'Baja a media',
    desc: 'Estructuras piramidales en el límite sur del Grao. Bancos estables protegidos con W y NW.'
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
    webcamId: 'voramar',
    webcamType: 'reference',
    referenceDist: '1.5 km al norte',
    bottom: 'Arena fina',
    bestTide: 'Media marea',
    desc: 'Playa abrigada junto a la antigua vía de Benicàssim con rompiente suave ideal para tablones.'
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
    webcamId: 'voramar',
    webcamType: 'direct',
    bottom: 'Arena y puntal rocoso',
    bestTide: 'Media a alta',
    desc: 'Punta norte de Benicàssim protegida por la bahía. Aguanta temporales grandes y vientos fuertes de Levante.'
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
    webcamId: 'heliopolis',
    webcamType: 'direct',
    bottom: 'Arena',
    bestTide: 'Media marea',
    desc: 'Línea de rompiente en la zona sur de Benicàssim con buenas secciones de derechas.'
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
    webcamId: 'oropesa',
    webcamType: 'direct',
    bottom: 'Arena y resalte rocoso',
    bestTide: 'Media marea subiendo',
    desc: 'Playa abierta de Oropesa. Recibe mar de fondo intenso con vientos del oeste y noroeste.'
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
    webcamId: 'oropesa',
    webcamType: 'reference',
    referenceDist: '3 km al norte',
    bottom: 'Roca y lajas planas',
    bestTide: 'Alta marea',
    desc: 'Calas rocosas vírgenes protegidas del viento del norte. Requiere oleaje potente del Este.'
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
    webcamId: 'burriana',
    webcamType: 'direct',
    bottom: 'Arena junto a escollera',
    bestTide: 'Todas las mareas',
    desc: 'Rompiente clásica junto a la escollera del puerto. Derecha larga y consistente sobre fondo de arena.'
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
    webcamId: 'burriana',
    webcamType: 'reference',
    referenceDist: '5 km al norte',
    bottom: 'Grava y arena entre espigones',
    bestTide: 'Media marea',
    desc: 'Zona de espigones cortos con picos rápidos de derecha e izquierda en temporales invernales.'
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
    webcamId: 'burriana',
    webcamType: 'reference',
    referenceDist: '12 km al norte',
    bottom: 'Guijarros y arena gruesa',
    bestTide: 'Media marea',
    desc: 'Orillera contundente en playa mixta de grava y arena. Picos muy rápidos, huecos y tuberos.'
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
    webcamId: 'peniscola',
    webcamType: 'direct',
    bottom: 'Arena protegida',
    bestTide: 'Media a alta',
    desc: 'Bahía natural protegida por el peñón templario. Funciona con swells fuertes del Este y Gregal.'
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
    webcamId: 'vinaros',
    webcamType: 'direct',
    bottom: 'Arena y escollera urbana',
    bestTide: 'Media marea',
    desc: 'Playa urbana con rompientes definidas cerca del dique del puerto comercial.'
  }
];

// Configuración de azimut y parámetros para la física según MASTER_CONTEXT.md
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
  if (!nombre) return { azimut: 26, thetaCrit: 40, sBase: 0.20, offshoreMin: 275, offshoreMax: 315 };
  const keys = Object.keys(SPOT_CONFIG);
  for (let i = 0; i < keys.length; i++) {
    if (nombre.indexOf(keys[i]) !== -1) return SPOT_CONFIG[keys[i]];
  }
  return { azimut: 26, thetaCrit: 40, sBase: 0.20, offshoreMin: 275, offshoreMax: 315 };
}

// ==========================================
// 2. CATÁLOGO DE WEBCAMS COSTERAS
// ==========================================

const WEBCAMS_CATALOG = [
  {
    id: 'planetario',
    name: 'Grao de Castellón - Planetario / Surfers CS',
    zone: 'Grao de Castellón',
    streamType: 'surfers',
    streamUrl: 'https://www.surferscastellon.com/live-webcam/',
    snapshotUrl: 'https://aeroclubcastellon.com/wp-content/uploads/2016/09/webcam-aeroclub-cs.jpg',
    officialUrl: 'https://www.surferscastellon.com/live-webcam/',
    description: 'Cámara oficial del club Surfers Castellón frente a la rompiente del Planetario.'
  },
  {
    id: 'gurugu',
    name: 'Grao de Castellón - Playa del Gurugú / Aeroclub',
    zone: 'Grao de Castellón',
    streamType: 'snapshot',
    streamUrl: 'https://aeroclubcastellon.com/wp-content/uploads/2016/09/webcam-aeroclub-cs.jpg',
    snapshotUrl: 'https://aeroclubcastellon.com/wp-content/uploads/2016/09/webcam-aeroclub-cs.jpg',
    officialUrl: 'https://camaramar.com/webcam-playa-del-gurugu-castellon/',
    description: 'Panorámica de la rompiente del Gurugú y del Pinar desde el Aeroclub.'
  },
  {
    id: 'voramar',
    name: 'Benicàssim - Playa Voramar',
    zone: 'Benicàssim',
    streamType: 'snapshot',
    streamUrl: 'https://voramar.net/wp-content/uploads/2022/04/Webcam1.jpg',
    snapshotUrl: 'https://voramar.net/wp-content/uploads/2022/04/Webcam1.jpg',
    officialUrl: 'https://voramar.net/webcam-playa-voramar-benicassim/',
    description: 'Cámara de alta resolución del Hotel Voramar sobre la bahía norte de Benicàssim.'
  },
  {
    id: 'burriana',
    name: 'Burriana - Puerto y Playa Arenal',
    zone: 'Costa Sur',
    streamType: 'hls',
    streamUrl: 'https://streaming.comunitatvalenciana.com/webcam/Burriana/playlist.m3u8',
    snapshotUrl: 'https://streaming.comunitatvalenciana.com/static/Burriana/webcam_mini.png',
    officialUrl: 'https://www.comunitatvalenciana.com/es/castello-castellon/borriana-burriana/webcams/burriana-1',
    description: 'Rompiente y escollera del puerto de Burriana frente a la playa del Arenal.'
  },
  {
    id: 'peniscola',
    name: 'Peñíscola - Playa Norte y Castillo',
    zone: 'Costa Norte',
    streamType: 'hls',
    streamUrl: 'https://streaming.comunitatvalenciana.com/webcam/Penyiscola/playlist.m3u8',
    snapshotUrl: 'https://streaming.comunitatvalenciana.com/static/Penyiscola/webcam_mini.png',
    officialUrl: 'https://www.comunitatvalenciana.com/es/castello-castellon/peniscola-peniscola/webcams/peniscola-1',
    description: 'Rompiente de Playa Norte con fondo de arena y vistas al Castillo del Papa Luna.'
  },
  {
    id: 'oropesa',
    name: 'Oropesa del Mar - Morro de Gos',
    zone: 'Costa Norte',
    streamType: 'hls',
    streamUrl: 'https://streaming.comunitatvalenciana.com/webcam/OropesadelMar/playlist.m3u8',
    snapshotUrl: 'https://streaming.comunitatvalenciana.com/static/OropesadelMar/webcam_mini.png',
    officialUrl: 'https://www.comunitatvalenciana.com/es/castello-castellon/orpesa-oropesa-del-mar/webcams/oropesa-del-mar-1',
    description: 'Playa abierta de Morro de Gos expuesta a mar de fondo mediterráneo.'
  },
  {
    id: 'vinaros',
    name: 'Vinaròs - Playa del Fortí',
    zone: 'Costa Norte',
    streamType: 'hls',
    streamUrl: 'https://streaming.comunitatvalenciana.com/webcam/Vinaros/playlist.m3u8',
    snapshotUrl: 'https://streaming.comunitatvalenciana.com/static/Vinaros/webcam_mini.png',
    officialUrl: 'https://www.comunitatvalenciana.com/es/castello-castellon/vinaros/webcams/vinaros-2',
    description: 'Paseo marítimo y rompiente urbana del Fortí en el norte de Castellón.'
  },
  {
    id: 'heliopolis',
    name: 'Benicàssim - Playa Heliópolis',
    zone: 'Benicàssim',
    streamType: 'snapshot',
    streamUrl: 'https://voramar.net/wp-content/uploads/2022/04/Webcam2.jpg',
    snapshotUrl: 'https://voramar.net/wp-content/uploads/2022/04/Webcam2.jpg',
    officialUrl: 'https://www.skylinewebcams.com/es/webcam/espana/comunidad-valenciana/castellon/heliopolis.html',
    description: 'Panorámica de la zona sur de Benicàssim transmitida en directo.'
  }
];

// ==========================================
// 3. FÍSICA COSTERA Y ALGORITMOS DE CALIDAD
// ==========================================

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
// 4. HELPERS ESTILO SURFLINE (ANATÓMICO, ESTRELLAS MATERIAL Y VIENTO)
// ==========================================

function getAnatomicalHeight(h) {
  if (h < 0.2) return 'Plato / Calma';
  if (h < 0.4) return 'Tobillo a Rodilla';
  if (h < 0.7) return 'Rodilla a Cintura';
  if (h < 1.1) return 'Cintura a Pecho';
  if (h < 1.5) return 'Pecho a Cabeza';
  if (h < 2.0) return 'Cabeza a Por Encima';
  return 'Muy Por Encima';
}

function getRatingMeta(score) {
  const s = Math.max(0, Math.min(5, Math.round(score)));
  switch (s) {
    case 5:
      return {
        label: 'Épico',
        badgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
        starColor: 'text-sky-400',
        barColor: '#0ea5e9',
        desc: 'Temporal clásico del Mediterráneo, series ordenadas y tubos'
      };
    case 4:
      return {
        label: 'Muy Bueno',
        badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        starColor: 'text-emerald-400',
        barColor: '#10b981',
        desc: 'Líneas limpias con viento terral y series consistentes'
      };
    case 3:
      return {
        label: 'Regular a Bueno',
        badgeClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
        starColor: 'text-teal-400',
        barColor: '#14b8a6',
        desc: 'Rompiente definida y periodos aprovechables'
      };
    case 2:
      return {
        label: 'Pobre a Regular',
        badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        starColor: 'text-amber-400',
        barColor: '#f59e0b',
        desc: 'Olas pequeñas para tablón o viento cruzado'
      };
    case 1:
      return {
        label: 'Muy Pobre',
        badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        starColor: 'text-rose-400',
        barColor: '#ef4444',
        desc: 'Orillero escaso o mar de viento picado'
      };
    case 0:
    default:
      return {
        label: 'Plato',
        badgeClass: 'bg-slate-700/60 text-slate-300 border-slate-600',
        starColor: 'text-slate-500',
        barColor: '#64748b',
        desc: 'Sin rompiente surfeable'
      };
  }
}

function renderStarsHTML(score, starColor = 'text-sky-400') {
  const rounded = Math.min(5, Math.max(0, Math.round(score)));
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars += `<span class="material-symbols-outlined text-sm ${starColor} material-symbols-fill inline-block">star</span>`;
    } else {
      stars += `<span class="material-symbols-outlined text-sm text-slate-700 inline-block">star</span>`;
    }
  }
  return `<span class="inline-flex items-center gap-0.5" title="${score.toFixed(1)} de 5 estrellas">${stars}</span>`;
}

function degreesToCompass(deg) {
  const val = Math.floor((deg / 22.5) + 0.5);
  const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

function getWindCondition(wd, ws, spotName) {
  const cfg = getSpotConfig(spotName);
  const isOffshore = (cfg.offshoreMin < cfg.offshoreMax)
    ? (wd >= cfg.offshoreMin && wd <= cfg.offshoreMax)
    : (wd >= cfg.offshoreMin || wd <= cfg.offshoreMax);

  const normalCosta = cfg.azimut + 90;
  let diffNormal = Math.abs(wd - normalCosta);
  if (diffNormal > 180) diffNormal = 360 - diffNormal;
  const isOnshore = diffNormal <= 45;

  if (isOffshore) {
    return {
      type: 'offshore',
      label: 'Terral (Offshore)',
      bgClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      dotClass: 'bg-emerald-400',
      icon: 'air',
      desc: 'Terral limpio'
    };
  } else if (isOnshore) {
    return {
      type: 'onshore',
      label: 'Chopi (Onshore)',
      bgClass: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      dotClass: 'bg-rose-400',
      icon: 'waves',
      desc: 'Mar picado'
    };
  } else {
    return {
      type: 'cross',
      label: 'Cruzado (Cross-shore)',
      bgClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      dotClass: 'bg-amber-400',
      icon: 'swap_horiz',
      desc: 'Viento cruzado'
    };
  }
}

// ==========================================
// 5. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================

const AppState = {
  forecastData: null,
  currentSpotId: 'Planetario',
  currentDayIndex: 0,
  currentFilter: 'all',
  hlsInstance: null,
  snapshotRefreshTimer: null
};

// ==========================================
// 6. GENERADOR DE DATOS DE RESPALDO (OFFLINE)
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

  for (let i = 0; i < 96; i++) {
    const t = new Date(now.getTime() + i * 3600000);
    times.push(t.toISOString());

    const hour = t.getHours();
    const isMorning = hour >= 6 && hour <= 11;
    const baseH = 0.8 + 0.4 * Math.sin((i / 24) * Math.PI);
    wave_height.push(Math.max(0.2, Math.round(baseH * 100) / 100));
    wave_period.push(Math.round((6.5 + 1.2 * Math.sin(i / 15)) * 10) / 10);
    wave_direction.push(72);

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
    marine: { wave_height, wave_period, wave_direction },
    weather: { wind_speed_10m, wind_direction_10m, wind_gusts_10m, surface_pressure }
  };
}

async function fetchOpenMeteoData() {
  const marineUrl = 'https://marine-api.open-meteo.com/v1/marine?latitude=39.98&longitude=0.05&hourly=wave_height,wave_period,wave_direction&timezone=auto';
  const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=39.98&longitude=-0.05&hourly=wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure&timezone=auto';

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

    try {
      localStorage.setItem('surfline_cs_cache', JSON.stringify(result));
    } catch (e) {}

    return result;
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);
    try {
      const cached = localStorage.getItem('surfline_cs_cache');
      if (cached) return JSON.parse(cached);
    } catch (e) {}
    return generateFallbackForecastData();
  }
}

// ==========================================
// 7. RENDERIZADO DEL RESUMEN REGIONAL DE BOYA
// ==========================================

function renderRegionalHero(data) {
  if (!data || !data.times || !data.times.length) return;

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
// 8. SPOT SPOTLIGHT: WEBCAM INTEGRADA + REPORTE TÉCNICO EN DIRECTO
// ==========================================

function initSpotlightSelector() {
  const select = document.getElementById('spotlight-spot-select');
  if (!select) return;

  if (select.children.length === 0) {
    let optionsHtml = '';
    SPOTS.forEach(spot => {
      optionsHtml += `<option value="${spot.id}">${spot.label}</option>`;
    });
    select.innerHTML = optionsHtml;

    select.addEventListener('change', (e) => {
      selectSpot(e.target.value);
    });
  }

  select.value = AppState.currentSpotId;
}

function loadSpotWebcam(spotId) {
  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  const cam = WEBCAMS_CATALOG.find(c => c.id === spot.webcamId) || WEBCAMS_CATALOG[0];

  const videoPlayer = document.getElementById('spotlight-video');
  const imgPlayer = document.getElementById('spotlight-img');
  const loader = document.getElementById('spotlight-loader');
  const liveLabel = document.getElementById('spotlight-live-label');
  const camTitleBadge = document.getElementById('spotlight-cam-title-badge');
  const camDescEl = document.getElementById('spotlight-cam-desc');
  const camTypeBadge = document.getElementById('spotlight-cam-type-badge');
  const extBtn = document.getElementById('spotlight-external-cam-btn');
  const surfersOverlay = document.getElementById('spotlight-surfers-overlay');
  const surfersIframe = document.getElementById('spotlight-surfers-iframe');
  const surfersToggleBtn = document.getElementById('spotlight-surfers-toggle-btn');
  const surfersToggleText = document.getElementById('spotlight-surfers-toggle-text');

  if (camTitleBadge) camTitleBadge.textContent = cam.name;
  if (camDescEl) camDescEl.textContent = cam.description;
  if (extBtn) extBtn.href = cam.officialUrl;

  // Actualizar etiqueta de si es directa o de referencia
  if (camTypeBadge) {
    if (spot.webcamType === 'direct') {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Cámara directa del spot`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-emerald-400 flex items-center gap-1';
    } else {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Ref: ${cam.name} (${spot.referenceDist})`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-amber-400 flex items-center gap-1';
    }
  }

  // Limpiar temporizadores y streams previos
  if (AppState.snapshotRefreshTimer) {
    clearInterval(AppState.snapshotRefreshTimer);
    AppState.snapshotRefreshTimer = null;
  }
  if (AppState.hlsInstance) {
    AppState.hlsInstance.destroy();
    AppState.hlsInstance = null;
  }
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.classList.add('hidden');
  }
  if (imgPlayer) {
    imgPlayer.classList.add('hidden');
  }
  if (surfersOverlay) {
    surfersOverlay.classList.add('hidden');
  }
  if (surfersIframe) {
    surfersIframe.classList.add('hidden');
    surfersIframe.src = 'about:blank';
  }
  if (surfersToggleText) {
    surfersToggleText.textContent = 'Incrustar Visor Club';
  }

  // Configuración de controles una sola vez
  const fullscreenBtn = document.getElementById('spotlight-fullscreen-cam-btn');
  if (fullscreenBtn && !fullscreenBtn.dataset.bound) {
    fullscreenBtn.dataset.bound = 'true';
    fullscreenBtn.addEventListener('click', () => {
      const container = document.getElementById('spotlight-player-container');
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  const refreshBtn = document.getElementById('spotlight-refresh-cam-btn');
  if (refreshBtn && !refreshBtn.dataset.bound) {
    refreshBtn.dataset.bound = 'true';
    refreshBtn.addEventListener('click', () => {
      loadSpotWebcam(AppState.currentSpotId);
      showToast('Cámara de rompiente sincronizada', 'info');
    });
  }

  // Caso 1: Streaming HLS en directo (Burriana, Peñíscola, Oropesa, Vinaròs)
  if (cam.streamType === 'hls') {
    if (videoPlayer) {
      videoPlayer.classList.remove('hidden');
      if (loader) loader.classList.remove('hidden');
      if (liveLabel) liveLabel.textContent = 'CONECTANDO...';

      if (window.Hls && Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          manifestLoadingTimeOut: 8000
        });
        AppState.hlsInstance = hls;
        hls.loadSource(cam.streamUrl);
        hls.attachMedia(videoPlayer);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'STREAM HD';
          videoPlayer.play().catch(() => {});
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.warn('[HLS] Error de stream en directo. Conmutando a snapshot costero:', data);
            hls.destroy();
            AppState.hlsInstance = null;
            videoPlayer.classList.add('hidden');
            if (imgPlayer) {
              imgPlayer.classList.remove('hidden');
              imgPlayer.src = `${cam.snapshotUrl}?t=${Date.now()}`;
            }
            if (loader) loader.classList.add('hidden');
            if (liveLabel) liveLabel.textContent = 'FOTO EN DIRECTO';
          }
        });
      } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = cam.streamUrl;
        videoPlayer.addEventListener('loadedmetadata', () => {
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'STREAM HD (iOS)';
          videoPlayer.play().catch(() => {});
        });
        videoPlayer.onerror = () => {
          videoPlayer.classList.add('hidden');
          if (imgPlayer) {
            imgPlayer.classList.remove('hidden');
            imgPlayer.src = `${cam.snapshotUrl}?t=${Date.now()}`;
          }
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'FOTO EN DIRECTO';
        };
      }
    }
  }

  // Caso 2: Cámara oficial Surfers Castellón / Grao (Planetario)
  else if (cam.streamType === 'surfers') {
    if (imgPlayer) {
      imgPlayer.classList.remove('hidden');
      const reloadSnap = () => {
        imgPlayer.src = `${cam.snapshotUrl}?t=${Date.now()}`;
      };
      reloadSnap();
      AppState.snapshotRefreshTimer = setInterval(reloadSnap, 12000);
    }
    if (surfersOverlay) {
      surfersOverlay.classList.remove('hidden');
      if (surfersToggleBtn && !surfersToggleBtn.dataset.bound) {
        surfersToggleBtn.dataset.bound = 'true';
        surfersToggleBtn.addEventListener('click', () => {
          if (!surfersIframe) return;
          const isHidden = surfersIframe.classList.contains('hidden');
          if (isHidden) {
            surfersIframe.src = 'https://www.surferscastellon.com/live-webcam/';
            surfersIframe.classList.remove('hidden');
            if (surfersToggleText) surfersToggleText.textContent = 'Cerrar Visor Club';
          } else {
            surfersIframe.classList.add('hidden');
            surfersIframe.src = 'about:blank';
            if (surfersToggleText) surfersToggleText.textContent = 'Incrustar Visor Club';
          }
        });
      }
    }
    if (liveLabel) liveLabel.textContent = 'CLUB SURFERS CS';
    if (loader) loader.classList.add('hidden');
  }

  // Caso 3: Snapshots periódicos de alta resolución (Gurugú, Voramar, Heliópolis)
  else {
    if (imgPlayer) {
      imgPlayer.classList.remove('hidden');
      if (loader) loader.classList.remove('hidden');
      const reloadSnap = () => {
        imgPlayer.src = `${cam.snapshotUrl}?t=${Date.now()}`;
      };
      imgPlayer.onload = () => {
        if (loader) loader.classList.add('hidden');
      };
      imgPlayer.onerror = () => {
        if (loader) loader.classList.add('hidden');
      };
      reloadSnap();
      AppState.snapshotRefreshTimer = setInterval(reloadSnap, 10000);
    }
    if (liveLabel) liveLabel.textContent = 'EN DIRECTO (FOTO)';
  }
}

function renderSpotSpotlight(spotId) {
  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  initSpotlightSelector();

  const nameEl = document.getElementById('spotlight-spot-name');
  const zoneEl = document.getElementById('spotlight-spot-zone');
  const orientEl = document.getElementById('spotlight-spot-orient');
  const bottomEl = document.getElementById('spotlight-spot-bottom');
  const tideEl = document.getElementById('spotlight-spot-best-tide');
  const descEl = document.getElementById('spotlight-spot-desc');

  if (nameEl) nameEl.textContent = spot.label;
  if (zoneEl) zoneEl.textContent = spot.zoneName;
  if (orientEl) orientEl.textContent = `${spot.azimut}° (${degreesToCompass(spot.azimut)})`;
  if (bottomEl) bottomEl.textContent = spot.bottom;
  if (tideEl) tideEl.textContent = spot.bestTide;
  if (descEl) descEl.textContent = spot.desc;

  // Cargar cámara del spot activo
  loadSpotWebcam(spot.id);

  // Calcular métricas actuales si hay datos
  const data = AppState.forecastData;
  if (!data || !data.times || !data.times.length) return;

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

  const hLocal = calcularFisica(spot.name, h, p, sDir);
  const quality = calcularCalidad(hLocal, p, ws, wd, spot.name, 1013, 10);
  const meta = getRatingMeta(quality);
  const windInfo = getWindCondition(wd, ws, spot.name);
  const anatomical = getAnatomicalHeight(hLocal);

  const minH = Math.max(0.1, hLocal * 0.8).toFixed(1);
  const maxH = (hLocal * 1.25).toFixed(1);
  const wsKnots = Math.round(ws / 1.852);

  // Actualizar DOM del Spotlight
  const hValEl = document.getElementById('spotlight-height-val');
  const hRangeEl = document.getElementById('spotlight-height-range');
  const hBodyEl = document.getElementById('spotlight-height-body');
  const ratingPillEl = document.getElementById('spotlight-spot-rating-pill');
  const starsEl = document.getElementById('spotlight-spot-stars');

  const windSpeedEl = document.getElementById('spotlight-wind-speed');
  const windDirEl = document.getElementById('spotlight-wind-dir');
  const windArrowEl = document.getElementById('spotlight-wind-arrow');
  const windBadgeEl = document.getElementById('spotlight-wind-badge');
  const windRangeEl = document.getElementById('spotlight-wind-range');

  const swellHEl = document.getElementById('spotlight-swell-h');
  const swellPEl = document.getElementById('spotlight-swell-p');
  const swellDirEl = document.getElementById('spotlight-swell-dir');
  const swellArrowEl = document.getElementById('spotlight-swell-arrow');

  if (hValEl) hValEl.textContent = hLocal.toFixed(1);
  if (hRangeEl) hRangeEl.textContent = `(${minH} - ${maxH} m)`;
  if (hBodyEl) hBodyEl.textContent = anatomical;

  if (ratingPillEl) {
    ratingPillEl.textContent = meta.label;
    ratingPillEl.className = `text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border ${meta.badgeClass}`;
  }
  if (starsEl) {
    starsEl.innerHTML = renderStarsHTML(quality, meta.starColor);
  }

  if (windSpeedEl) windSpeedEl.textContent = `${Math.round(ws)} km/h (${wsKnots} kt)`;
  if (windDirEl) windDirEl.textContent = `${Math.round(wd)}° ${degreesToCompass(wd)}`;
  if (windArrowEl) windArrowEl.style.transform = `rotate(${Math.round(wd)}deg)`;
  if (windBadgeEl) {
    windBadgeEl.textContent = windInfo.label;
    windBadgeEl.className = `inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${windInfo.bgClass}`;
  }
  if (windRangeEl) windRangeEl.textContent = `Terral óptimo: ${spot.offshoreMin}°-${spot.offshoreMax}°`;

  if (swellHEl) swellHEl.textContent = `${h.toFixed(1)} m mar abierto`;
  if (swellPEl) swellPEl.textContent = `${p.toFixed(0)} s periodo`;
  if (swellDirEl) swellDirEl.textContent = `${Math.round(sDir)}° ${degreesToCompass(sDir)}`;
  if (swellArrowEl) swellArrowEl.style.transform = `rotate(${Math.round(sDir)}deg)`;
}

// ==========================================
// 9. COMPARATIVA REGIONAL: CADA TARJETA TIENE SU WEBCAM
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
    const cam = WEBCAMS_CATALOG.find(c => c.id === spot.webcamId) || WEBCAMS_CATALOG[0];
    const isDirect = spot.webcamType === 'direct';

    const hLocal = calcularFisica(spot.name, h, p, sDir);
    const quality = calcularCalidad(hLocal, p, ws, wd, spot.name, pres, 10);
    const meta = getRatingMeta(quality);
    const windInfo = getWindCondition(wd, ws, spot.name);
    const anatomical = getAnatomicalHeight(hLocal);
    const compassSwell = degreesToCompass(sDir);
    const compassWind = degreesToCompass(wd);

    const minH = Math.max(0.1, (hLocal * 0.8)).toFixed(1);
    const maxH = (hLocal * 1.25).toFixed(1);
    const isSelected = spot.id === AppState.currentSpotId;

    html += `
      <div data-spot-id="${spot.id}" class="spot-card relative bg-surf-900 border ${isSelected ? 'border-sky-500 ring-2 ring-sky-500/20' : 'border-surf-800 hover:border-surf-700'} rounded-2xl p-4 sm:p-5 shadow-lg transition-all hover:shadow-xl hover:shadow-black/30 cursor-pointer flex flex-col justify-between group">
        
        <div>
          <!-- Cabecera de la tarjeta: Nombre y Zona -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-surf-850 text-slate-400 border border-surf-700">
                  ${spot.zoneName}
                </span>
                ${isSelected ? '<span class="text-[10px] font-black text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/30">ACTIVO</span>' : ''}
              </div>
              <h3 class="text-base sm:text-lg font-black text-white group-hover:text-sky-300 transition-colors mt-1">
                ${spot.name}
              </h3>
            </div>

            <!-- Calidad Surfline Pill y Estrellas Material -->
            <div class="flex flex-col items-end">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg border ${meta.badgeClass}">
                ${meta.label}
              </span>
              <div class="mt-1">
                ${renderStarsHTML(quality, meta.starColor)}
              </div>
            </div>
          </div>

          <!-- REPRODUCTOR / MINIATURA DE LA WEBCAM INTEGRADA EN EL SPOT -->
          <div class="relative aspect-video rounded-xl overflow-hidden mb-3 border border-surf-800 bg-surf-950">
            <img src="${cam.snapshotUrl}" alt="${spot.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-surf-950/80 via-transparent to-transparent opacity-80"></div>

            <div class="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surf-950/90 backdrop-blur-md border border-surf-800 text-[10px] font-bold text-white shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full ${isDirect ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}"></span>
              <span>${isDirect ? 'DIRECTO' : 'CAM REF.'}</span>
            </div>

            <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surf-950/90 backdrop-blur-md border border-surf-800 text-[10px] font-bold text-sky-400 flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">play_circle</span>
              <span>Ver rompiente</span>
            </div>
          </div>

          <!-- Altura Rompiente y Escala Corporal -->
          <div class="my-3 p-3 rounded-xl bg-surf-950/70 border border-surf-800/80 flex items-baseline justify-between">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Altura Rompiente</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="text-2xl font-black text-white">${hLocal.toFixed(1)}</span>
                <span class="text-xs font-semibold text-slate-400">m</span>
                <span class="text-[11px] text-slate-500 ml-1">(${minH} - ${maxH} m)</span>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-[10px] font-bold text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                ${anatomical}
              </span>
              <span class="text-[10px] text-slate-400 mt-1">${windInfo.label}</span>
            </div>
          </div>

          <!-- Métricas de Swell y Viento -->
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2 rounded-lg bg-surf-850/60 border border-surf-800">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Swell</span>
              <div class="flex items-center gap-1 mt-1 font-bold text-white">
                <span class="material-symbols-outlined text-xs text-sky-400 inline-block" style="transform: rotate(${Math.round(sDir)}deg)">navigation</span>
                <span>${compassSwell} (${Math.round(sDir)}°)</span>
              </div>
              <span class="text-[10px] text-slate-400 mt-0.5 block">${p.toFixed(0)}s periodo</span>
            </div>

            <div class="p-2 rounded-lg bg-surf-850/60 border border-surf-800">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Viento</span>
              <div class="flex items-center gap-1 mt-1 font-bold text-white">
                <span class="material-symbols-outlined text-xs text-amber-400 inline-block" style="transform: rotate(${Math.round(wd)}deg)">navigation</span>
                <span>${Math.round(ws)} km/h ${compassWind}</span>
              </div>
              <span class="text-[10px] text-slate-400 mt-0.5 block">Terral: ${spot.offshoreMin}°-${spot.offshoreMax}°</span>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-surf-800/80 flex items-center justify-between gap-2">
          <span class="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
            <span class="material-symbols-outlined text-xs text-emerald-400">check_circle</span>
            <span>${isDirect ? 'Cámara activa' : 'Ref. ' + cam.name.split('-')[0].trim()}</span>
          </span>

          <span class="text-xs font-bold text-sky-400 group-hover:text-sky-300 flex items-center gap-1">
            Ver detalle
            <span class="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </span>
        </div>

      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.spot-card').forEach(card => {
    card.addEventListener('click', () => {
      const spotId = card.getAttribute('data-spot-id');
      if (spotId) {
        selectSpot(spotId);
        const spotlightEl = document.getElementById('spot-spotlight');
        if (spotlightEl) {
          spotlightEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ==========================================
// 10. TABLA HORARIA DE CONDICIONES
// ==========================================

function initHourlySelector() {
  const select = document.getElementById('spot-selector-hourly');
  if (!select) return;

  if (select.children.length === 0) {
    let optionsHtml = '';
    SPOTS.forEach(spot => {
      optionsHtml += `<option value="${spot.id}">${spot.label}</option>`;
    });
    select.innerHTML = optionsHtml;

    select.addEventListener('change', (e) => {
      selectSpot(e.target.value);
    });
  }

  select.value = AppState.currentSpotId;
}

function renderHourlyTable(data, spotId, dayOffset = 0) {
  const tbody = document.getElementById('hourly-table-body');
  if (!tbody || !data || !data.times) return;

  initHourlySelector();
  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + dayOffset);
  const targetDateStr = targetDate.toISOString().slice(0, 10);

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
    tbody.innerHTML = `<tr><td colspan="8" class="py-8 text-center text-slate-500">No hay datos horarios disponibles para este día.</td></tr>`;
    return;
  }

  let html = '';
  const displayHours = [6, 8, 10, 12, 14, 16, 18, 20, 22];
  const filteredRows = hourlyRows.filter(r => {
    const h = new Date(r.time).getHours();
    return displayHours.includes(h);
  });

  const rowsToRender = filteredRows.length > 0 ? filteredRows : hourlyRows.slice(0, 12);

  rowsToRender.forEach(row => {
    const d = new Date(row.time);
    const hourLabel = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const hLocal = calcularFisica(spot.name, row.wave_height, row.wave_period, row.wave_direction);
    const quality = calcularCalidad(hLocal, row.wave_period, row.wind_speed, row.wind_direction, spot.name, row.pressure, 10);
    const meta = getRatingMeta(quality);
    const windInfo = getWindCondition(row.wind_direction, row.wind_speed, spot.name);
    const anatomical = getAnatomicalHeight(hLocal);
    const compassSwell = degreesToCompass(row.wave_direction);

    const barWidthPct = Math.min(100, Math.round((hLocal / 2.0) * 100));

    html += `
      <tr class="hover:bg-surf-850/60 transition-colors">
        <td class="py-3 px-4 font-bold text-white whitespace-nowrap">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-xs text-sky-400">schedule</span>
            <span>${hourLabel}</span>
          </div>
        </td>

        <td class="py-3 px-4 whitespace-nowrap">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${meta.badgeClass}">
              ${meta.label}
            </span>
            ${renderStarsHTML(quality, meta.starColor)}
          </div>
        </td>

        <td class="py-3 px-4 whitespace-nowrap">
          <div class="flex items-center gap-3">
            <span class="text-base font-black text-white w-12">${hLocal.toFixed(1)} m</span>
            <div class="hidden sm:block w-20 bg-surf-800 rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-sky-500 to-cyan-400 h-full rounded-full" style="width: ${barWidthPct}%"></div>
            </div>
          </div>
        </td>

        <td class="py-3 px-4 whitespace-nowrap text-slate-300 font-bold">
          ${anatomical}
        </td>

        <td class="py-3 px-4 whitespace-nowrap text-slate-300 font-bold">
          ${Math.round(row.wave_period)} s
        </td>

        <td class="py-3 px-4 whitespace-nowrap text-slate-300">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-xs text-sky-400 inline-block" style="transform: rotate(${Math.round(row.wave_direction)}deg)">navigation</span>
            <span>${row.wave_height.toFixed(1)}m ${compassSwell}</span>
          </div>
        </td>

        <td class="py-3 px-4 whitespace-nowrap text-slate-300">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-xs text-amber-400 inline-block" style="transform: rotate(${Math.round(row.wind_direction)}deg)">navigation</span>
            <span class="font-bold text-white">${Math.round(row.wind_speed)}</span>
            <span class="text-xs text-slate-400">km/h (${Math.round(row.wind_gusts)})</span>
          </div>
        </td>

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
// 11. MAPA LEAFLET OSCURO Y GRÁFICAS CHART.JS
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
        const heroEl = document.getElementById('spot-spotlight');
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
          <span>${meta.label}</span>
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

// ==========================================
// 12. GESTOR DE SELECCIÓN Y FILTROS
// ==========================================

function selectSpot(spotId) {
  AppState.currentSpotId = spotId;

  // Sincronizar selectores desplegables
  const spotlightSelect = document.getElementById('spotlight-spot-select');
  if (spotlightSelect) spotlightSelect.value = spotId;

  const hourlySelect = document.getElementById('spot-selector-hourly');
  if (hourlySelect) hourlySelect.value = spotId;

  // Actualizar Spot Spotlight con su webcam
  renderSpotSpotlight(spotId);

  // Actualizar otros componentes si hay datos
  if (AppState.forecastData) {
    renderSpotCards(AppState.forecastData, AppState.currentFilter);
    renderHourlyTable(AppState.forecastData, spotId, AppState.currentDayIndex);
    renderCharts(spotId, AppState.forecastData);
    updateMapHighlight(spotId);
  }

  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  const cfg = getSpotConfig(spot.name);
  logTelemetry(`[SPOT] Seleccionado: ${spot.label} · Azimut ${cfg.azimut}° · Cam: ${spot.webcamId}`, 'info');
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll('.spot-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      AppState.currentFilter = filter;

      buttons.forEach(b => {
        b.className = 'spot-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-surf-900 hover:bg-surf-800 text-slate-300 border border-surf-800 transition-colors';
      });
      btn.className = 'spot-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 transition-colors';

      if (AppState.forecastData) {
        renderSpotCards(AppState.forecastData, filter);
      }
    });
  });

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

  const refreshBtn = document.getElementById('refresh-data-btn');
  const refreshIcon = document.getElementById('refresh-icon');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      if (refreshIcon) refreshIcon.classList.add('animate-spin');
      const data = await fetchOpenMeteoData();
      AppState.forecastData = data;
      renderRegionalHero(data);
      renderSpotSpotlight(AppState.currentSpotId);
      renderSpotCards(data, AppState.currentFilter);
      renderHourlyTable(data, AppState.currentSpotId, AppState.currentDayIndex);
      renderCharts(AppState.currentSpotId, data);
      updateMapMarkers(data);
      logTelemetry('[REFRESH] Datos meteorológicos actualizados manualmente.', 'info');
      showToast('Previsión marina actualizada', 'success');
      if (refreshIcon) refreshIcon.classList.remove('animate-spin');
    });
  }
}

// ==========================================
// 13. REGISTRO PWA Y SERVICE WORKER
// ==========================================

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('[SW] Service Worker registrado:', reg.scope))
        .catch(err => console.warn('[SW] Error en registro:', err));
    });
  }

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
      console.log(`[PWA] Respuesta del usuario: ${outcome}`);
      deferredPrompt = null;
      installBtn.classList.add('hidden');
      installBtn.classList.remove('flex');
    });
  }

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
// 14. SESIÓN DE USUARIO Y TOASTS
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
      aliasInput.value = 'jordi_surf';
      if (emailInput && !emailInput.value) emailInput.value = 'jordi@ejemplo.com';
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

      const userData = { alias, email, savedAt: new Date().toISOString() };
      try {
        localStorage.setItem('surfline_cs_user', JSON.stringify(userData));
      } catch (err) {}

      updateUserUI();
      closeModal();
      showToast(`Sesión iniciada como ${alias}`, 'success');
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

  updateUserUI();
}

// ==========================================
// 15. INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', async () => {
  setupFilterButtons();
  initPWA();
  initUserSession();
  initLeafletMap();
  initWindyRadarModal();

  // 1. Carga instantánea desde caché local para evitar cualquier retraso
  try {
    const cachedStr = localStorage.getItem('surfline_cs_cache');
    if (cachedStr) {
      const cachedData = JSON.parse(cachedStr);
      AppState.forecastData = cachedData;
      renderRegionalHero(cachedData);
      renderSpotSpotlight(AppState.currentSpotId);
      renderSpotCards(cachedData, AppState.currentFilter);
      renderHourlyTable(cachedData, AppState.currentSpotId, AppState.currentDayIndex);
      renderCharts(AppState.currentSpotId, cachedData);
      updateMapMarkers(cachedData);
      logTelemetry('[CACHE] Renderizado instantáneo desde memoria local completado.', 'success');
    } else {
      renderSpotSpotlight(AppState.currentSpotId);
    }
  } catch (e) {
    renderSpotSpotlight(AppState.currentSpotId);
  }

  // 2. Sincronización en segundo plano con Open-Meteo
  const freshData = await fetchOpenMeteoData();
  AppState.forecastData = freshData;

  // 3. Renderizar vista actualizada
  renderRegionalHero(freshData);
  renderSpotSpotlight(AppState.currentSpotId);
  renderSpotCards(freshData, AppState.currentFilter);
  renderHourlyTable(freshData, AppState.currentSpotId, AppState.currentDayIndex);
  renderCharts(AppState.currentSpotId, freshData);
  updateMapMarkers(freshData);
  logTelemetry('[NET] Previsión meteorológica Copernicus/ECMWF 96h sincronizada.', 'success');
});
