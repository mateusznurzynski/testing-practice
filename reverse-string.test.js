import { reverseString } from './reverse-string';

test('should return a reversed string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('should work with both uppercase and lowercase', () => {
  expect(reverseString('stRiNg')).toBe('gNiRts');
});

test('should work with empty strings', () => {
  expect(reverseString('')).toBe('');
});

test('should return false for non-strings', () => {
  expect(reverseString(123)).toBe(false);
});
