'use strict';

var flatten = require('lodash.flatten');

module.exports = function assignArray(base) {
  for (var _len = arguments.length, additional = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    additional[_key - 1] = arguments[_key];
  }

  if (additional.length > 0 && additional[additional.length - 1] === true) {
    return [].concat(flatten(additional.slice(0, -1)));
  }
  return [].concat(base || []).concat(flatten(additional));
};