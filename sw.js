const CACHE_NAME = 'ecommerce-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/products.html',
  '/cart.html',
  '/contact.html',
  '/styles.css',
  '/app.js',
  '/js/cart.js',
  '/images/shoe.jpg',
  '/images/headphones.jpg'
];

// Install and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate (clean old caches)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch assets
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "YOUR-API-KEY",
  projectId: "yourapp-id",
  messagingSenderId: "YOUR-SENDER-ID",
  appId: "YOUR-APP-ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/images/icon-192.png"
  });
});
