import path from 'path';

export default {
  alias: {
    public: path.join(__dirname, 'src/public')
  },
  extensions: ['.', '.ts', '.js', '.json']
};
