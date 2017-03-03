'use strict';

var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [new webpack.NamedModulesPlugin()]
};