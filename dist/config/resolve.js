'use strict';

var path = require('path');

module.exports = function resolve(_ref) {
  var dirname = _ref.dirname;

  return {
    alias: {
      public: path.join(dirname, 'src/public')
    },
    extensions: ['.', '.ts', '.tsx', '.js', '.json']
  };
};