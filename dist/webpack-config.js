'use strict';

var path = require('path');
var assign = require('deep-assign');

var assignArray = require('./assign-array');
var assignObject = require('./assign-object');

function reduceConfig(baseConfig, extendConfig) {
  return Object.keys(extendConfig).reduce(function (newBaseConfig, key) {
    var value = extendConfig[key];
    if (typeof value === 'function') {
      newBaseConfig[key] = value(baseConfig[key] || {}, baseConfig);
    } else if (value.constructor === Array) {
      newBaseConfig[key] = assignArray(baseConfig[key], value);
    } else if (typeof value === 'string') {
      newBaseConfig[key] = value;
    } else {
      newBaseConfig[key] = assignObject(baseConfig[key], value);
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

    var base = require('./webpack.config.base')(options, env);

    var extended = Object.keys(env).reduce(function (newBaseConfig, key) {
      return reduceConfig(newBaseConfig, getConfig(key));
    }, base);
    var customConfig = typeof extendConfig === 'function' ? extendConfig(env, extended) : extendConfig;

    return reduceConfig(extended, customConfig);
  };
};