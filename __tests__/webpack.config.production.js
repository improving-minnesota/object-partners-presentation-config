import productionConfig from '../src/webpack.config.production';

test('it contains a plugins property', () => {
  expect(productionConfig.plugins).toBeDefined();
});

test('it adds a plugin to base array', () => {
  const base = [
    'red'
  ];

  const len = base.length;

  expect(productionConfig.plugins(base).length).toBeGreaterThan(len);
});
