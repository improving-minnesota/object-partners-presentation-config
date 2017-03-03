'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configDir = _path2.default.join(__dirname, 'config');

exports.default = {
  entry: require(_path2.default.join(configDir, 'entry')),
  output: require(_path2.default.join(configDir, 'output')),
  resolve: require(_path2.default.join(configDir, 'resolve')),
  module: require(_path2.default.join(configDir, 'module')),
  plugins: require(_path2.default.join(configDir, 'plugins'))
};
module.exports = exports['default'];