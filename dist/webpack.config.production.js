'use strict';

var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  plugins: [new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
  }), new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: true,
    sourceMap: true
  })]
};