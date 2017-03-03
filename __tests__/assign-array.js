import assignArray from '../src/assign-array';

test('it clones array', () => {
  const arr = ['red', 'green'];

  const newArr = assignArray(arr, ['blue']);

  expect(arr.length).not.toBe(newArr.length);
});

test('it concats simple array', () => {
  const arr = ['red', 'green'];

  expect(assignArray(arr, ['blue'])).toEqual(arr.concat('blue'));
});

test('it flattens deep arrays', () => {
  const arr = ['red', 'green'];

  expect(assignArray(arr, ['blue'], ['yellow'], ['orange'])).toEqual(arr.concat([
    'blue',
    'yellow',
    'orange'
  ]));
});

test('it replaces array if true is last argument', () => {
  expect(assignArray(['red', 'green'], ['blue'], true)).toEqual([
    'blue'
  ]);
});
