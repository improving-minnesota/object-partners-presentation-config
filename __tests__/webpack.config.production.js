import productionConfig from '../src/webpack.config.production';

test('it contains a plugins property', () => {
  expect(productionConfig.plugins).toBeDefined();
  expect(productionConfig.plugins.length).toBeGreaterThan(0);
});
