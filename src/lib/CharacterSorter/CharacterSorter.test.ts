import { CharacterSorter } from '.';

it('2 items initial state', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  expect(sorter.leftArray).toStrictEqual([['A']]);
  expect(sorter.rightArray).toStrictEqual([['B']]);
  expect(sorter.isFinished).toBe(false);
});

it('2 items left', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  sorter.selectLeft();
  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['A'], ['B']]);
});

it('2 items right', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  sorter.selectRight();
  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['B'], ['A']]);
});

it('2 items draw', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B'],
  });

  sorter.selectDraw();
  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['A', 'B']]);
});

it('3 items 2 step', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B', 'C'],
  });

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['C']]);
  expect(sorter.rightArray).toStrictEqual([['A'], ['B']]);

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['C'], ['A'], ['B']]);
});

it('3 items 3 step', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B', 'C'],
  });

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['C']]);
  expect(sorter.rightArray).toStrictEqual([['A'], ['B']]);

  sorter.selectRight();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([['A']]);
  expect(sorter.leftArray).toStrictEqual([['C']]);
  expect(sorter.rightArray).toStrictEqual([['B']]);

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['A'], ['C'], ['B']]);
});

it('3 items 2 step includes draw', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B', 'C'],
  });

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['C']]);
  expect(sorter.rightArray).toStrictEqual([['A'], ['B']]);

  sorter.selectDraw();

  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['C', 'A'], ['B']]);
});

it('3 items 2 step all draw', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B', 'C'],
  });

  sorter.selectDraw();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['C']]);
  expect(sorter.rightArray).toStrictEqual([['A', 'B']]);

  sorter.selectDraw();

  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['C', 'A', 'B']]);
});

it('5 items 6 step includes draw', () => {
  const sorter = new CharacterSorter({
    candicates: ['A', 'B', 'C', 'D', 'E'],
  });

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([[['A'], ['B']]]);
  expect(sorter.arraysToBeMerge).toStrictEqual([[['E']]]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['C']]);
  expect(sorter.rightArray).toStrictEqual([['D']]);

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([[['C'], ['D']]]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['E']]);
  expect(sorter.rightArray).toStrictEqual([['A'], ['B']]);

  sorter.selectLeft();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([]);
  expect(sorter.leftArray).toStrictEqual([['C'], ['D']]);
  expect(sorter.rightArray).toStrictEqual([['E'], ['A'], ['B']]);

  sorter.selectDraw();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([['C', 'E']]);
  expect(sorter.leftArray).toStrictEqual([['D']]);
  expect(sorter.rightArray).toStrictEqual([['A'], ['B']]);

  sorter.selectRight();

  expect(sorter.isFinished).toBe(false);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.acc).toStrictEqual([['C', 'E'], ['A']]);
  expect(sorter.leftArray).toStrictEqual([['D']]);
  expect(sorter.rightArray).toStrictEqual([['B']]);

  sorter.selectDraw();

  expect(sorter.isFinished).toBe(true);
  expect(sorter.mergedArrays).toStrictEqual([]);
  expect(sorter.arraysToBeMerge).toStrictEqual([]);
  expect(sorter.result).toStrictEqual([['C', 'E'], ['A'], ['D', 'B']]);
});
