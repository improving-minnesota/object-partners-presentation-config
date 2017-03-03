'use strict';

var path = require('path');

module.exports = function output(_ref) {
  var dirname = _ref.dirname;

  return {
    filename: '[name].js',
    path: path.join(dirname, 'dist'),
    publicPath: './'
  };
};