const flatten = require('lodash.flatten');

module.exports = function assignArray(base, ...additional) {
  if ( additional.length > 0 && additional[additional.length - 1] === true ) {
    return []
      .concat(flatten(additional.slice(0, -1)));
  }
  return []
    .concat(base || [])
    .concat(flatten(additional));
}
