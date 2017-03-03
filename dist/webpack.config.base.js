'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = baseConfig;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function baseConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var configDir = _path2.default.join(__dirname, 'config');
  var config = {
    entry: require(_path2.default.join(configDir, 'entry')),
    output: require(_path2.default.join(configDir, 'output')),
    resolve: require(_path2.default.join(configDir, 'resolve')),
    module: require(_path2.default.join(configDir, 'module')),
    plugins: require(_path2.default.join(configDir, 'plugins'))
  };
  return Object.keys(config).reduce(function (extendedConfig, key) {
    if (typeof config[key] === 'function') {
      extendedConfig[key] = config[key](options);
    }
    return extendedConfig;
  }, config);
}
module.exports = exports['default'];