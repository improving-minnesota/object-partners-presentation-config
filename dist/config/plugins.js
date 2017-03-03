'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function plugins(_ref) {
  var dirname = _ref.dirname;

  return [new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, dirname), new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'polyfills']
  }), new HtmlWebpackPlugin({
    template: './src/public/index.pug',
    chunksSortMode: 'dependency'
  })];
};