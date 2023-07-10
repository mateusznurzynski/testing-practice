import { capitalize } from './capitalize';

test('should capitalize the first letter', () => {
  expect(capitalize('string')).toBe('String');
});

test('should leave the string as it is when already capitalized', () => {
  expect(capitalize('String')).toBe('String');
});

test('should leave the string as it is when empty', () => {
  expect(capitalize('')).toBe('');
});

test('should return false when passing other data types', () => {
  expect(capitalize(123)).toBe(false);
});
