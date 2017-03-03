'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  alias: {
    public: _path2.default.join(__dirname, 'src/public')
  },
  extensions: ['.', '.ts', '.js', '.json']
};
module.exports = exports['default'];