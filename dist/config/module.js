'use strict';

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function module(_ref, _ref2) {
  var dirname = _ref.dirname;
  var production = _ref2.production;

  var extractStyle = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !production
  });
  var postCssLoader = {
    loader: 'postcss-loader',
    options: require(path.join(__dirname, '../config-files/postcss.config'))
  };
  return {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: path.join(__dirname, '../tsconfig.json')
        }
      }, 'angular2-template-loader']
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }, {
      test: /\.css$/,
      loader: extractStyle.extract({
        use: ['css-loader'],
        fallback: 'style-loader'
      }),
      include: [path.join(dirname, 'node_modules')]
    }, {
      test: /\.css$/,
      loader: extractStyle.extract({
        use: ['raw-loader', 'css-loader?importLoaders=1', postCssLoader]
      }),
      include: [path.join(dirname, 'src')]
    }, {
      test: /\.scss$/,
      loader: extractStyle.extract({
        use: ['raw-loader', 'css-loader?importLoaders=1', postCssLoader, 'sass-loader']
      }),
      include: [path.join(dirname, 'src')]
    }, {
      test: /\.(eot|woff|ttf)$/,
      use: ['file-loader']
    }, {
      test: /\.md|markdown$/,
      use: ['markdown-loader']
    }, {
      test: /\.pug|jade$/,
      use: ['html-loader', 'pug-html-loader']
    }, {
      test: /\.(jpe?g|png|gif|svg|mp4)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  };
};