import { sample } from '.';

it('', () => {
  expect(sample([1, 2], 0)).toBe(1);
});
it('', () => {
  expect(sample([1, 2], 0.4999)).toBe(1);
});
it('', () => {
  expect(sample([1, 2], 0.5)).toBe(2);
});
it('', () => {
  expect(sample([1, 2], 0.9999)).toBe(2);
});

it('', () => {
  expect(sample([1, 2, 3], 0)).toBe(1);
});
it('', () => {
  expect(sample([1, 2, 3], 0.3333)).toBe(1);
});
it('', () => {
  expect(sample([1, 2, 3], 0.3334)).toBe(2);
});
it('', () => {
  expect(sample([1, 2, 3], 0.6666)).toBe(2);
});
it('', () => {
  expect(sample([1, 2, 3], 0.6667)).toBe(3);
});
it('', () => {
  expect(sample([1, 2, 3], 0.9999)).toBe(3);
});

it('', () => {
  expect(() => {
    sample([1, 2], 1);
  }).toThrow();
});
