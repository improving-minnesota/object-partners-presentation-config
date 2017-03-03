const path = require('path');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-base64')({
      extensions: ['.png'],
      root: path.join(__dirname, 'src/style')
    })
  ]
};
