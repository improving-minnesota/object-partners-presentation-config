'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      production = _ref.production;

  return new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !production
  });
};