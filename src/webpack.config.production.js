const webpack = require('webpack');

module.exports = {
  plugins(base) {
    return base
      .concat([
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          mangle: true,
          sourceMap: true
        })
      ]);
  }
};
