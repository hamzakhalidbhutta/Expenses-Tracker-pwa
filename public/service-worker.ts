export const ServiceWorker = () => {
  const cacheName = "ExpenseTrackerPWA-v1";
  const urlsToCache = [
    "https://expensetracker-pwa-hkbenvision.netlify.app/logo192.png",
    "https://expensetracker-pwa-hkbenvision.netlify.app/manifest.json",
    "https://expensetracker-pwa-hkbenvision.netlify.app/static/css/main.03726f18.css",
    "https://expensetracker-pwa-hkbenvision.netlify.app/static/js/main.94ced5bc.js",
    "https://expensetracker-pwa-hkbenvision.netlify.app/",
    "/favicon.ico",
    "index.html",
    "/",
  ];

  // Install Service Worker
  window.addEventListener("install", (event: any) => {
    event.waitUntil(
      caches.open(cacheName).then((cache) => {
        cache.addAll(urlsToCache);
      })
    );
  });

  window.addEventListener("fetch", (event: any) => {
    if (!navigator.onLine) {
      event.respondWith(
        caches.match(event.request).then((result) => {
          if (result) {
            return result;
          }
          let requestUrl = event.request.clone();
          fetch(requestUrl);
        })
      );
    }
  });
};
ServiceWorker();
