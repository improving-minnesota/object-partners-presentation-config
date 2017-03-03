'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [new _webpack2.default.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname), new _webpack2.default.optimize.CommonsChunkPlugin({
  name: ['vendor', 'polyfills']
}), new _htmlWebpackPlugin2.default({
  template: './src/public/index.pug',
  chunksSortMode: 'dependency'
})];
module.exports = exports['default'];