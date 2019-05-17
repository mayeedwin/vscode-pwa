<p align="center"><img src="https://github.com/mayeedwin/vscode-pwa/blob/master/.vscode-pwa/icons/vscodepwa.png?raw=true" height="50"/></p>

Build Progressive Web Apps in VS Code on the go and like a pro 👊. We have [Workbox Support](https://developers.google.com/web/tools/workbox/) ✅ fully stacked too.

### About [pwafire.org](https://pwafire.org)

Our mission is to make your developer environment as a **webdev** fully stacked up for best web development practices with Progressive Web Apps. Read more [on this devdoc by pwafire.org](https://pwafire.org/developer/docs/how-to-use-vscode-pwa-in-vscode/)

### Setting up the PWA Development Environment 

We have a **pwadev tips** [repo available here](https://github.com/mayeedwin/pwadev-tips) to help guide you if you're just starting up or want to have your setup checklist done right ✅.
### Commands to type in your editor

Write the **Service Worker** and **App Manifest** really quick and like a pro!

| Command | Purpose and where to type |
| --- | --- |
| `register service worker` | register service worker in your landing page say `index.html` |
| `add web manifest to pages` | link app.webmanifest to your pages in the `head tag` |
| `theme color` | add theme color in your pages head tag |
| `basic service worker` | create simple service worker for simple static sites |
| `precache for npm` | workbox precache config code snippet in your say `sw-config.js` file |
| `workbox-cli devDependencies` | adding workbox cli de dependancies in your `package.json file` |
| `workbox injectManifest` | add precache versioned urls config in your workbox `service-worker.js` file |
| `import workbox` | import workbox in your service worker |
| `workbox.strategies` | add cache strategies in your service worker |
| `cache assets` | make your JS and CSS ⚡ fast by returning the assets from the cache, while making sure they are updated in the background for the next use in your workbox `service-worker.js` file |
| `cache images` |  serve images quickly from the cache, while making sure you don’t cache them indefinitely, consuming your users' storage in your workbox `service-worker.js` file |
| `workbox set config` | workbox set config for debug or production builds |
| `workbox window` | add workbox window in your landing page for faster new service worker installs and refresh |
| `workbox page reload` | offer a page reload for users |
| `workbox.cacheableResponse` | cache based on numeric status code, the presence of a header with a specific value, or a combination of the two; [learn more here](https://developers.google.com/web/tools/workbox/modules/workbox-cacheable-response) |
| `manifest` | add manifest meta data in your empty `app.webmanifest` file |
| `native app install` | add custom native app install banner prompt support in your app manifest |

### Advanced Progressive Web Apps Features

 - Add Background Sync - To your javascript source folder, create an empty **sync.js** file and type the following
 keyword in it to add [backgroud sync](https://pwafire.org/developer/docs/background-sync/)

 ```javascript
    background sync
 ```

### Requirements

```bash
   "vscode": "^1.28.0"
```

### Installation

[Install vscode-pwa](https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa). It's available in Visual Studio Marketplace! OR

Launch VS Code Quick Open ( Ctrl + P ), paste the following command and press enter.

```sh
   ext install mayeedwin.vscode-pwa
```

### Demo with PWA VS Code in play

Load [preview in your browser here](.vscode-pwa/vscode-pwa-vid.gif)

### Known Issues

All good to go with beta!

### Release Notes

> This beta version allows you to import Workbox and use cache strategies like a pro already! Next add; 
   
    - push notification

    - custom install button

    - custom share button

Initial release of vscode-pwa beta!

**Enjoy 😊 🐥** and thanks for checking it out. Let's connect on twitter [@mayeedwin1](https://twitter.com/mayeedwin1) : )
