test('should analyze an array of numbers', () => {
  expect(analyzeArray([4, 2, 10, 8, 6])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});

test('should work with floats', () => {
  expect(analyzeArray([4.5, 2, 10, 8.2, 6])).toEqual({
    average: 6.14,
    min: 2,
    max: 10,
    length: 5,
  });
});

test('should ignore non-numbers', () => {
  expect(analyzeArray([4, 2, 10, 'foo', 8, 6])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});

test('should work with one number', () => {
  expect(analyzeArray([4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 1,
  });
});

test('properties should be null when no numbers are given', () => {
  expect(analyzeArray(['foo', true, null, NaN])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});
