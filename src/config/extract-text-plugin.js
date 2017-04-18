const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options = {}, { production } = {}) {
  return new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !production
  });
};
