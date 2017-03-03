'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var production = _ref.production;

  return new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !production
  });
};