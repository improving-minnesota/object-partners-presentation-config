'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assignObject;

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assignObject(base) {
  for (var _len = arguments.length, extendObjects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extendObjects[_key - 1] = arguments[_key];
  }

  if (extendObjects.length > 1 && extendObjects[extendObjects.length - 1] === true) {
    return _deepAssign2.default.apply(undefined, [{}].concat(extendObjects));
  }
  return _deepAssign2.default.apply(undefined, [base].concat(extendObjects));
}
module.exports = exports['default'];