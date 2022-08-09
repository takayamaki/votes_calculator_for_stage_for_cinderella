import { CharacterSorter } from '.';

it('', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  expect(sorter.leftArray).toStrictEqual([['A']]);
  expect(sorter.rightArray).toStrictEqual([['B']]);
  expect(sorter.isFinished).toBe(false);
});

it('', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  sorter.selectLeft();
  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['A'], ['B']]);
});

it('', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  sorter.selectRight();
  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['B'], ['A']]);
});

it('', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  sorter.selectDraw();
  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['A', 'B']]);
});
