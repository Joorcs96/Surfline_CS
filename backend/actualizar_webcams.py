"""Verificación y Actualización Automática de Webcams de Castellón.

Comprueba el estado de disponibilidad de las cámaras costeras públicas,
refresca sus enlaces activos y actualiza webcams.json de forma periódica
en GitHub Actions.

Restricciones estrictas:
- Solo librerías estándar de Python (urllib.request, json, os, sys, datetime).
- Coste 0 EUR.

IMPORTANTE: las cámaras con streamType "link_only" NO se verifican como
streams en directo. El cron NO debe cambiar su streamType ni asignarles
un snapshotUrl estático como si fuera un directo.
URLs que NUNCA son directos:
  - aeroclubcastellon.com/wp-content/.../webcam-aeroclub-cs.jpg (foto 2016)
  - surferscastellon.com/live-webcam/ (página web, no stream)
  - skylinewebcams.com (X-Frame-Options SAMEORIGIN, no embebible)
"""

import json
import os
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# Asegurar codificación UTF-8 en Windows
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

ROOT_DIR = Path(__file__).resolve().parent.parent
WEBCAMS_JSON_PATH = os.path.join(ROOT_DIR, "webcams.json")

# URLs que son fotos estáticas o páginas web, NUNCA streams en directo.
# El cron las ignora para la verificación de stream.
STATIC_PHOTO_BLOCKLIST = {
    "aeroclubcastellon.com/wp-content/uploads/2016/09/webcam-aeroclub-cs.jpg",
    "aeroclubcastellon.com",  # dominio completo bloqueado para streams
}

# Tipos de cámara que NO se deben verificar como streams en directo
LINK_ONLY_TYPES = {"link_only", "external"}


def url_is_blocked(url: str) -> bool:
    """Devuelve True si la URL es una foto estática conocida o dominio bloqueado."""
    if not url:
        return True
    url_lower = url.lower()
    for blocked in STATIC_PHOTO_BLOCKLIST:
        if blocked in url_lower:
            return True
    return False


def verificar_url(url: str, timeout: int = 10) -> bool:
    """Comprueba si un endpoint de cámara responde con código HTTP 200/300."""
    if url_is_blocked(url):
        print(f"  [SKIP] URL bloqueada (foto estática o web, no stream): {url}")
        return False
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) SurflineCastellon/1.0"
            },
        )
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return 200 <= resp.status < 400
    except Exception as e:
        print(f"  [Aviso] No responde {url}: {e}")
        return False


def actualizar_catalogo_webcams():
    """Lee webcams.json, verifica cada fuente y guarda el estado actualizado."""
    print("--- INICIANDO VERIFICACIÓN DE WEBCAMS COSTERAS DE CASTELLÓN ---")
    if not os.path.exists(WEBCAMS_JSON_PATH):
        print(f"Error: No existe {WEBCAMS_JSON_PATH}")
        sys.exit(1)

    with open(WEBCAMS_JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    webcams = data.get("webcams", [])
    activos = 0
    link_only_count = 0

    for cam in webcams:
        cam_id = cam.get("id")
        stream_type = cam.get("streamType", "")

        # Las cámaras link_only NO se verifican como streams: solo se anota el timestamp
        if stream_type in LINK_ONLY_TYPES:
            cam["status"] = "link_only"
            cam["liveStatus"] = False
            cam["lastChecked"] = datetime.now(timezone.utc).isoformat()
            link_only_count += 1
            print(f"  [ENLACE OFICIAL] {cam.get('name')} (sin stream embebible verificado)")
            continue

        target_url = cam.get("streamUrl") or cam.get("snapshotUrl") or cam.get("officialUrl")
        print(f"Verificando {cam.get('name')} ({cam_id}) → {target_url}")

        if target_url and not url_is_blocked(target_url) and verificar_url(target_url):
            cam["status"] = "online"
            cam["liveStatus"] = True
            cam["lastChecked"] = datetime.now(timezone.utc).isoformat()
            activos += 1
            print(f"  [OK] {cam.get('name')}")
        else:
            # Si streamUrl no responde, probar snapshot (pero solo si no está bloqueado)
            snap = cam.get("snapshotUrl")
            if snap and not url_is_blocked(snap) and verificar_url(snap):
                cam["status"] = "online"
                cam["liveStatus"] = True
                cam["lastChecked"] = datetime.now(timezone.utc).isoformat()
                activos += 1
                print(f"  [OK (Snapshot)] {cam.get('name')}")
            else:
                cam["status"] = "offline"
                cam["liveStatus"] = False
                cam["lastChecked"] = datetime.now(timezone.utc).isoformat()
                print(f"  [OFFLINE / CHECK] {cam.get('name')}")

    data["updatedAt"] = datetime.now(timezone.utc).isoformat()
    data["totalActive"] = activos
    data["totalLinkOnly"] = link_only_count

    with open(WEBCAMS_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Catálogo webcams.json actualizado: {activos} en directo, {link_only_count} solo enlace.")


if __name__ == "__main__":
    actualizar_catalogo_webcams()
