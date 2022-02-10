
  const cacheName = "ExpenseTrackerPWA-v1";
  const urlsToCache = [
    "/logo192.png",
    "/manifest.json",
    "/static/css/main.03726f18.css",
    "/static/js/main.94ced5bc.js",
    "/static/js/bundle.js",
    "/favicon.ico",
    "index.html",
    "/",
  ];
  
  // Install Service Worker
  this.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(cacheName).then((cache) => {
        cache.addAll(urlsToCache);
      })
    );
  });
  
  this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
      event.respondWith(
        caches.match(event.request).then((result) => {
          if (result) {
            return result;
          }
          // let requestUrl = event.request.clone();
          // fetch(requestUrl);
        })
      );
    }
  });

