 importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
 if (workbox) {
   console.log('[ Hello ] from Maye');
const wkb = {
  ...workbox.core,
  ...workbox.routing,
  ...workbox.precaching,
  ...workbox.strategies,
  ...workbox.cacheableResponse,
}
const {
  clientsClaim,
  cacheNames,
  setCacheNameDetails,
  setCatchHandler,
  NavigationRoute,
  registerRoute,
  precacheAndRoute,
  createHandlerBoundToURL,
   matchPrecache,
  NetworkFirst,
  NetworkOnly,
  CacheFirst,
  CacheOnly,
  StaleWhileRevalidate,
  CacheExpiration,
  ExpirationPlugin,
  CacheableResponsePlugin
  } = wkb;


	 /* here is your workbox
		  workspace */


   self.skipWaiting();
   clientsClaim();
 } else {
   console.log('Boo! Workbox failed to load 😬');
 }