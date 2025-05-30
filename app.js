if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(() => {
      console.log('Service Worker registered');
    });
  });
}
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
messaging.requestPermission()
.then(() => messaging.getToken())
.then(token => {
  console.log("Push token:", token);
  // Send this token to your server
})
.catch(err => console.log("Permission denied", err));
