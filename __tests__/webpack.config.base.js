import base from '../src/webpack.config.base';

test('it has expected properties', () => {
  console.log(base({ dirname: __dirname }));
  expect(Object.keys(base({ dirname: __dirname }))).toEqual([
    'entry',
    'output',
    'resolve',
    'module',
    'plugins'
  ]);
});
