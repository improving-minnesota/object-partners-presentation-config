const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const getEnvironment = (env = {}) => {
  const keys = Object.keys(env);
  const map = {
    development: 'development',
    dev: 'development',
    test: 'test',
    production: 'production',
    prod: 'production'
  };

  for ( let i = 0; i < keys.length; i++ ) {
    if ( map[key] ) {
      return map[key];
    }
  }
  return map.production;
};

module.exports = function plugins({ dirname }, env, ExtractTextPlugin) {
  return [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      dirname
    ),
    ExtractTextPlugin,
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirname, 'src/public/index.pug'),
      chunksSortMode: 'dependency'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': getEnvironment(env)
    })
  ];
}
