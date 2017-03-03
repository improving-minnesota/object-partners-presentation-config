const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function plugins({ dirname }) {
  return [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      dirname
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirname, 'src/public/index.pug'),
      chunksSortMode: 'dependency'
    })
  ];
}
