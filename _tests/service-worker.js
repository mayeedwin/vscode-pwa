import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { Plugin as ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import * as googleAnalytics from 'workbox-google-analytics';

workbox.setConfig({
debug:true
});

registerRoute(
 // cache all images in './images/' directory
 new RegExp('/images/'),
 // use cache-first workbox strategy
 new CacheFirst({
   cacheName: 'image-cache',
   plugins: [
	  new ExpirationPlugin({
		 maxEntries: 20,
	  }),
   ],
 })
);

googleAnalytics.initialize();