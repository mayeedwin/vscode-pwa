importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);
if (workbox) {
  console.log("[ Hello ] from Maye of pwafire.org");
  const wkb = {
    ...workbox.core,
    ...workbox.routing,
    ...workbox.precaching,
    ...workbox.strategies,
    ...workbox.cacheableResponse,
    ...workbox.expiration,
  };
  const {
    clientsClaim,
    skipWaiting,
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
    CacheableResponsePlugin,
  } = wkb;

  /* Here is your workbox workspace.
          Remember to remove all unused modules. */

  skipWaiting();
  clientsClaim();
} else {
  console.log("Boo! Workbox failed to load 😬");
}
