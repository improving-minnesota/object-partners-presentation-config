'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assignArray;

var _lodash = require('lodash.flatten');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assignArray(base) {
  for (var _len = arguments.length, additional = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    additional[_key - 1] = arguments[_key];
  }

  if (additional.length > 0 && additional[additional.length - 1] === true) {
    return [].concat((0, _lodash2.default)(additional.slice(0, -1)));
  }
  return [].concat(base || []).concat((0, _lodash2.default)(additional));
}
module.exports = exports['default'];