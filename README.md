# 🌊 Surfline Castellón (Surf Forecast AI Local)

Plataforma de previsión de olas y meteorología marina para la costa de Castellón (Grao, Gurugú, Benicàssim, Burriana, Nules, Almenara, Peñíscola, Vinaròs).

Arquitectura **100% Serverless y Coste 0€** con física costera local, soporte PWA offline y automatización diaria mediante GitHub Actions.

---

## 📱 Características Principales

- **Física Costera Local:** Modelado matemático de azimut de playa, sombras de espigones y refracción para 9 spots de Castellón.
- **Frontend PWA Instantáneo:** Modo oscuro profesional, Tailwind CSS, Google Material Symbols y Service Worker (`sw.js`).
- **Resiliencia Móvil:** Carga instantánea cache-first con tolerancia a desconexión y timeouts de red controlados para evitar bloqueos en iOS/Android.
- **Sesión de Surfista:** Sistema de perfil local sin dependencias de servidores externos para personalizar reportes.
- **Webcams en Directo:** Soporte para streams HLS (`.m3u8`), YouTube iframes y recarga de imágenes JPEG.
- **Reporte de Condiciones (`/votar`):** Formulario para calibrar y retroalimentar el modelo de calidad con observaciones reales.
- **Backend Automatizado:** Script diario en Python (`backend/actualizar_prevision.py`) ejecutado por GitHub Actions que actualiza `historico_olas.csv` y envía alertas por WhatsApp con CallMeBot API.

---

## 📂 Estructura del Proyecto

```text
├── .github/workflows/
│   └── prevision_diaria.yml       # Cron job diario en GitHub Actions
├── backend/
│   ├── motor_fisica.py            # Modelado matemático y refracción costera
│   ├── actualizar_prevision.py    # Descarga Open-Meteo y generación de histórico
│   └── test_motor_fisica.py       # 27 tests unitarios (100% pass)
├── app.js                         # Lógica PWA, renderizado y gestión de datos
├── index.html                     # Dashboard principal responsive
├── votar.html                     # Formulario de feedback humano
├── manifest.json                  # Manifiesto para instalación PWA
├── sw.js                          # Service Worker con caché v2
├── historico_olas.csv             # Registro de observaciones y condiciones
├── MASTER_CONTEXT.md              # Contexto de arquitectura y decisiones
└── .gitignore                     # Exclusiones de control de versiones
```

---

## 🧪 Pruebas Unitarias

Para ejecutar el banco de pruebas del motor físico:

```bash
python -m unittest backend/test_motor_fisica.py
```
