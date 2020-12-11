<p align="center"><img src="https://cdn.glitch.com/9d392eb2-e56d-4c4b-9cac-ad56f7192984%2Fvscodepwa.png?v=1579375982686" height="100"/></p>

Build Progressive Web Apps in VS Code on the go and like a pro. We have [Workbox Support](https://developers.google.com/web/tools/workbox/) fully stacked too.

### About [pwafire.org](https://pwafire.org)

Our mission is to make your **webdev** environment fully stacked up for best web development practices with Progressive Web Apps.

We have an Official Developer Guide [published here](https://pwafire.org/developer/docs/how-to-use-vscode-pwa-in-vscode/) and updated with latest update for this Extension.

### Setting up the PWA Development Environment

We have a **pwadev tips** [repo available here](https://github.com/mayeedwin/pwadev-tips) to help guide you if you're just starting up or want to have your setup checklist done right.

### Setting up the App Manifest and registering the Service Worker

Write the **Service Worker** and **App Manifest** really quick and like a pro!

| Command                     | Purpose and where to type                                     |
| --------------------------- | ------------------------------------------------------------- |
| `register.service.worker`   | register service worker in your landing page say `index.html` |
| `add.web.manifest` | link `app.webmanifest` to your pages in the `head tag`        |
| `theme.color`               | add theme color in your pages head tag                        |
| `app.manifest`                  | add manifest meta data in your empty `app.webmanifest` file   |

### Simple basic Service Worker

| Command                | Purpose and where to type                            |
| ---------------------- | ---------------------------------------------------- |
| `basic.service.worker` | create simple service worker for simple static sites |

### Commands to type in your editor for Workbox CDN

| Command                     | Purpose and where to type                                                                                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `workbox.cdn`                 | import workbox in your service worker                                                                                                                                                                                 ||
| `workbox.assets`                       | make your JS and CSS ⚡ fast by returning the assets from the cache, while making sure they are updated in the background for the next use in your workbox `service-worker.js` file                                    |
| `workbox.images`                       | serve images quickly from the cache, while making sure you don’t cache them indefinitely, consuming your users' storage in your workbox `service-worker.js` file                                                       |
| `workbox.external`              | cache external resources from external orgins for example boostrap css, fonts                                                                                                                                                 |
| `workbox.registerRoute`   | determine whether the request being worked on matches your criteria, and if so, apply a caching strategy to it |
| `workbox.debug`                 | workbox set config for debug or production builds                                                                                          | `workbox.registerRoute`   | determine whether the request being worked on matches your criteria, and if so, apply a caching strategy to it |                                                                            |
| `workbox.window`                     | add workbox window in your landing page for faster new service worker installs and refresh                                                                                                                             | 

                                                                                                         

### Setting up Workbox pre-cache

| Command                       | Purpose and where to type                                                   |
| ----------------------------- | --------------------------------------------------------------------------- |
| `workbox.precache`            | workbox precache config code snippet in your say `sw-config.js` file        |

### Commands to type in your editor for Workbox packages, using a bundler

**Excerpt :** When using a bundler to create your service worker, you install the Workbox packages you want to use from **npm**, and
then you use import statements to directly reference the Workbox modules you want to use.

Read more [here](https://developers.google.com/web/tools/workbox/guides/using-bundlers)

| Command                            | Purpose and where to type                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `workbox.packages`       | import all workbox npm modules in your custom workbox service worker config` file                       |
| `workbox.registerRoute`   | determine whether the request being worked on matches your criteria, and if so, apply a caching strategy to it |
| `workbox.analytics` | add offline google analytics in your workbox `service-worker.js` file, at the bottom.         |

### Advanced Progressive Web Apps Features

**Workbox** is a set of libraries to help you write and manage service workers and caching with the CacheStorage API.

Get started : [how to use Workbox here](https://developers.google.com/web/tools/workbox/guides/get-started)

### Requirements

```bash
   "vscode": "^1.8.0"
```

### Installation

[Install vscode-pwa](https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa). It's available in Visual Studio Marketplace! OR

Launch VS Code Quick Open ( Ctrl + P ), paste the following command and press enter.

```sh
   ext install mayeedwin.vscode-pwa
```

### Demo with PWA VS Code in play (With the old version)

Load [preview in your browser here](.github/images/vscode-pwa-vid.gif)

### Known Issues

All good to go with ^ v0.5-beta!

### Release Notes

> This beta version allows you to import Workbox and use cache strategies like a pro already!

Latest release of vscode-pwa beta!

**Enjoy 😊 🐥** and thanks for checking it out. Let's connect on twitter [@mayeedwin1](https://twitter.com/mayeedwin1) : )
