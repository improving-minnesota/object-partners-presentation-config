import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default [
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    __dirname
  ),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'polyfills']
  }),
  new HtmlWebpackPlugin({
    template: './src/public/index.pug',
    chunksSortMode: 'dependency'
  })
];
