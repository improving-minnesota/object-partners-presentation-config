'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var webpack = require('webpack');

exports.default = {
  plugins(base) {
    return base.concat([new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      sourceMap: true
    })]);
  }
};
module.exports = exports['default'];