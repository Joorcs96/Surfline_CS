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
    lat: 39.98585,
    lon: 0.02766,
    orientacion: 97,
    thetaCrit: 45,
    sBase: 0.15,
    offshoreMin: 275,
    offshoreMax: 315,
    webcamId: 'planetario',
    webcamType: 'direct',
    ventanaMar: [62, 132],
    ventanaViento: [232, 322],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Planetario de Castellón',
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
    lat: 39.99872,
    lon: 0.03137,
    orientacion: 105,
    thetaCrit: 45,
    sBase: 0.15,
    offshoreMin: 275,
    offshoreMax: 315,
    webcamId: 'gurugu',
    webcamType: 'direct',
    ventanaMar: [70, 140],
    ventanaViento: [240, 330],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa del Gurugú',
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
    lat: 39.95947,
    lon: 0.01499,
    webcamId: null,
    orientacion: 24,
    thetaCrit: 50,
    sBase: 0.10,
    offshoreMin: 285,
    offshoreMax: 330,
    ventanaMar: [349, 59],
    ventanaViento: [159, 249],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa del Serradal',
    bottom: 'Arena y bloques sumergidos',
    bestTide: 'Baja a media',
    desc: 'Estructuras piramidales en el límite sur del Grao. Bancos estables protegidos con W y NW.'
  },
  {
    id: 'Palaciet',
    name: 'El Palaciet',
    zone: 'sur',
    zoneName: 'Burriana',
    label: 'Burriana - El Palaciet',
    lat: 39.90453,
    lon: -0.01584,
    webcamId: null,
    orientacion: 166,
    thetaCrit: 55,
    sBase: 0.10,
    offshoreMin: 290,
    offshoreMax: 340,
    ventanaMar: [131, 201],
    ventanaViento: [301, 31],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'El Coso / Cami del Palaciet',
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
    lat: 40.05464,
    lon: 0.08248,
    orientacion: 165,
    thetaCrit: 65,
    sBase: 0.05,
    offshoreMin: 300,
    offshoreMax: 350,
    webcamId: 'voramar',
    webcamType: 'direct',
    ventanaMar: [130, 200],
    ventanaViento: [300, 30],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa Voramar',
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
    lat: 40.02567,
    lon: 0.04526,
    orientacion: 109,
    thetaCrit: 45,
    sBase: 0.15,
    offshoreMin: 280,
    offshoreMax: 330,
    webcamId: 'heliopolis',
    webcamType: 'direct',
    ventanaMar: [74, 144],
    ventanaViento: [244, 334],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa Heliópolis',
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
    lat: 40.09491,
    lon: 0.14854,
    orientacion: 102,
    thetaCrit: 65,
    sBase: 0.05,
    offshoreMin: 300,
    offshoreMax: 350,
    webcamId: 'oropesa',
    webcamType: 'direct',
    ventanaMar: [67, 137],
    ventanaViento: [237, 327],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa Morro de Gos',
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
    lat: 40.06195,
    lon: 0.1206,
    webcamId: null,
    orientacion: 97,
    thetaCrit: 10,
    sBase: 0.90,
    offshoreMin: 260,
    offshoreMax: 310,
    ventanaMar: [62, 132],
    ventanaViento: [232, 322],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'La Renegà',
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
    lat: 39.86977,
    lon: -0.05905,
    orientacion: 99,
    thetaCrit: 45,
    sBase: 0.20,
    offshoreMin: 275,
    offshoreMax: 315,
    webcamId: 'burriana',
    webcamType: 'direct',
    ventanaMar: [64, 134],
    ventanaViento: [234, 324],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Escollera Puerto',
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
    lat: 39.82462,
    lon: -0.11001,
    webcamId: null,
    orientacion: 116,
    thetaCrit: 40,
    sBase: 0.25,
    offshoreMin: 275,
    offshoreMax: 315,
    ventanaMar: [81, 151],
    ventanaViento: [251, 341],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Espigones de Nules',
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
    lat: 39.7332,
    lon: -0.18107,
    webcamId: null,
    orientacion: 118,
    thetaCrit: 35,
    sBase: 0.30,
    offshoreMin: 275,
    offshoreMax: 315,
    ventanaMar: [83, 153],
    ventanaViento: [253, 343],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa Casablanca',
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
    lat: 40.3806,
    lon: 0.41021,
    orientacion: 114,
    thetaCrit: 10,
    sBase: 0.80,
    offshoreMin: 260,
    offshoreMax: 300,
    webcamId: 'peniscola',
    webcamType: 'direct',
    ventanaMar: [79, 149],
    ventanaViento: [249, 339],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'Playa Norte Peñíscola',
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
    lat: 40.46877,
    lon: 0.47904,
    orientacion: 106,
    thetaCrit: 10,
    sBase: 0.85,
    offshoreMin: 260,
    offshoreMax: 300,
    webcamId: 'vinaros',
    webcamType: 'direct',
    ventanaMar: [71, 141],
    ventanaViento: [241, 331],
    nivel: 'Intermedio',
    peligros: 'Ninguno reseñable',
    epoca: 'Otoño - Primavera',
    refLocation: 'El Fortí',
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
    // La web de Surfers Castellón redirige (301) a una página web, no emite HLS/MJPEG embebible.
    // La foto aeroclubcastellon.com/...webcam-aeroclub-cs.jpg es una imagen estática de 2016: descartada.
    streamType: 'link_only',
    streamUrl: null,
    snapshotUrl: null,
    officialUrl: 'https://www.surferscastellon.com/live-webcam/',
    description: 'Cámara del club Surfers Castellón frente a la rompiente del Planetario. Accede al enlace oficial para verla.'
  },
  {
    id: 'gurugu',
    name: 'Grao de Castellón - Playa del Gurugú / Pinar',
    zone: 'Grao de Castellón',
    // aeroclubcastellon.com/wp-content/.../webcam-aeroclub-cs.jpg es una foto estática de 2016: descartada.
    streamType: 'link_only',
    streamUrl: null,
    snapshotUrl: null,
    officialUrl: 'https://camaramar.com/webcam-playa-del-gurugu-castellon/',
    description: 'Panorámica de la rompiente del Gurugú. Sin stream en directo embebible verificado; accede al enlace oficial.'
  },
  {
    id: 'voramar',
    name: 'Benicàssim - Playa Voramar',
    zone: 'Benicàssim',
    // MJPEG en puerto 445 con CORS OK, pero el puerto puede estar bloqueado en redes móviles.
    // Tras 8 s de timeout, se muestra el snapshot estático + botón oficial.
    streamType: 'mjpeg',
    streamUrl: 'https://cam1.voramar.net:445/axis-cgi/mjpg/video.cgi',
    snapshotUrl: 'https://voramar.net/wp-content/uploads/2022/04/Webcam1.jpg',
    officialUrl: 'https://voramar.net/webcam-playa-voramar-benicassim/',
    description: 'Cámara MJPEG del Hotel Voramar (puerto 445). Puede estar bloqueado en redes móviles; si no carga, accede al enlace oficial.'
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
    // skylinewebcams.com devuelve X-Frame-Options: SAMEORIGIN → no se puede incrustar.
    streamType: 'link_only',
    streamUrl: null,
    snapshotUrl: null,
    officialUrl: 'https://www.skylinewebcams.com/es/webcam/espana/comunidad-valenciana/castellon/heliopolis.html',
    description: 'Panorámica sur de Benicàssim en SkylineWebcams. La web no permite incrustar su visor; accede al enlace oficial.'
  },
  {
    id: 'alcossebre',
    name: 'Alcossebre - Playa Romana / Cargador',
    zone: 'Costa Norte',
    streamType: 'hls',
    streamUrl: 'https://streaming.comunitatvalenciana.com/webcam/Alcossebre/playlist.m3u8',
    snapshotUrl: 'https://streaming.comunitatvalenciana.com/static/Alcossebre/webcam_mini.png',
    officialUrl: 'https://www.comunitatvalenciana.com/es/castello-castellon/alcala-de-xivert-alcossebre/webcams/alcala-de-xivert-alcossebre-1',
    description: 'Playa de fina arena protegida por salientes rocosos con oleaje suave.'
  }
];

// ==========================================
// 3. FÍSICA COSTERA Y ALGORITMOS DE CALIDAD
// ==========================================

// --- CONSTANTES SURFLINE ---
// Ajuste del periodo para altura en rompiente
const SURFLINE_FACTOR_PERIODO = 0.15; 
// Penalización por ángulo
const SURFLINE_FACTOR_ANGULO = 0.8; 
const SURFLINE_VIENTO_TERRAL_BONUS = 1;
const SURFLINE_VIENTO_CRUZADO_PENAL = -0.5;
const SURFLINE_VIENTO_MAR_PENAL = -2;

function calcularFisica(spotId, h, periodo, dirSwell) {
  h = Number(h) || 0;
  periodo = Number(periodo) || 0;
  dirSwell = Number(dirSwell) || 0;
  if (h <= 0) return 0;

  const spot = SPOTS.find(s => s.id === spotId || s.name === spotId) || SPOTS[0];
  const orientacion = spot.orientacion || 90;
  
  // Si el mar viene de tierra (fuera de ventana +-90 grados de la normal)
  let diffAngulo = Math.abs(dirSwell - orientacion);
  if (diffAngulo > 180) diffAngulo = 360 - diffAngulo;
  
  if (diffAngulo > 90) return 0; // Mar de tierra o fuera de ventana total

  // Altura = H * (1 + factor_periodo * periodo) * cos(angulo)
  const factorSwell = 1 + (SURFLINE_FACTOR_PERIODO * (periodo - 4) / 4);
  const cosAngulo = Math.cos(diffAngulo * Math.PI / 180);
  
  const alturaRompiente = h * factorSwell * (Math.pow(cosAngulo, SURFLINE_FACTOR_ANGULO));
  
  return Math.round(alturaRompiente * 100) / 100;
}

function calcularCalidad(hSpot, p, ws, wd, spotId) {
  hSpot = Number(hSpot) || 0;
  if (hSpot < 0.2) return 0; // MUY MALO

  const spot = SPOTS.find(s => s.id === spotId || s.name === spotId) || SPOTS[0];
  const orientacion = spot.orientacion || 90;
  
  let score = 0;
  if (hSpot >= 0.2) score = 1;
  if (hSpot >= 0.4) score = 2;
  if (hSpot >= 0.6) score = 3;
  if (hSpot >= 0.8) score = 4;
  if (hSpot >= 1.2) score = 5;
  if (hSpot >= 2.0 && p >= 7) score = 6;

  let diffAngulo = Math.abs(wd - orientacion);
  if (diffAngulo > 180) diffAngulo = 360 - diffAngulo;

  if (ws >= 5) {
      if (diffAngulo > 135) {
          score += SURFLINE_VIENTO_TERRAL_BONUS;
      } else if (diffAngulo >= 45 && diffAngulo <= 135) {
          score += SURFLINE_VIENTO_CRUZADO_PENAL;
      } else {
          score += SURFLINE_VIENTO_MAR_PENAL * (ws / 15);
      }
  }
  
  return Math.max(0, Math.min(6, Math.round(score)));
}

function getAnatomicalHeight(h) {
  if (h < 0.3) return 'Tobillo';
  if (h < 0.6) return 'Rodilla';
  if (h < 0.9) return 'Cintura';
  if (h < 1.2) return 'Pecho';
  if (h < 1.8) return 'Cabeza';
  return 'Por encima de la cabeza';
}

function getRatingMeta(score) {
  const s = Math.max(0, Math.min(6, Math.round(score)));
  switch (s) {
    case 6: return { label: 'ÉPICO', badgeClass: 'bg-purple-500/20 text-purple-400 border-purple-500/40', starColor: 'text-purple-500', barColor: '#a855f7', desc: 'Épico' };
    case 5: return { label: 'BUENO', badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40', starColor: 'text-emerald-500', barColor: '#10b981', desc: 'Bueno' };
    case 4: return { label: 'REGULAR-BUENO', badgeClass: 'bg-lime-500/20 text-lime-400 border-lime-500/40', starColor: 'text-lime-500', barColor: '#a3e635', desc: 'Regular a Bueno' };
    case 3: return { label: 'REGULAR', badgeClass: 'bg-amber-400/20 text-amber-400 border-amber-400/40', starColor: 'text-amber-400', barColor: '#fbbf24', desc: 'Regular' };
    case 2: return { label: 'MALO-REGULAR', badgeClass: 'bg-orange-500/20 text-orange-400 border-orange-500/40', starColor: 'text-orange-500', barColor: '#f97316', desc: 'Malo a Regular' };
    case 1: return { label: 'MALO', badgeClass: 'bg-rose-500/20 text-rose-400 border-rose-500/40', starColor: 'text-rose-500', barColor: '#f43f5e', desc: 'Malo' };
    default: return { label: 'MUY MALO', badgeClass: 'bg-slate-500/20 text-slate-400 border-slate-500/40', starColor: 'text-slate-500', barColor: '#64748b', desc: 'Muy Malo' };
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
  const spot = SPOTS.find(s => s.id === spotName || s.name === spotName) || SPOTS[0];
  const orientacion = spot.orientacion || 90;
  
  if (ws < 5) {
    return {
      type: 'offshore', label: 'Sin Viento',
      bgClass: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
      dotClass: 'bg-slate-400', icon: 'air', desc: 'Sin viento'
    };
  }

  let diffAngulo = Math.abs(wd - orientacion);
  if (diffAngulo > 180) diffAngulo = 360 - diffAngulo;

  if (diffAngulo > 135) {
    return {
      type: 'offshore', label: 'Terral (Offshore)',
      bgClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      dotClass: 'bg-emerald-400', icon: 'air', desc: 'Terral limpio'
    };
  } else if (diffAngulo >= 45 && diffAngulo <= 135) {
    return {
      type: 'cross', label: 'Cruzado (Cross)',
      bgClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      dotClass: 'bg-amber-400', icon: 'air', desc: 'Viento lateral'
    };
  } else {
    return {
      type: 'onshore', label: 'De mar (Onshore)',
      bgClass: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      dotClass: 'bg-rose-400', icon: 'air', desc: 'Revuelto (Onshore)'
    };
  }
}


// ==========================================
// 5. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================

// Franja de la previsión que el usuario ha tocado (null = ahora)
const forecastState = { spotId: 'Planetario', selectedTimeIndex: null };

const AppState = {
  forecastData: null,
  currentSpotId: 'Planetario',
  currentDayIndex: 0,
  currentFilter: 'all',
  hlsInstance: null,
  camAbort: null,
  camTimeout: null,
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

/**
 * Muestra un toast o actualiza el badge de pie con enlace a la cámara oficial
 * cuando el stream falla o no está disponible.
 */
function showOfficialLink(cam) {
  const footnote = document.getElementById('spotlight-cam-footnote');
  const descEl = document.getElementById('spotlight-cam-desc');
  if (descEl) {
    descEl.innerHTML = `${cam.description} <a href="${cam.officialUrl}" target="_blank" rel="noopener" class="underline text-sky-400 hover:text-sky-300">Abrir cámara oficial</a>`;
  }
}


function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function getClosestCamera(lat, lon) {
  let closestCam = null;
  let minDist = Infinity;
  SPOTS.forEach(s => {
    if (s.webcamId && s.webcamType === 'direct') {
      const dist = getDistance(lat, lon, s.lat, s.lon);
      if (dist < minDist) {
        minDist = dist;
        closestCam = { spot: s, dist: dist };
      }
    }
  });
  return closestCam;
}

function loadSpotWebcam(spotId) {

  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  
  const videoPlayer = document.getElementById('spotlight-video');
  const imgPlayer = document.getElementById('spotlight-img');
  const loader = document.getElementById('spotlight-loader');
  const liveLabel = document.getElementById('spotlight-live-label');
  const livePill = document.getElementById('spotlight-live-pill');
  const camTitleBadge = document.getElementById('spotlight-cam-title-badge');
  const camDescEl = document.getElementById('spotlight-cam-desc');
  const camTypeBadge = document.getElementById('spotlight-cam-type-badge');
  const extBtn = document.getElementById('spotlight-external-cam-btn');
  const surfersOverlay = document.getElementById('spotlight-surfers-overlay');
  const surfersIframe = document.getElementById('spotlight-surfers-iframe');
  
  if (!spot.webcamId) {
    if (camTitleBadge) camTitleBadge.textContent = "Sin cámara en este spot";
    if (camTypeBadge) {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Sin cámara`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-slate-400 flex items-center gap-1';
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
    if (loader) loader.classList.add('hidden');
    if (liveLabel) liveLabel.textContent = 'OFFLINE';
    if (livePill) livePill.classList.add('opacity-50');
    
    const closest = getClosestCamera(spot.lat, spot.lon);
    if (closest && camDescEl) {
      camDescEl.innerHTML = `No hay cámara instalada en ${spot.label}.<br><br><button onclick="selectSpot('${closest.spot.id}')" class="mt-2 px-3 py-1.5 bg-sky-500/20 text-sky-400 rounded-md text-sm border border-sky-500/30 hover:bg-sky-500/30 transition-colors">Ver cámara más cercana: ${closest.spot.label} (${closest.dist.toFixed(1)} km)</button>`;
    } else if (camDescEl) {
      camDescEl.textContent = `No hay cámara instalada en ${spot.label}.`;
    }
    if (extBtn) extBtn.classList.add('hidden');
    return;
  }
  if (extBtn) extBtn.classList.remove('hidden');

  const cam = WEBCAMS_CATALOG.find(c => c.id === spot.webcamId) || WEBCAMS_CATALOG[0];

  const surfersToggleText = document.getElementById('spotlight-surfers-toggle-text');

  if (camTitleBadge) camTitleBadge.textContent = cam.name;
  if (camDescEl) camDescEl.textContent = cam.description;
  if (extBtn) extBtn.href = cam.officialUrl;

  // Actualizar etiqueta de estado de cámara (honesta según streamType real)
  if (camTypeBadge) {
    if (cam.streamType === 'link_only') {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Solo enlace oficial`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-slate-400 flex items-center gap-1';
    } else if (cam.streamType === 'hls' && spot.webcamType === 'direct') {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Stream HLS en directo`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-emerald-400 flex items-center gap-1';
    } else if (cam.streamType === 'mjpeg') {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span> MJPEG (puerto 445)`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-sky-400 flex items-center gap-1';
    } else if (spot.webcamType === 'direct') {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Cámara directa del spot`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-emerald-400 flex items-center gap-1';
    } else {
      camTypeBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Ref: ${cam.name.split('-')[0].trim()} (${spot.referenceDist || 'cercano'})`;
      camTypeBadge.className = 'shrink-0 text-[11px] font-bold text-amber-400 flex items-center gap-1';
    }
  }

  // Limpiar temporizadores y streams previos
  if (AppState.snapshotRefreshTimer) {
    clearInterval(AppState.snapshotRefreshTimer);
    AppState.snapshotRefreshTimer = null;
  }
  // Cancelar listeners y temporizador de la cámara anterior
  if (AppState.camAbort) AppState.camAbort.abort();
  AppState.camAbort = new AbortController();
  clearTimeout(AppState.camTimeout);
  if (AppState.hlsInstance) {
    AppState.hlsInstance.destroy();
    AppState.hlsInstance = null;
  }
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    videoPlayer.classList.add('hidden');
    // Limpiar listeners de error previos
    videoPlayer.onerror = null;
  }
  if (imgPlayer) {
    imgPlayer.classList.add('hidden');
    imgPlayer.onerror = null;
    imgPlayer.onload = null;
  }
  if (livePill) {
    livePill.classList.remove('opacity-50');
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

  // Caso 1: Streaming HLS en directo (Burriana, Peñíscola, Oropesa, Vinaròs, Alcossebre)
  if (cam.streamType === 'hls') {
    if (videoPlayer) {
      videoPlayer.classList.remove('hidden');
      if (loader) loader.classList.remove('hidden');
      if (liveLabel) liveLabel.textContent = 'CONECTANDO...';

      // iPhone/iPad/Safari: HLS nativo (lo más fiable ahí). Resto: hls.js. ?hls=nativo fuerza el nativo para probar.
      const ua = navigator.userAgent;
      const esApple = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        (/Safari/.test(ua) && !/Chrome|Chromium|Edg|CriOS|FxiOS/.test(ua));
      const forzarNativo = new URLSearchParams(location.search).get('hls') === 'nativo';
      const hlsNativo = videoPlayer.canPlayType('application/vnd.apple.mpegurl');
      if (hlsNativo && (esApple || forzarNativo || !(window.Hls && Hls.isSupported()))) {
        // Los listeners y el temporizador se cancelan al cambiar de cámara (AppState.camAbort)
        const senal = AppState.camAbort.signal;
        videoPlayer.muted = true;
        videoPlayer.playsInline = true;
        videoPlayer.setAttribute('playsinline', '');
        videoPlayer.setAttribute('webkit-playsinline', '');
        videoPlayer.autoplay = true;
        videoPlayer.src = cam.streamUrl;

        const onError = () => {
          if (senal.aborted) return;
          clearTimeout(AppState.camTimeout);
          videoPlayer.classList.add('hidden');
          if (imgPlayer) {
            imgPlayer.classList.remove('hidden');
            imgPlayer.src = `${cam.snapshotUrl}?t=${Date.now()}`;
          }
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'SIN SEÑAL';
          if (livePill) livePill.classList.add('opacity-50');
          showOfficialLink(cam);
        };
        // Sin imagen en 15 s = sin señal. 'stalled' NO es un error: salta en cargas normales.
        AppState.camTimeout = setTimeout(onError, 15000);
        videoPlayer.addEventListener('loadedmetadata', () => {
          clearTimeout(AppState.camTimeout);
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'EN DIRECTO';
          videoPlayer.play().catch(() => {});
        }, { signal: senal });
        videoPlayer.addEventListener('error', onError, { signal: senal });

      } else if (window.Hls && Hls.isSupported()) {
        // Resto de navegadores: usar hls.js
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false,   // Los streams de CV no son LL-HLS
          manifestLoadingTimeOut: 8000,
          manifestLoadingMaxRetry: 2
        });
        AppState.hlsInstance = hls;
        hls.loadSource(cam.streamUrl);
        hls.attachMedia(videoPlayer);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'EN DIRECTO';
          videoPlayer.play().catch(() => {});
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.warn('[HLS] Error fatal de stream. Conmutando a snapshot:', data);
            hls.destroy();
            AppState.hlsInstance = null;
            videoPlayer.classList.add('hidden');
            if (imgPlayer) {
              imgPlayer.classList.remove('hidden');
              imgPlayer.src = `${cam.snapshotUrl}?t=${Date.now()}`;
            }
            if (loader) loader.classList.add('hidden');
            if (liveLabel) liveLabel.textContent = 'SIN SEÑAL';
            if (livePill) livePill.classList.add('opacity-50');
            showOfficialLink(cam);
          }
        });
      }
    }
  }

  // Caso 2: MJPEG (Voramar) con timeout de 8 s y fallback a snapshot + enlace oficial
  else if (cam.streamType === 'mjpeg') {
    if (imgPlayer) {
      imgPlayer.classList.remove('hidden');
      if (loader) loader.classList.remove('hidden');
      if (liveLabel) liveLabel.textContent = 'CONECTANDO...';

      let mjpegLoaded = false;
      const mjpegTimeout = setTimeout(() => {
        if (!mjpegLoaded) {
          // Puerto 445 bloqueado o timeout: pasar a snapshot + enlace oficial
          imgPlayer.src = cam.snapshotUrl ? `${cam.snapshotUrl}?t=${Date.now()}` : '';
          if (loader) loader.classList.add('hidden');
          if (liveLabel) liveLabel.textContent = 'SIN SEÑAL';
          if (livePill) livePill.classList.add('opacity-50');
          showOfficialLink(cam);
        }
      }, 8000);

      imgPlayer.onload = () => {
        mjpegLoaded = true;
        clearTimeout(mjpegTimeout);
        if (loader) loader.classList.add('hidden');
        if (liveLabel) liveLabel.textContent = 'EN DIRECTO';
      };
      imgPlayer.onerror = () => {
        clearTimeout(mjpegTimeout);
        imgPlayer.src = cam.snapshotUrl ? `${cam.snapshotUrl}?t=${Date.now()}` : '';
        if (loader) loader.classList.add('hidden');
        if (liveLabel) liveLabel.textContent = 'SIN SEÑAL';
        if (livePill) livePill.classList.add('opacity-50');
        showOfficialLink(cam);
      };

      // Iniciar el stream MJPEG
      imgPlayer.src = `${cam.streamUrl}?t=${Date.now()}`;
    }
  }

  // Caso 3: Solo enlace oficial (Planetario, Gurugú, Heliópolis)
  //   No hay stream embebible verificado: mostrar tarjeta informativa honesta
  else if (cam.streamType === 'link_only') {
    if (surfersOverlay) {
      // Reutilizamos el overlay de surfers con texto actualizado
      const h4 = surfersOverlay.querySelector('h4');
      const p  = surfersOverlay.querySelector('p');
      const aBtn = surfersOverlay.querySelector('a');
      if (h4) h4.textContent = cam.name;
      if (p)  p.textContent  = cam.description;
      if (aBtn) {
        aBtn.href = cam.officialUrl;
        aBtn.querySelector('span:first-child') && (aBtn.querySelector('span:first-child').textContent = 'Abrir cámara oficial');
      }
      surfersOverlay.classList.remove('hidden');
    }
    if (liveLabel) liveLabel.textContent = 'SIN SEÑAL';
    if (livePill) livePill.classList.add('opacity-50');
    if (loader) loader.classList.add('hidden');
  }

  // Caso 4: Snapshots periódicos estáticos (fallback genérico)
  else {
    if (imgPlayer && cam.snapshotUrl) {
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
        if (liveLabel) liveLabel.textContent = 'SIN SEÑAL';
        showOfficialLink(cam);
      };
      reloadSnap();
      AppState.snapshotRefreshTimer = setInterval(reloadSnap, 10000);
      if (liveLabel) liveLabel.textContent = 'FOTO (sin stream)';
    }
  }
}


function renderSpotSpotlight(spotId) {
  const compassContainer = document.getElementById("spotlight-compass-svg");
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
  renderForecastBars(data, spotId);
  let currentIndex = 0;
  for (let i = 0; i < data.times.length; i++) {
    if (data.times[i] >= nowIso.slice(0, 13)) {
      currentIndex = i;
      break;
    }
  }
  if (forecastState.selectedTimeIndex != null) currentIndex = forecastState.selectedTimeIndex;

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
    const isLinkOnly = cam.streamType === 'link_only';
    const hasLiveStream = cam.streamType === 'hls' || cam.streamType === 'mjpeg';

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

    // Badge de cámara: honesto según el tipo real
    let camBadgeColor, camBadgeLabel;
    if (hasLiveStream && isDirect) {
      camBadgeColor = 'bg-emerald-400 animate-pulse';
      camBadgeLabel = 'DIRECTO';
    } else if (hasLiveStream) {
      camBadgeColor = 'bg-amber-400';
      camBadgeLabel = 'DIRECTO REF.';
    } else if (isLinkOnly) {
      camBadgeColor = 'bg-slate-500';
      camBadgeLabel = 'SOLO ENLACE';
    } else {
      camBadgeColor = 'bg-amber-400';
      camBadgeLabel = 'CAM REF.';
    }

    // Thumbnail: si no hay snapshotUrl (link_only), mostrar placeholder con ícono
    const thumbnailHtml = cam.snapshotUrl
      ? `<img src="${cam.snapshotUrl}" alt="${spot.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />`
      : `<div class="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-500 bg-surf-950">
           <span class="material-symbols-outlined text-3xl">videocam_off</span>
           <span class="text-[10px] font-bold uppercase tracking-wider">Sin stream verificado</span>
           <a href="${cam.officialUrl}" target="_blank" rel="noopener noreferrer" class="mt-1 px-3 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-[10px] font-bold transition-colors flex items-center gap-1" onclick="event.stopPropagation()">
             <span class="material-symbols-outlined text-xs">open_in_new</span>
             Abrir cámara oficial
           </a>
         </div>`;

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
            ${thumbnailHtml}
            <div class="absolute inset-0 bg-gradient-to-t from-surf-950/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>

            <div class="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surf-950/90 backdrop-blur-md border border-surf-800 text-[10px] font-bold text-white shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full ${camBadgeColor}"></span>
              <span>${camBadgeLabel}</span>
            </div>

            ${cam.snapshotUrl ? `<div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surf-950/90 backdrop-blur-md border border-surf-800 text-[10px] font-bold text-sky-400 flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">play_circle</span>
              <span>Ver rompiente</span>
            </div>` : ''}
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



function renderForecastBars(data, spotId) {
  const container = document.getElementById('forecast-bars-container');
  if (!container || !data || !data.times) return;

  const spot = SPOTS.find(s => s.id === spotId) || SPOTS[0];
  let html = '';
  
  // Agrupar por días y cada 3h
  let currentDay = '';
  const nowIso = new Date().toISOString();
  
  for (let i = 0; i < data.times.length; i++) {
    const timeStr = data.times[i];
    if (timeStr < nowIso.slice(0, 13)) continue;
    
    const d = new Date(timeStr);
    const hour = d.getHours();
    
    // Cada 3h
    if (hour % 3 !== 0) continue;
    
    const day = d.toLocaleDateString('es-ES', { weekday: 'short' });
    const isNewDay = day !== currentDay;
    if (isNewDay) currentDay = day;
    
    const h = data.marine.wave_height[i];
    const p = data.marine.wave_period[i];
    const sDir = data.marine.wave_direction[i];
    const ws = data.weather.wind_speed_10m[i];
    const wd = data.weather.wind_direction_10m[i];
    const pres = data.weather.surface_pressure[i];
    
    const hLocal = calcularFisica(spot.name, h, p, sDir);
    const quality = calcularCalidad(hLocal, p, ws, wd, spot.name, pres, 10);
    const meta = getRatingMeta(quality);
    
    const heightPx = Math.max(10, hLocal * 50); // Scale for visual
    const timeLabel = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const isSelected = forecastState.selectedTimeIndex === i;
    
    html += `
      <div class="flex flex-col items-center shrink-0 snap-start relative group cursor-pointer" onclick="selectForecastTime(${i})">
        ${isNewDay ? `<div class="absolute -top-10 text-[10px] font-bold text-slate-400 border-b border-surf-800 w-full text-center pb-1">${day.toUpperCase()}</div>` : ''}
        <div class="text-[10px] font-black text-white mb-1 transition-transform group-hover:-translate-y-1">${hLocal.toFixed(1)}m</div>
        <div class="w-8 rounded-t-sm transition-all duration-300 ${isSelected ? 'ring-2 ring-white' : 'opacity-80 hover:opacity-100'}" style="height: ${heightPx}px; background-color: ${meta.barColor}"></div>
        <div class="text-[9px] text-slate-500 mt-2 font-medium">${timeLabel}</div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

function selectForecastTime(index) {
  forecastState.selectedTimeIndex = index;
  // Update UI components that rely on time
  // renderSpotSpotlight ya vuelve a pintar las barras con la franja resaltada
  renderSpotSpotlight(AppState.currentSpotId);
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
  forecastState.selectedTimeIndex = null;
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

// Versión visible en el pie: fecha de publicación del app.js que se está ejecutando (cabecera Last-Modified de GitHub Pages)
async function mostrarVersion() {
  const el = document.getElementById('app-version');
  if (!el) return;
  try {
    const r = await fetch('app.js', { method: 'HEAD', cache: 'no-store' });
    const lm = r.headers.get('last-modified');
    const f = lm ? new Date(lm) : null;
    if (f && !isNaN(f)) el.textContent = 'v' + f.toLocaleString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  } catch { /* sin red: se queda el texto por defecto */ }
}

function initPWA() {
  if ('serviceWorker' in navigator) {
    // Si ya había un SW controlando la página, al activarse uno nuevo se recarga una vez con la versión nueva
    const teniaControlador = !!navigator.serviceWorker.controller;
    let recargado = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!teniaControlador || recargado) return;
      recargado = true;
      window.location.reload();
    });
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
        .then(reg => { console.log('[SW] Service Worker registrado:', reg.scope); reg.update(); })
        .catch(err => console.warn('[SW] Error en registro:', err));
    });
  }
  mostrarVersion();

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


function polarToCartesian(cx, cy, r, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: cx + (r * Math.cos(angleInRadians)),
    y: cy + (r * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, r, startAngle, endAngle) {
  const start = polarToCartesian(x, y, r, endAngle);
  const end = polarToCartesian(x, y, r, startAngle);
  let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  if (endAngle < startAngle) {
      largeArcFlag = (endAngle + 360 - startAngle) <= 180 ? "0" : "1";
  }
  return [
    "M", x, y,
    "L", start.x, start.y, 
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");
}

function renderCompassSVG(spotId, currentMarDir, currentVientoDir) {
  const spot = SPOTS.find(s => s.id === spotId || s.name === spotId) || SPOTS[0];
  const orient = spot.orientacion || 90;
  const mar = spot.ventanaMar || [(orient - 35 + 360)%360, (orient + 35)%360];
  const viento = spot.ventanaViento || [(orient + 180 - 45 + 360)%360, (orient + 180 + 45)%360];
  
  const cx = 50, cy = 50, r = 40;
  
  // Coastline line (perpendicular to normal)
  const coastAngle1 = (orient - 90 + 360) % 360;
  const coastAngle2 = (orient + 90) % 360;
  const p1 = polarToCartesian(cx, cy, r + 5, coastAngle1);
  const p2 = polarToCartesian(cx, cy, r + 5, coastAngle2);
  
  // Arcs
  const marArc = describeArc(cx, cy, r, mar[0], mar[1]);
  const vientoArc = describeArc(cx, cy, r, viento[0], viento[1]);
  
  // Arrows for current conditions
  const pMar = polarToCartesian(cx, cy, r - 5, currentMarDir);
  const pViento = polarToCartesian(cx, cy, r - 5, currentVientoDir);
  
  const svg = `
    <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-lg">
      <circle cx="50" cy="50" r="45" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
      
      <!-- Cuñas -->
      <path d="${marArc}" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="1"/>
      <path d="${vientoArc}" fill="rgba(14, 165, 233, 0.2)" stroke="#0ea5e9" stroke-width="1"/>
      
      <!-- Línea de costa -->
      <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
      <circle cx="${p1.x}" cy="${p1.y}" r="2" fill="#94a3b8"/>
      <circle cx="${p2.x}" cy="${p2.y}" r="2" fill="#94a3b8"/>
      
      <!-- Flechas de condiciones actuales (si vienen de ese ángulo) -->
      <!-- Flecha mar: apunta DESDE el origen de la ola hacia la costa, o desde el mar hacia el centro -->
      <!-- En Surfline la flecha de ola y viento apunta en la dirección a la que VAN, es decir, el centro -->
      <line x1="${pMar.x}" y1="${pMar.y}" x2="50" y2="50" stroke="#34d399" stroke-width="2" marker-end="url(#arrow-mar)"/>
      <line x1="${pViento.x}" y1="${pViento.y}" x2="50" y2="50" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-viento)"/>
      
      <defs>
        <marker id="arrow-mar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
        </marker>
        <marker id="arrow-viento" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
        </marker>
      </defs>
    </svg>
  `;
  return svg;
}
