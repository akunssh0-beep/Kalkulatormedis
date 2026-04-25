// SW Build v2.0.1 - it.adi.p Automator
const CACHE_NAME = 'kalkulator_medis-v1777115261747';
const ASSETS = ["./","./index.html","./manifest.json"];

self.addEventListener('install', (event) => {
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((k) => k !== CACHE_NAME && caches.delete(k))
        ))
    );
    
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((res) => res || fetch(event.request)));
});
