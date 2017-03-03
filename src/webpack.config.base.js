const path = require('path');

module.exports = function baseConfig(...args) {
  const configDir = path.join(__dirname, 'config');
  const ExtractText = path.join(configDir, 'extract-text-plugin')(...args);
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
        extendedConfig[key] = config[key](...args.concat(ExtractText));
      }
      return extendedConfig;
    }, config);
}
