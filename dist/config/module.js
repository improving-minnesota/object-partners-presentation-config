'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  rules: [{
    test: /\.ts$/,
    use: ['awesome-typescript-loader', 'angular2-template-loader']
  }, {
    test: /\.html$/,
    use: ['html-loader']
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: [_path2.default.join(__dirname, 'node_modules')]
  }, {
    test: /\.css$/,
    use: ['to-string-loader', 'css-loader'],
    include: [_path2.default.join(__dirname, 'src')]
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
module.exports = exports['default'];