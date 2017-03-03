'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var path = require('path');

module.exports = function baseConfig() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var configDir = path.join(__dirname, 'config');
  var ExtractText = path.join(configDir, 'extract-text-plugin').apply(undefined, args);
  var config = {
    entry: require(path.join(configDir, 'entry')),
    output: require(path.join(configDir, 'output')),
    resolve: require(path.join(configDir, 'resolve')),
    module: require(path.join(configDir, 'module')),
    plugins: require(path.join(configDir, 'plugins'))
  };
  return Object.keys(config).reduce(function (extendedConfig, key) {
    if (typeof config[key] === 'function') {
      extendedConfig[key] = config[key].apply(config, _toConsumableArray(args.concat(ExtractText)));
    }
    return extendedConfig;
  }, config);
};