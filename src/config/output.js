import path from 'path';

export default function output({ dirname }) {
  return {
    filename: '[name].js',
    path: path.join(dirname, 'dist'),
    publicPath: './'
  };
}
