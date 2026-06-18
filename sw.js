const CACHE_NAME = 'paranoia-game-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/index-BLvDZ-1k.css',
  '/images/a20266eab_logo.png'
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve Cached Content when Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
