export const ServiceWorker = () => {
  const cacheName = "ExpenseTrackerPWA-v1";
  const urlsToCache = [
    "https://hamzakhalidbhutta.netlify.app/static/css/main.f2042967.css",
    "https://hamzakhalidbhutta.netlify.app/static/js/main.75ede390.js",
    "https://hamzakhalidbhutta.netlify.app/static/media/background_image.2fce99ea98342bfbfa7d.jpg",
    "https://hamzakhalidbhutta.netlify.app/static/media/portfimage.1c530f0675865350c9dc.jpg",
    "https://hamzakhalidbhutta.netlify.app/static/media/webapp.0e8e242de831bfaa1c35.jpg",
    "https://hamzakhalidbhutta.netlify.app/static/media/webdesign.db2d5cd7735ec8b2dee4.jpg",
    "https://hamzakhalidbhutta.netlify.app/static/media/skills.e9f3a54ac220270c0c61.png",
    "https://hamzakhalidbhutta.netlify.app/static/media/expensestracker.64cb1ddc9463e971f8ae.png",
    "https://hamzakhalidbhutta.netlify.app/static/media/covid19tracker.0fedcc13a60e5bc5591f.PNG",
    "https://hamzakhalidbhutta.netlify.app/static/media/shoestore.0bb4ee9fec0a7a6707a2.PNG",
    "https://hamzakhalidbhutta.netlify.app/static/media/quiz.e74ef71495fd7e07001e.PNG",
    "https://hamzakhalidbhutta.netlify.app/static/media/tddreactjstimer.bbb8578fb4b2cb10b367.png",
    "https://hamzakhalidbhutta.netlify.app/static/media/holidaze.5d96e83ebfb8a88fa6d2.png",
    "https://hamzakhalidbhutta.netlify.app/static/media/hamails.bad8491a5b94ccdc5df0.PNG",
    "https://hamzakhalidbhutta.netlify.app/static/media/gameofthrones.e745baac78b31efa3ddc.PNG",
    "/static/media/tictactoe.69d9a4c1b1f5532bedc0.png",
    "/static/media/get.043611d2da4b6c5e2f46.png",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js",
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
