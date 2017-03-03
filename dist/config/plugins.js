'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var getEnvironment = function getEnvironment() {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var keys = Object.keys(env);
  var map = {
    development: 'development',
    dev: 'development',
    test: 'test',
    production: 'production',
    prod: 'production'
  };

  for (var i = 0; i < keys.length; i++) {
    if (map[key]) {
      return map[key];
    }
  }
  return map.production;
};

module.exports = function plugins(_ref, env, ExtractTextPlugin) {
  var dirname = _ref.dirname;

  return [new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, dirname), ExtractTextPlugin, new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'polyfills']
  }), new HtmlWebpackPlugin({
    template: path.join(dirname, 'src/public/index.pug'),
    chunksSortMode: 'dependency'
  }), new webpack.DefinePlugin({
    'process.env.NODE_ENV': getEnvironment(env)
  })];
};