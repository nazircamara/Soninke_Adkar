const CACHE_VERSION = 'v1';
const CACHE_NAME = `athkar-offline-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  '.',
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'icon.png',
  'icons/icon-48.webp',
  'icons/icon-72.webp',
  'icons/icon-96.webp',
  'icons/icon-128.webp',
  'icons/icon-192.webp',
  'icons/icon-256.webp',
  'icons/icon-512.webp',
  'audios/evening_1.mp3',
  'audios/evening_10.m4a',
  'audios/evening_11.m4a',
  'audios/evening_12.mp3',
  'audios/evening_13.m4a',
  'audios/evening_14.m4a',
  'audios/evening_15.mp3',
  'audios/evening_16.mp3',
  'audios/evening_17.mp3',
  'audios/evening_18.mp3',
  'audios/evening_19.mp3',
  'audios/evening_2.mp3',
  'audios/evening_20.m4a',
  'audios/evening_21.mp3',
  'audios/evening_22.mp3',
  'audios/evening_23.mp3',
  'audios/evening_24.mp3',
  'audios/evening_25.mp3',
  'audios/evening_26.mp3',
  'audios/evening_27.mp3',
  'audios/evening_28.mp3',
  'audios/evening_29.mp3',
  'audios/evening_3.mp3',
  'audios/evening_30.mp3',
  'audios/evening_31.mp3',
  'audios/evening_4.mp3',
  'audios/evening_5.mp3',
  'audios/evening_6.mp3',
  'audios/evening_7.mp3',
  'audios/evening_8.mp3',
  'audios/evening_9.m4a',
  'audios/evening_intro_ar.mp3',
  'audios/evening_intro_en.mp3',
  'audios/evening_intro_fr.mp3',
  'audios/morning_1.mp3',
  'audios/morning_10.mp3',
  'audios/morning_11.mp3',
  'audios/morning_12.mp3',
  'audios/morning_13.mp3',
  'audios/morning_14.mp3',
  'audios/morning_15.mp3',
  'audios/morning_16.mp3',
  'audios/morning_17.mp3',
  'audios/morning_18.mp3',
  'audios/morning_19.mp3',
  'audios/morning_2.mp3',
  'audios/morning_20.mp3',
  'audios/morning_21.mp3',
  'audios/morning_22.mp3',
  'audios/morning_23.mp3',
  'audios/morning_24.mp3',
  'audios/morning_25.mp3',
  'audios/morning_26.mp3',
  'audios/morning_27.mp3',
  'audios/morning_28.mp3',
  'audios/morning_29.mp3',
  'audios/morning_3.mp3',
  'audios/morning_30.mp3',
  'audios/morning_31.mp3',
  'audios/morning_4.mp3',
  'audios/morning_5.mp3',
  'audios/morning_6.mp3',
  'audios/morning_7.mp3',
  'audios/morning_8.mp3',
  'audios/morning_9.mp3',
  'audios/morning_intro_ar.mp3',
  'audios/morning_intro_en.mp3',
  'audios/morning_intro_fr.mp3',
  'audios/prayer_.7.mp3',
  'audios/prayer_001.mp3',
  'audios/prayer_002.mp3',
  'audios/prayer_003.mp3',
  'audios/prayer_1.mp3',
  'audios/prayer_10.mp3',
  'audios/prayer_11.mp3',
  'audios/prayer_12.mp3',
  'audios/prayer_13.mp3',
  'audios/prayer_2.mp3',
  'audios/prayer_3.mp3',
  'audios/prayer_4.mp3',
  'audios/prayer_5.mp3',
  'audios/prayer_6.mp3',
  'audios/prayer_7.m4a',
  'audios/prayer_7.mp3',
  'audios/prayer_8.mp3',
  'audios/prayer_9.mp3',
  'audios/prayer_intro_ar.mp3',
  'audios/prayer_intro_en.mp3',
  'audios/prayer_intro_fr.mp3',
  'audios/sleep_10.mp3',
  'audios/sleep_11.mp3',
  'audios/sleep_6.mp3',
  'audios/sleep_7.mp3',
  'audios/sleep_8.mp3',
  'audios/sleep_9.mp3',
  'audios/sleep_intro_ar.mp3',
  'audios/sleep_intro_en.mp3',
  'audios/sleep_intro_fr.mp3',
  'audios2/evening_intro_ar.mp3',
  'audios2/morning_intro_ar.mp3',
  'audios2/prayer_1.mp3',
  'audios2/prayer_intro_fr.mp3',
  'audios2/recitation_301.mp3',
  'audios2/recitation_302.mp3',
  'audios2/recitation_303.mp3',
  'audios2/recitation_304.mp3',
  'audios2/recitation_305.mp3',
  'audios2/recitation_306.mp3',
  'audios2/recitation_307.mp3',
  'audios2/recitation_308.mp3',
  'audios2/recitation_309.mp3',
  'audios2/recitation_30_7.mp3',
  'audios2/recitation_310.mp3',
  'audios2/recitation_311.mp3',
  'audios2/recitation_313.mp3',
  'audios2/recitation_314.mp3',
  'audios2/recitation_31_10.mp3',
  'audios2/recitation_31_2.mp3',
  'audios2/recitation_31_3.mp3',
  'audios2/recitation_31_4.mp3',
  'audios2/recitation_31_5.mp3',
  'audios2/recitation_31_6.mp3',
  'audios2/recitation_31_7.mp3',
  'audios2/recitation_31_8.mp3',
  'audios2/recitation_31_9.mp3',
  'audios2/sleep_intro_ar.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

function isSameOrigin(requestUrl) {
  return requestUrl.origin === self.location.origin;
}

function buildRangeResponse(request, response) {
  const range = request.headers.get('range');
  if (!range || !response) return response;

  return response.arrayBuffer().then(buffer => {
    const size = buffer.byteLength;
    const bytesPrefix = 'bytes=';
    if (!range.startsWith(bytesPrefix)) return response;

    const rangeParts = range.substring(bytesPrefix.length).split('-');
    const start = Number(rangeParts[0]);
    const end = rangeParts[1] ? Number(rangeParts[1]) : size - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start >= size || end >= size) {
      return new Response(null, {
        status: 416,
        statusText: 'Range Not Satisfiable',
        headers: { 'Content-Range': `bytes */${size}` }
      });
    }

    const sliced = buffer.slice(start, end + 1);
    return new Response(sliced, {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Content-Length': String(sliced.byteLength),
        'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg'
      }
    });
  });
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (!isSameOrigin(requestUrl)) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        if (request.headers.get('range')) {
          return buildRangeResponse(request, cached);
        }
        return cached;
      }

      return fetch(request)
        .then(response => {
          if (!response || response.status !== 200) return response;
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match('index.html'));
    })
  );
});
