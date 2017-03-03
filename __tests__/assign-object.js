import assignObject from '../src/assign-object';

test('it extends objects', () => {
  const base = {
    entry: {
      bundle: './src/bundle'
    }
  };

  const extended = assignObject(base, {
    entry: {
      vendor: './src/vendor'
    }
  });

  expect(Object.keys(extended.entry).length).toBe(2);
});

test('it replaces object if last key is true', () => {
  const base = {
    entry: {
      bundle: './src/bundle'
    }
  };

  const extend = {
    entry: {
      vendor: './src/vendor'
    }
  };

  const extended = assignObject(base, extend, true);

  expect(extended).toEqual(extend);
});
