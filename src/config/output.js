const path = require('path');

module.exports = function output({ dirname }) {
  return {
    filename: '[name].js',
    path: path.join(dirname, 'dist'),
    publicPath: './'
  };
};
