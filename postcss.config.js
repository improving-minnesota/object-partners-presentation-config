const path = require('path');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-assets')({
      extensions: ['.png'],
      basePath: path.join(__dirname, 'src/style')
    })
  ]
};
