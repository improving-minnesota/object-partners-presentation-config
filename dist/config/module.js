'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _module(_ref) {
  var dirname = _ref.dirname;

  return {
    rules: [{
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader']
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: [_path2.default.join(dirname, 'node_modules')]
    }, {
      test: /\.css$/,
      use: ['to-string-loader', 'css-loader'],
      include: [_path2.default.join(dirname, 'src')]
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
      test: /\.(jpe?g|png|gif|svg)$/,
      use: ['url-loader']
    }]
  };
}exports.default = _module;
;
_module.exports = exports['default'];