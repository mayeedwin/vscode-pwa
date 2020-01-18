<p align="center"><img src="https://cdn.glitch.com/9d392eb2-e56d-4c4b-9cac-ad56f7192984%2Fvscodepwa.png?v=1579375982686" height="100"/></p>

Build Progressive Web Apps in VS Code on the go and like a pro. We have [Workbox Support](https://developers.google.com/web/tools/workbox/) fully stacked too.

### About [pwafire.org](https://pwafire.org)

Our mission is to make your **webdev** environment fully stacked up for best web development practices with Progressive Web Apps.

We have an Official Developer Guide [published here](https://pwafire.org/developer/docs/how-to-use-vscode-pwa-in-vscode/) and updated with latest update for this Extension.

### Setting up the PWA Development Environment

We have a **pwadev tips** [repo available here](https://github.com/mayeedwin/pwadev-tips) to help guide you if you're just starting up or want to have your setup checklist done right.

### Commands to type in your editor

Write the **Service Worker** and **App Manifest** really quick and like a pro!

| Command                       | Purpose and where to type                                                                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `register service worker`     | register service worker in your landing page say `index.html`                                                                                                                                                          |
| `add web manifest to pages`   | link `app.webmanifest` to your pages in the `head tag`                                                                                                                                                                 |
| `theme color`                 | add theme color in your pages head tag                                                                                                                                                                                 |
| `basic service worker`        | create simple service worker for simple static sites                                                                                                                                                                   |
| `precache for npm`            | workbox precache config code snippet in your say `sw-config.js` file                                                                                                                                                   |
| `workbox-cli devDependencies` | adding workbox cli de dependancies in your `package.json` file                                                                                                                                                         |
| `workbox injectManifest`      | add precache versioned urls config in your workbox `service-worker.js` file                                                                                                                                            |
| `import workbox`              | import workbox in your service worker                                                                                                                                                                                  |
| `workbox.strategies`          | add cache strategies in your service worker                                                                                                                                                                            |
| `cache assets`                | make your JS and CSS ⚡ fast by returning the assets from the cache, while making sure they are updated in the background for the next use in your workbox `service-worker.js` file                                    |
| `cache images`                | serve images quickly from the cache, while making sure you don’t cache them indefinitely, consuming your users' storage in your workbox `service-worker.js` file                                                       |
| `cache fonts`                 | rely on google fonts or other fonts being available offline after the user has visited your site                                                                                                                       |
| `cache external orgins`       | cache external resources from external orgins for example boostrap css                                                                                                                                                 |
| `workbox set config`          | workbox set config for debug or production builds                                                                                                                                                                      |
| `workbox window`              | add workbox window in your landing page for faster new service worker installs and refresh                                                                                                                             |
| `workbox page reload`         | offer a page reload for users                                                                                                                                                                                          |
| `workbox.cacheableResponse`   | cache based on numeric status code, the presence of a header with a specific value, or a combination of the two; [learn more here](https://developers.google.com/web/tools/workbox/modules/workbox-cacheable-response) |
| `manifest`                    | add manifest meta data in your empty `app.webmanifest` file                                                                                                                                                            |
| `native app install`          | add custom native app install banner prompt support in your app manifest                                                                                                                                               |

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

Load [preview in your browser here](.github/images/vscode-pwa-vid.gif)

### Known Issues

All good to go with beta!

### Release Notes

> This beta version allows you to import Workbox and use cache strategies like a pro already! 

Latest release of vscode-pwa beta!

**Enjoy 😊 🐥** and thanks for checking it out. Let's connect on twitter [@mayeedwin1](https://twitter.com/mayeedwin1) : )
