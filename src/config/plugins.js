const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function plugins({ dirname }, { production }) {
  return [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      dirname
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: !production
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirname, 'src/public/index.pug'),
      chunksSortMode: 'dependency'
    })
  ];
}
