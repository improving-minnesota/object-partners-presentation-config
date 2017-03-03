'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = function plugins(_ref, _ref2) {
  var dirname = _ref.dirname;
  var production = _ref2.production;

  return [new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, dirname), new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'polyfills']
  }), new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !production
  }), new HtmlWebpackPlugin({
    template: path.join(dirname, 'src/public/index.pug'),
    chunksSortMode: 'dependency'
  })];
};