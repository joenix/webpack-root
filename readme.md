# Webpack Root

``` javascript

const webpackRoot = require('webpack-root')

const root = new webpackRoot( __dirname )

console.log( root ); // example path to project

```

### OR

``` javascript

const root = require('webpack-root')( __dirname )

console.log( root ); // example path to project

```

## Node Modules Path

``` javascript

const node_modules = require('webpack-root')()

console.log( node_modules ); // path to node_modules

```
