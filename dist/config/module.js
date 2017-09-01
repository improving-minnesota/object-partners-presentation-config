'use strict';

var path = require('path');

module.exports = function module(_ref, _ref2, ExtractTextPlugin) {
  var dirname = _ref.dirname;
  var production = _ref2.production;

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
          configFileName: path.join(__dirname, '../config-files/tsconfig.json')
        }
      }, 'angular2-template-loader']
    }, {
      test: /\.tsx/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: path.join(__dirname, '../config-files/tsconfig.json')
        }
      }]
    }, {
      test: /reveal\.js\/plugin\/.*\.(js|html)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }],
      include: [path.join(dirname, 'node_modules')]
    }, {
      test: /\.html$/,
      include: [path.join(dirname, 'src')],
      use: ['html-loader']
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: ['css-loader'],
        fallback: 'style-loader'
      }),
      include: [path.join(dirname, 'node_modules')]
    }, {
      test: /\.css$/,
      use: ['to-string-loader', 'css-loader?importLoaders=1', postCssLoader],
      include: [path.join(dirname, 'src')]
    }, {
      test: /\.scss$/,
      use: ['to-string-loader', 'css-loader?importLoaders=1', postCssLoader, 'sass-loader'],
      include: [path.join(dirname, 'src')]
    }, {
      test: /\.(eot|woff|ttf)$/,
      use: ['file-loader']
    }, {
      test: /\.md|markdown$/,
      use: ['html-loader', {
        loader: 'markdown-loader',
        options: {
          highlight(code) {
            return require('highlight.js').highlightAuto(code).value;
          },
          sanitize: false
        }
      }]
    }, {
      test: /\.pug|jade$/,
      use: ['html-loader', 'pug-html-loader']
    }, {
      test: /\.(jpe?g|png|gif|svg|mp4)$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  };
};