'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolve;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolve(_ref) {
  var dirname = _ref.dirname;

  return {
    alias: {
      public: _path2.default.join(dirname, 'src/public')
    },
    extensions: ['.', '.ts', '.js', '.json']
  };
}
module.exports = exports['default'];