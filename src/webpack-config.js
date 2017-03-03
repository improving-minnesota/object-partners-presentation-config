import path from 'path';
import assign from 'deep-assign';

import assignArray from './assign-array';
import assignObject from './assign-object';

function reduceConfig(baseConfig, extendConfig) {
  return Object.keys(extendConfig)
    .reduce((newBaseConfig, key) => {
      const value = extendConfig[key];
      if ( typeof value === 'function' ) {
        newBaseConfig[key] = value(baseConfig[key] || {}, baseConfig);
      } else if ( value.constructor === Array ) {
        newBaseConfig[key] = assignArray(baseConfig[key], value);
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

export default function getWebpackConfig(extendConfig = {}, options = {}) {
  options.dirname = options.dirname || __dirname;
  return function webpackConfig(env = {}) {
    const base = require('./webpack.config.base')(options);

    const extended = Object.keys(env)
      .reduce((newBaseConfig, key) => {
        return reduceConfig(newBaseConfig, getConfig(key));
      }, base);

    return reduceConfig(extended, extendConfig);
  };
};
