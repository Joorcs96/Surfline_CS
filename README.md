# Surfline Castellón (Surf Forecast AI Local)

Plataforma profesional de previsión de olas y meteorología marina para la costa de Castellón (Grao de Castellón, Gurugú, Pirámides, Benicàssim, Voramar, Heliópolis, Oropesa del Mar, La Renegà, Burriana, Nules, Almenara, Peñíscola y Vinaròs).

Arquitectura **100% Serverless y Coste 0 EUR** con física costera local, soporte PWA offline, webcams integradas en cada spot y automatización diaria mediante GitHub Actions.

---

## Características Principales

- **Física Costera Local:** Modelado matemático de azimut de playa, sombras de espigones y refracción para 13 spots de Castellón.
- **Webcams Integradas por Spot:** Visualización directa de cámaras y streams en cada spot (HLS, snapshots HD auto-refrescables y referencias cercanas) en lugar de galerías aisladas.
- **Frontend PWA Instantáneo:** Interfaz inspirada en Surfline con escala anatómica de olas, badges técnicos, Google Material Symbols (sin emojis) y Service Worker (`sw.js`).
- **Resiliencia Móvil:** Carga instantánea cache-first con tolerancia a desconexión y timeouts de red controlados para evitar bloqueos en iOS/Android.
- **Sesión de Surfista:** Sistema de perfil local sin dependencias de servidores externos para personalizar reportes.
- **Reporte de Condiciones (`/votar`):** Formulario para calibrar y retroalimentar el modelo de calidad con observaciones humanas reales.
- **Backend Automatizado:** Script diario en Python (`backend/actualizar_prevision.py`) ejecutado por GitHub Actions que actualiza `historico_olas.csv` y envía alertas por WhatsApp con CallMeBot API.

---

## Estructura del Proyecto

```text
├── .github/workflows/
│   └── prevision_diaria.yml       # Cron job diario en GitHub Actions
├── backend/
│   ├── motor_fisica.py            # Modelado matemático y refracción costera
│   ├── actualizar_prevision.py    # Descarga Open-Meteo y generación de histórico
│   ├── actualizar_webcams.py      # Verificación de señales de cámaras
│   └── test_motor_fisica.py       # 27 tests unitarios (100% pass)
├── app.js                         # Lógica PWA, reproductor de webcams por spot y renderizado
├── index.html                     # Dashboard principal responsive con Spot Spotlight
├── votar.html                     # Formulario de feedback humano
├── webcams.json                   # Catálogo de cámaras costeras y metadatos
├── manifest.json                  # Manifiesto para instalación PWA
├── sw.js                          # Service Worker con caché v2
├── historico_olas.csv             # Registro de observaciones y condiciones
├── MASTER_CONTEXT.md              # Contexto de arquitectura y decisiones
└── .gitignore                     # Exclusiones de control de versiones
```

---

## Pruebas Unitarias

Para ejecutar el banco de pruebas del motor físico:

```bash
python -m unittest backend/test_motor_fisica.py
```
