import re

content = open('app.js', 'r', encoding='utf-8').read()

hls_logic = """
        // iOS Safari: soporta HLS nativo
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

        } else if"""

content = re.sub(r"        // iOS Safari: soporta HLS nativo.*?\} else if", hls_logic, content, flags=re.DOTALL)

open('app.js', 'w', encoding='utf-8').write(content)
print("Updated HLS logic.")
