import { stepSolver } from './solvers';

it('1 step', () => {
  expect(
    stepSolver({
      nameQuantityTuples: [
        ['A', 1],
        ['B', 1],
        ['C', 1],
        ['D', 1],
        ['E', 1],
      ],
    })
  ).toStrictEqual([['A', 'B', 'C', 'D', 'E', 1]]);
});

it('2 step', () => {
  expect(
    stepSolver({
      nameQuantityTuples: [
        ['A', 2],
        ['B', 2],
        ['C', 2],
        ['D', 2],
        ['E', 1],
        ['F', 1],
      ],
    })
  ).toStrictEqual([
    ['A', 'B', 'C', 'D', 'E', 1],
    ['A', 'B', 'C', 'D', 'F', 1],
  ]);
});

it('3 step', () => {
  expect(
    stepSolver({
      nameQuantityTuples: [
        ['A', 3],
        ['B', 3],
        ['C', 3],
        ['D', 3],
        ['E', 1],
        ['F', 1],
        ['G', 1],
      ],
    })
  ).toStrictEqual([
    ['A', 'B', 'C', 'D', 'E', 1],
    ['A', 'B', 'C', 'D', 'F', 1],
    ['A', 'B', 'C', 'D', 'G', 1],
  ]);
});

it('3 step(2)', () => {
  expect(
    stepSolver({
      nameQuantityTuples: [
        ['A', 3],
        ['B', 3],
        ['C', 3],
        ['D', 2],
        ['E', 2],
        ['F', 1],
        ['G', 1],
      ],
    })
  ).toStrictEqual([
    ['A', 'B', 'C', 'D', 'E', 1],
    ['A', 'B', 'C', 'D', 'E', 1],
    ['A', 'B', 'C', 'F', 'G', 1],
  ]);
});

it('3 step(3)', () => {
  expect(
    stepSolver({
      nameQuantityTuples: [
        ['A', 3],
        ['B', 3],
        ['C', 2],
        ['D', 2],
        ['E', 2],
        ['F', 2],
        ['G', 1],
      ],
    })
  ).toStrictEqual([
    ['A', 'B', 'C', 'D', 'E', 1],
    ['A', 'B', 'F', 'C', 'D', 1],
    ['A', 'B', 'F', 'E', 'G', 1],
  ]);
});

it('24 steps', () => {
  expect(
    stepSolver({
      nameQuantityTuples: [
        ['A', 16341],
        ['B', 13037],
        ['C', 8691],
        ['D', 6518],
        ['E', 5214],
        ['F', 4345],
        ['G', 3724],
        ['H', 3259],
        ['I', 2897],
        ['J', 2607],
        ['K', 2370],
        ['L', 2172],
        ['M', 2005],
        ['N', 1862],
        ['O', 1738],
        ['P', 1738],
        ['Q', 1738],
        ['R', 1448],
      ],
    })
  ).toStrictEqual([
    ['A', 'B', 'C', 'D', 'E', 5214],
    ['A', 'B', 'F', 'G', 'C', 3477],
    ['A', 'B', 'H', 'I', 'J', 2607],
    ['A', 'K', 'L', 'M', 'N', 1862],
    ['A', 'B', 'O', 'P', 'Q', 1304],
    ['A', 'R', 'D', 'F', 'H', 652],
    ['A', 'R', 'D', 'K', 'B', 435],
    ['A', 'O', 'P', 'Q', 'R', 290],
    ['A', 'L', 'I', 'G', 'D', 217],
    ['A', 'F', 'O', 'P', 'Q', 93],
    ['A', 'M', 'F', 'L', 'I', 73],
    ['A', 'K', 'R', 'M', 'O', 51],
    ['A', 'P', 'Q', 'F', 'G', 22],
    ['A', 'P', 'Q', 'F', 'K', 20],
    ['A', 'R', 'L', 'M', 'P', 8],
    ['A', 'R', 'L', 'M', 'Q', 8],
    ['A', 'F', 'G', 'R', 'L', 1],
    ['A', 'F', 'G', 'R', 'L', 1],
    ['A', 'F', 'G', 'M', 'R', 1],
    ['A', 'F', 'G', 'M', 'L', 1],
    ['A', 'F', 'G', 'K', 'M', 1],
    ['A', 'F', 'G', 'K', 'L', 1],
    ['A', 'F', 'G', 'R', 'Q', 1],
    ['A', 'F', 'G', 'P', undefined, 1],
  ]);
});
