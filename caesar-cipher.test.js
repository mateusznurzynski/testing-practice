test('should return a shifted string', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('should return a shifted string', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('should keep the same case', () => {
  expect(caesarCipher('aBc', 1)).toBe('bCd');
});

test('should work with punctuation', () => {
  expect(caesarCipher('ab, c', 1)).toBe('bc, d');
});

test('should wrap', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('should ignore numbers', () => {
  expect(caesarCipher('a1bc23', 1)).toBe('b1cd23');
});
