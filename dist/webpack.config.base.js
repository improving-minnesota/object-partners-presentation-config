'use strict';

var path = require('path');

module.exports = function baseConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var configDir = path.join(__dirname, 'config');
  var config = {
    entry: require(path.join(configDir, 'entry')),
    output: require(path.join(configDir, 'output')),
    resolve: require(path.join(configDir, 'resolve')),
    module: require(path.join(configDir, 'module')),
    plugins: require(path.join(configDir, 'plugins'))
  };
  return Object.keys(config).reduce(function (extendedConfig, key) {
    if (typeof config[key] === 'function') {
      extendedConfig[key] = config[key](options);
    }
    return extendedConfig;
  }, config);
};