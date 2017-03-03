import path from 'path';

export default function baseConfig(options = {}) {
  const configDir = path.join(__dirname, 'config');
  const config = {
    entry: require(path.join(configDir, 'entry')),
    output: require(path.join(configDir, 'output')),
    resolve: require(path.join(configDir, 'resolve')),
    module: require(path.join(configDir, 'module')),
    plugins: require(path.join(configDir, 'plugins'))
  };
  return Object.keys(config)
    .reduce((extendedConfig, key) => {
      if ( typeof config[key] === 'function' ) {
        extendedConfig[key] = config[key](options);
      }
      return extendedConfig;
    }, config);
}
