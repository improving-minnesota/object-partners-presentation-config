const path = require('path');

module.exports = function resolve({ dirname }) {
  return {
    alias: {
      public: path.join(dirname, 'src/public')
    },
    extensions: ['.', '.ts', '.js', '.json']
  };
}
