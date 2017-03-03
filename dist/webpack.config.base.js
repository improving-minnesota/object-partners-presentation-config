'use strict';

var path = require('path');

module.exports = function baseConfig() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

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
      extendedConfig[key] = config[key].apply(config, args);
    }
    return extendedConfig;
  }, config);
};