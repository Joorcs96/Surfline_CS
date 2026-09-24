"""Verificación y Actualización Automática de Webcams de Castellón.

Comprueba el estado de disponibilidad de las cámaras costeras públicas
(Voramar, Grao/Gurugú, Peñíscola, Burriana, Heliópolis), refresca sus
enlaces activos y actualiza webcams.json de forma periódica en GitHub Actions.

Restricciones estrictas:
- Solo librerías estándar de Python (urllib.request, json, os, sys, datetime).
- Coste 0 EUR.
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


def verificar_url(url: str, timeout: int = 10) -> bool:
    """Comprueba si un endpoint de cámara responde con código HTTP 200/300."""
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

    for cam in webcams:
        cam_id = cam.get("id")
        embed_url = cam.get("embedUrl")
        print(f"Verificando {cam.get('name')} ({cam_id})...")

        if embed_url and verificar_url(embed_url):
            cam["status"] = "online"
            cam["lastChecked"] = datetime.now(timezone.utc).isoformat()
            activos += 1
            print(f"  ✔ [ONLINE] {cam.get('name')}")
        else:
            cam["status"] = "offline"
            cam["lastChecked"] = datetime.now(timezone.utc).isoformat()
            print(f"  ✖ [OFFLINE / CHECK] {cam.get('name')}")

    data["updatedAt"] = datetime.now(timezone.utc).isoformat()
    data["totalActive"] = activos

    with open(WEBCAMS_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\n✔ Catálogo webcams.json actualizado con éxito: {activos}/{len(webcams)} online.")


if __name__ == "__main__":
    actualizar_catalogo_webcams()
