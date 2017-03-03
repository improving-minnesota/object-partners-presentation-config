import path from 'path';

const configDir = path.join(__dirname, 'config');

export default {
  entry: require(path.join(configDir, 'entry')),
  output: require(path.join(configDir, 'output')),
  resolve: require(path.join(configDir, 'resolve')),
  module: require(path.join(configDir, 'module')),
  plugins: require(path.join(configDir, 'plugins'))
};
