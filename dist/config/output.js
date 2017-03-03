'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = output;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function output(_ref) {
  var dirname = _ref.dirname;

  return {
    filename: '[name].js',
    path: _path2.default.join(dirname, 'dist'),
    publicPath: './'
  };
}
module.exports = exports['default'];