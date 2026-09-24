# 🌊 MASTER CONTEXT: SURF FORECAST AI LOCAL

## 1. OBJETIVO Y RESTRICCIONES (INMUTABLE)
*   **Misión:** Construir una plataforma de previsión de surf local para Castellón (estilo Surfline) con alertas automáticas y cámaras en directo.
*   **Restricción Estricta:** Coste 0€. Prohibido el uso de servidores 24/7 (VPS, Raspberry), bases de datos de pago o APIs que requieran tarjeta de crédito (ej. Meta Cloud API). Todo debe ser *Serverless* y usar "Free Tiers".

## 2. HISTORIAL DE DECISIONES Y CONTEXTO (RESUMEN DEL CHAT)
*Esta sección resume la evolución del proyecto para que cualquier IA entienda el "por qué" de la arquitectura sin leer todo el historial previo.*
*   **Origen:** El sistema partió de un bot de Telegram con base en Google Apps Script y Google Sheets (versión v50.0). 
*   **Evolución Serverless:** Se descartó Google Sheets para evitar cuotas y problemas de mantenimiento. Se optó por almacenar los datos en un simple CSV alojado en GitHub, actualizado automáticamente por GitHub Actions.
*   **WhatsApp sin coste:** Se rechazaron soluciones oficiales de Meta (piden tarjeta) y librerías tipo Puppeteer (requieren PC encendido). Se eligió **CallMeBot API** por ser 100% gratuita para grupos reducidos mediante peticiones GET.
*   **Diseño UI:** El usuario solicitó expresamente abandonar los emojis y adoptar una estética profesional usando **Google Material Symbols**.
*   **Evolución a IA:** Se ideó un sistema donde los usuarios envían feedback de sus sesiones ("Épico", "Normal", "Plato") a través de Netlify Forms. Este feedback alimenta el CSV hasta alcanzar los 14 días, momento en el cual un modelo de Machine Learning (`scikit-learn`) tomará el control para predecir la calidad de forma probabilística.

## 3. ARQUITECTURA Y STACK TECNOLÓGICO
*   **Frontend (Escaparate):** Netlify (Plan Starter). PWA estática, HTML5, Tailwind CSS, Google Material Symbols. Reproductores incrustados para webcams (YouTube iframe, `hls.js` para `.m3u8`, recarga de JPEG).
*   **Backend / Automatización (El Vigilante):** GitHub Actions. Ejecución de scripts Python mediante *cron jobs* diarios.
*   **Base de Datos (Memoria):** Archivo `historico_olas.csv` alojado en el propio repositorio de GitHub.
*   **Alertas:** CallMeBot API (WhatsApp).
*   **Inteligencia Artificial (Cerebro):** Python con `scikit-learn`.
*   **Feedback Humano:** Netlify Forms (oculto en la ruta `/votar`).

## 4. FUENTES DE DATOS Y REFERENCIAS
*   **API Meteorológica:** `Open-Meteo Marine API` y `Open-Meteo Weather API`. (Lat/Lon: Castellón). Variables: altura de ola, período, dirección, viento (fuerza/ráfagas a 10m).
*   **API Alertas:** `CallMeBot` (WhatsApp). Formato: `https://api.callmebot.com/whatsapp.php?phone=[NUM]&text=[TXT]&apikey=[KEY]`
*   **Webs de Referencia (Inspiración UX/UI):** Surfline, Magicseaweed (archivo), Windguru.

## 5. INSTRUCCIONES PARA EL ENJAMBRE MULTI-IA (ORCA)
**Directiva del Sistema:** Actúas como un agente especializado en un enjambre de desarrollo. Lee este archivo de contexto. Ejecuta tu tarea sin explicaciones superfluas. Tu salida debe ser código estrictamente funcional. 
*   **Claude / Antigravity:** Encargados de la lógica de backend (Python), traducción matemática del motor costero y automatización (GitHub Actions YAML).
*   **ChatGPT:** Encargado exclusivamente de generar el frontend (HTML, TailwindCSS, Material Symbols) y la lógica de Netlify Forms.
*   **Gemini:** Encargado de la estructura de datos (CSV) y el parseo de las APIs (Open-Meteo JSON).

**REGLA DE AUTOCOMPILADO:** Al finalizar tu tarea, debes añadir al final de tu respuesta un bloque exacto con el formato `[MEMORY_UPDATE]`. Este bloque contendrá un resumen técnico de máximo 3 líneas indicando los archivos creados o modificados. El usuario copiará este bloque en la sección "ESTADO ACTUAL" de este documento.

## 6. CÓDIGO FUENTE (LÓGICA FÍSICA A TRADUCIR)
El siguiente código JavaScript contiene la física de los spots (Mediterráneo) y el algoritmo de calidad pre-IA. El agente de Backend debe traducirlo a Python.

```javascript
var SPOT_CONFIG = {
  'Planetario':  { azimut: 26,  thetaCrit: 45, sBase: 0.15, offshoreMin: 275, offshoreMax: 315 },
  'Gurugu':      { azimut: 26,  thetaCrit: 45, sBase: 0.15, offshoreMin: 275, offshoreMax: 315 },
  'Pirámides':   { azimut: 38,  thetaCrit: 50, sBase: 0.10, offshoreMin: 285, offshoreMax: 330 },
  'Voramar':     { azimut: 54,  thetaCrit: 65, sBase: 0.05, offshoreMin: 300, offshoreMax: 350 },
  'La Renegà':   { azimut: 172, thetaCrit: 10, sBase: 0.90, offshoreMin: 230, offshoreMax: 290 },
  'Burriana':    { azimut: 26,  thetaCrit: 45, sBase: 0.20, offshoreMin: 275, offshoreMax: 315 },
  'Nules':       { azimut: 26,  thetaCrit: 40, sBase: 0.25, offshoreMin: 275, offshoreMax: 315 },
  'Almenara':    { azimut: 26,  thetaCrit: 35, sBase: 0.30, offshoreMin: 275, offshoreMax: 315 },
  'Peñíscola N': { azimut: 10,  thetaCrit: 10, sBase: 0.80, offshoreMin: 260, offshoreMax: 300 },
  'Vinaròs':     { azimut: 10,  thetaCrit: 10, sBase: 0.85, offshoreMin: 260, offshoreMax: 300 }
};

function getSpotConfig(nombre) {
  var keys = Object.keys(SPOT_CONFIG);
  for (var i = 0; i < keys.length; i++) {
    if (nombre.indexOf(keys[i]) !== -1) return SPOT_CONFIG[keys[i]];
  }
  return { azimut: 26, thetaCrit: 40, sBase: 0.20, offshoreMin: 275, offshoreMax: 315 };
}

function calcularFisica(nombre, h, periodo, dirSwell) {
  h = Number(h) || 0; periodo = Number(periodo) || 0; dirSwell = Number(dirSwell) || 0;
  if (h <= 0) return 0;

  var cfg = getSpotConfig(nombre);
  var k = 0.15; 
  var sf = cfg.sBase + (1 - cfg.sBase) / (1 + Math.exp(-k * (dirSwell - cfg.thetaCrit)));

  var amplificador = 1.0;
  if (dirSwell < 75) {
    var ganancia = Math.pow(periodo / 4.0, 2);           
    ganancia = Math.min(Math.max(ganancia, 1.0), 2.5);   
    var factorSombra = 1.0 - sf;                         
    amplificador = 1.0 + ((ganancia - 1.0) * factorSombra);
  }

  var normalCosta = cfg.azimut + 90;
  var exposicion = Math.abs(Math.cos((dirSwell - normalCosta) * Math.PI / 180));
  exposicion = Math.max(exposicion, 0.05); 

  return Math.round(h * sf * amplificador * exposicion * 100) / 100;
}

function calcularCalidad(h, p, ws, wd, nombre, presion, visib) {
  h = Number(h) || 0; p = Number(p) || 0; ws = Number(ws) || 0; wd = Number(wd) || 0;
  if (h < 0.2) return 0;  
  if (h < 0.35) return 1; 

  var s = 2;
  if (h >= 0.5) s++;
  if (h >= 0.9) s++;
  if (p >= 6) s += 0.5;
  if (p >= 8) s += 0.5;
  var energia = h * h * p;
  if (energia >= 5)  s += 0.5;
  if (energia >= 15) s += 0.5;

  var cfg = nombre ? getSpotConfig(nombre) : null;
  if (cfg) {
    var isOffshore = (cfg.offshoreMin < cfg.offshoreMax) 
      ? (wd >= cfg.offshoreMin && wd <= cfg.offshoreMax)
      : (wd >= cfg.offshoreMin || wd <= cfg.offshoreMax);
    if (isOffshore && ws < 15) s += 1;     
    if (isOffshore && ws < 8)  s += 0.5;   
  } else {
    var offGen = (wd >= 260 && wd <= 360) || (wd >= 0 && wd < 45);
    if (offGen && ws < 12) s++;
  }
  if (ws > 20) s -= 1;
  if (ws > 30) s -= 1;
  
  presion = Number(presion) || 1013;
  if (presion > 0 && presion < 1008) s += 0.5;  
  if (presion > 0 && presion < 995) s += 0.5;   

  return Math.min(Math.max(Math.round(s), 0), 5);
}

## 7. ESTADO ACTUAL
- Frontend PWA (index.html, app.js, votar.html, manifest.json, sw.js) implementado con caché resiliente en móvil, renderizado instantáneo y sesión local de usuario.
- Backend (backend/motor_fisica.py, backend/actualizar_prevision.py, backend/test_motor_fisica.py) con 27 tests unitarios pasando y automatización diaria por GitHub Actions (.github/workflows/prevision_diaria.yml).
- Repositorio organizado en rama `desarrollo-web-surf` con .gitignore estricto para coste 0€.