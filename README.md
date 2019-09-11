# WP-API Extensions
[![npm (scoped with tag)](https://img.shields.io/npm/v/wpapi-extensions.svg?style=flat-square)](https://www.npmjs.com/package/wp-nuxt)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://opensource.org/licenses/MIT)

This package extends [WP-API](https://github.com/WP-API/node-wpapi) (the best wordpress api wrapper for node) to add features like menu and custom post type request functions.
You need to install the [WUXT Headless WordPress API Extensions](https://wordpress.org/plugins/wuxt-headless-wp-api-extensions/) extension on your wordpress server.

Installation
------------

WP-API Extensions are available via [yarn] and [npm].

    $ yarn add wpapi-extensions
    $ npm install --save wpapi-extensions

[yarn]: https://yarn.pm/wpapi-extensions
[npm]: https://www.npmjs.org/package/wpapi-extensions

Notice: This package depends on [WP-API](https://github.com/WP-API/node-wpapi).

```js
import WPAPI from 'wpapi';
import { registerWuxt } from 'wpapi-extensions';

const wp = new WPAPI({/* options */});
registerWuxt(wp); // registers all functions
```
You can alse register the functions seperately:
```js
registerFrontPage(wp);
registerMenu(wp);
registerSlug(wp);
registerCpt(wp);
```

Usage
------------
```js
await wp.frontpage()
await wp.menu()
await wp.slug()
await wp.cpt('movies')
```

A good description on the functions is also [here](https://github.com/northosts/wuxt#extensions-to-the-api-endpoints)

Credits
------------
Credits to @danielauener for creating the inital implementation.