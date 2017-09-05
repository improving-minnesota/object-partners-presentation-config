# opi-presentation-config

Exports a webpack config that can be used to get a head-start on the next sweet OPi presentation.

## Usage

### With Webpack

1. `npm install @objectpartners/presentation-config --save-dev`
1. Add a `webpack.config.js` in the root directory
1. Edit as below:

```javascript
const getWebpackConfig = require('@objectpartners/presentation-config');

module.exports = getWebpackConfig({});
```

This will export a webpack config containing all the necessary loaders (e.g. `css`, `pug`, `typescript`, etc.), so that you can get up and running as quick as possible.
