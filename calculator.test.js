import { calculator } from './calculator';

test('should add two numbers', () => {
  expect(calculator.add(2, 5)).toBe(7);
});
test('should add two numbers', () => {
  expect(calculator.add(-22, 5)).toBe(-17);
});

test('should subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test('should subtract two numbers', () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
});

test('should divide two numbers', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
test('should return float values', () => {
  expect(calculator.divide(1, 3)).toBe(0.33);
});

test('should multiply two numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test('should return NaN for non-numbers', () => {
  expect(calculator.add('aaaa', false)).toBe(NaN);
});
