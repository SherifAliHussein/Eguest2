const cacheName = 'E-Catalog-v1.3.2';
const RUNTIME = 'runtime';

const files = [
  'bundle-en.css',
  'bundle-ar.css',
  'app.js',
  'core.js',
  'libs.js',
  'templates.js',
  'turn.min-en.js',
  'turn.min-ar.js',
  'assets/img/back.png',
  'assets/img/back-ar.png',
  'assets/img/book.png',
  'assets/img/book-ar.png',
  'assets/img/page1.png',
  'assets/img/page2.png',
  'assets/img/plus.png',
  'assets/img/view.png'
];

self.addEventListener('install', (event) => {
    console.info('Event: Install');

    event.waitUntil(
      caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(files)
        .then(() => {
          console.info('All files are cached');
          console.log(files);
          return self.skipWaiting(); 
        })
        .catch((error) =>  {
          console.error('Failed to cache', error);
          console.log(error);
        })
      })
    );
  });


  self.addEventListener('fetch', (event) => {
  console.info('Event: Fetch');

  var request = event.request;

  event.respondWith(
    caches.match(request).then((response) => {
      if (response && !navigator.onLine) {
        return response;
      }

      return fetch(request).then((response) => {
        var responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache).catch((err) => {
              console.warn(request.url + ': ' + err.message);
            });
          });

        return response;
      });
    })
  );
});


self.addEventListener('activate', (event) => {
  console.info('Event: Activate');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {     
            return caches.delete(cache); 
          }
        })
      );
    })
  );
});

self.addEventListener('message', (event) => {
  console.info('Event: message');

  event.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      return cache.add(event.data )
      .then(() => {
        console.info('All files are cached');
        return self.skipWaiting(); 
      })
      .catch((error) =>  {
        console.error('Failed to cache', error);
        console.log(error);
      })
    })
  );
});
