# opi-presentation-config

Exports a webpack config (and a custom `Reveal.js` style) that can be used to get a head-start on the next sweet OPi presentation.

__Note: this is an *alpha* project, so isn't quite ready for primetime (yet...)__

## Usage

### With Webpack

1. `npm install DSchau/presentation-webpack-config --save-dev`
1. Add a `webpack.config.js` in the root directory
1. Edit as below:

```javascript
const getWebpackConfig = require('webpack-config');

const configFn = getWebpackConfig({}, {
  dirname: __dirname
});

module.exports = configFn;
```

This will export a webpack config containing all the necessary loaders (e.g. `css`, `pug`, `typescript`, etc.), so that you can get up and running as quick as possible.

### Reveal.js style

(Presumes webpack)

```javascript
// other Reveal.js imports
import 'webpack-config/dist/style/slide-deck.css';
```
