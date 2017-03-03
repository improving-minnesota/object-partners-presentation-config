'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _assignArray = require('./assign-array');

var _assignArray2 = _interopRequireDefault(_assignArray);

var _assignObject = require('./assign-object');

var _assignObject2 = _interopRequireDefault(_assignObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduceConfig(baseConfig, extendConfig) {
  return Object.keys(extendConfig).reduce(function (newBaseConfig, key) {
    var value = extendConfig[key];
    if (typeof value === 'function') {
      newBaseConfig[key] = value(baseConfig[key] || {}, baseConfig);
    } else if (value.constructor === Array) {
      newBaseConfig[key] = (0, _assignArray2.default)(baseConfig[key], value);
    } else {
      newBaseConfig[key] = (0, _assignObject2.default)(baseConfig[key], value);
    }
    return newBaseConfig;
  }, baseConfig);
}

function getConfig(environment) {
  try {
    return require(`./webpack.config.${environment}`);
  } catch (e) {
    return {};
  }
}

/*
 * webpack throws error if unknown properties, so need to use CJS module
 */
module.exports = function getWebpackConfig() {
  var extendConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options.dirname = options.dirname || __dirname;
  return function webpackConfig() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var base = require('./webpack.config.base')(options);

    var extended = Object.keys(env).reduce(function (newBaseConfig, key) {
      return reduceConfig(newBaseConfig, getConfig(key));
    }, base);

    return reduceConfig(extended, extendConfig);
  };
};