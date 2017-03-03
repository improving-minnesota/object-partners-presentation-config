'use strict';

var assign = require('deep-assign');

module.exports = function assignObject(base) {
  for (var _len = arguments.length, extendObjects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extendObjects[_key - 1] = arguments[_key];
  }

  if (extendObjects.length > 1 && extendObjects[extendObjects.length - 1] === true) {
    return assign.apply(undefined, [{}].concat(extendObjects));
  }
  return assign.apply(undefined, [base].concat(extendObjects));
};