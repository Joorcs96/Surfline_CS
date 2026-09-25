import re
from datetime import datetime

# 1. Update sw.js
sw_lines = open('sw.js', 'r', encoding='utf-8').read()
sw_lines = sw_lines.replace('surfline-cs-v5', 'surfline-cs-v6')
open('sw.js', 'w', encoding='utf-8').write(sw_lines)

# 2. Update app.js (controllerchange)
app_lines = open('app.js', 'r', encoding='utf-8').read()
sw_logic = """
  // PWA & Service Worker Init
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          console.log('[PWA] Service Worker registrado', registration.scope);
        })
        .catch((error) => console.log('[PWA] Registro fallido', error));
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        window.location.reload();
        refreshing = true;
      }
    });
  }
"""

if "controllerchange" not in app_lines:
    app_lines = re.sub(r"  // PWA & Service Worker Init[\s\S]*?\}", sw_logic.strip(), app_lines, count=1)
    open('app.js', 'w', encoding='utf-8').write(app_lines)

# 3. Update index.html
html = open('index.html', 'r', encoding='utf-8').read()
build_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
version_span = f'<span class="text-slate-400 font-mono">v{build_time}</span>'

# Replace or add in footer
if "100% Serverless" in html:
    html = html.replace('100% Serverless', f'100% Serverless · {version_span}')
    open('index.html', 'w', encoding='utf-8').write(html)
