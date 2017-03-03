const path = require('path');

module.exports = function module({ dirname }) {
  return {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [path.join(dirname, 'node_modules')]
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        include: [path.join(dirname, 'src')]
      },
      {
        test: /\.(eot|woff|ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.md|markdown$/,
        use: ['markdown-loader']
      },
      {
        test: /\.pug|jade$/,
        use: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: ['url-loader']
      }
    ]
  };
};
