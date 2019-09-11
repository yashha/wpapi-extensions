# WP-API Extensions
[![npm (scoped with tag)](https://img.shields.io/npm/v/wpapi-extensions.svg?style=flat-square)](https://www.npmjs.com/package/wp-nuxt)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://opensource.org/licenses/MIT)

This package extends [WP-API](https://github.com/WP-API/node-wpapi) to add features like menu and custom post types.
You need to install the [WUXT Headless WordPress API Extensions](https://wordpress.org/plugins/wuxt-headless-wp-api-extensions/) extension on your wordpress server.

Installation
------------

WP-API Extensions are available via [yarn] and [npm].

    $ yarn add wpapi-extensions
    $ npm install --save wpapi-extensions

[yarn]: https://yarn.pm/wpapi-extensions
[npm]: https://www.npmjs.org/package/wpapi-extensions

Notice: This package depends on [WP-API](https://github.com/WP-API/node-wpapi).

    $ yarn add wpapi
    $ npm install --save wpapi

Usage
------------

```js
import WPAPI from 'wpapi';
import { registerWuxt } from 'wpapi-extensions';

const wp = new WPAPI({/* options */});
registerWuxt(wp);
```