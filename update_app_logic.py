import re

content = open('app.js', 'r', encoding='utf-8').read()

haversine_func = """
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
"""

if "function getDistance(" not in content:
    content = content.replace("function loadSpotWebcam(spotId) {", haversine_func + "\nfunction loadSpotWebcam(spotId) {")

null_handling = """
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
"""

content = re.sub(r"  const spot = SPOTS\.find.*?const surfersToggleText = document\.getElementById\('spotlight-surfers-toggle-text'\);", 
                 null_handling + "\n  const surfersToggleText = document.getElementById('spotlight-surfers-toggle-text');", 
                 content, flags=re.DOTALL)


hls_logic = """
        if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
          videoPlayer.src = cam.streamUrl;
          videoPlayer.muted = true;
          videoPlayer.playsInline = true;
          videoPlayer.setAttribute('playsinline', '');
          videoPlayer.setAttribute('webkit-playsinline', '');
          videoPlayer.autoplay = true;
          
          let hlsTimeout = setTimeout(() => {
            onError();
          }, 12000);

          const onLoadedMetadata = () => {
            clearTimeout(hlsTimeout);
            if (loader) loader.classList.add('hidden');
            if (liveLabel) liveLabel.textContent = 'EN DIRECTO';
            videoPlayer.play().catch(() => {});
            videoPlayer.removeEventListener('loadedmetadata', onLoadedMetadata);
          };
          videoPlayer.addEventListener('loadedmetadata', onLoadedMetadata);

          const onError = () => {
            clearTimeout(hlsTimeout);
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
          videoPlayer.addEventListener('error', onError);
          videoPlayer.addEventListener('stalled', onError);
          videoPlayer.onerror = onError;

        }
"""

content = re.sub(r"        // iOS Safari: soporta HLS nativo.*?} else if", hls_logic.strip() + " else if", content, flags=re.DOTALL)

open('app.js', 'w', encoding='utf-8').write(content)
print("Updated app.js with logic.")
