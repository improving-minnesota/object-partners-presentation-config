import base from '../src/webpack.config.base';

test('it has expected properties', () => {
  expect(Object.keys(base)).toEqual([
    'entry',
    'output',
    'resolve',
    'module',
    'plugins'
  ]);
});
