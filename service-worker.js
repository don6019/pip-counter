// Updated service worker file for GitHub Pages subdirectory deployment
const CACHE_NAME = 'pip-counter-cache-v1';
const URLS_TO_CACHE = [
    '/pip-counter/',
    '/pip-counter/index.html',
    '/pip-counter/style.css',
    '/pip-counter/script.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});