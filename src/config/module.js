const path = require('path');

module.exports = function module({ dirname }, { production }, ExtractTextPlugin) {
  const postCssLoader = {
    loader: 'postcss-loader',
    options: require(path.join(__dirname, '../config-files/postcss.config'))
  };
  return {
    rules: [
      {
        test: /\.ts$/,
        use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: path.join(__dirname, '../config-files/tsconfig.json')
          }
        }, 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        }),
        include: [path.join(dirname, 'node_modules')]
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader?importLoaders=1',
          postCssLoader
        ],
        include: [path.join(dirname, 'src')]
      },
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader?importLoaders=1', postCssLoader, 'sass-loader'],
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
        test: /\.(jpe?g|png|gif|svg|mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  };
};
