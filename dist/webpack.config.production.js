'use strict';

var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  output: {
    publicPath: './'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: true,
    sourceMap: true
  })]
};