import baseConfig from '../src/webpack.config.base';
import getWebpackConfig from '../src/';

describe('central API', () => {
  const config = getWebpackConfig();
  test('it returns a closure', () => {
    expect(typeof config).toBe('function');
  });

  test('it contains expected webpack config properties', () => {
    const unwrapped = config();

    expect(Object.keys(unwrapped)).toEqual([
      'entry',
      'output',
      'resolve',
      'module',
      'plugins'
    ]);
  });

  test('it matches expected config', () => {
    const unwrapped = config();

    expect(unwrapped.entry).toMatchSnapshot();
  });
});

describe('extension', () => {
  test('can extend entry', () => {
    const newVendorPath = './vendor-1234';
    const config = getWebpackConfig({
      entry: {
        vendor: newVendorPath
      }
    });

    expect(config().entry.vendor).toEqual(newVendorPath);
  });

  test('it can extend with a function', () => {
    const newVendorPath = './vendor-1234';

    const config = getWebpackConfig({
      entry(base) {
        base.vendor = newVendorPath;
        return base;
      }
    });

    expect(config().entry.vendor).toEqual(newVendorPath);
  });

  test('it passes entire config as second arg to function', () => {
    const config = getWebpackConfig({
      entry(base, webpackConfig) {
        base.vendor = webpackConfig.output.filename;
        return base;
      }
    });

    const unwrapped = config();

    expect(unwrapped.entry.vendor).toBe(unwrapped.output.filename);
  });

  test('it extends with additional environment configs', () => {
    const envConfig = getWebpackConfig()({ production: true });

    expect(baseConfig.plugins.length).not.toBe(envConfig.plugins.length);
  });

});
