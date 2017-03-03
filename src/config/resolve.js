import path from 'path';

export default function resolve({ dirname }) {
  return {
    alias: {
      public: path.join(dirname, 'src/public')
    },
    extensions: ['.', '.ts', '.js', '.json']
  };
}
