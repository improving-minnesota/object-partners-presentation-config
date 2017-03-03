const webpack = require('webpack');

export default {
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
