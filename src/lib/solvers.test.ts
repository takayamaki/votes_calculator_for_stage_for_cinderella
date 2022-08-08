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
    ['A', 'B', 'C', 'D', 'F', 1],
    ['A', 'B', 'E', 'F', 'G', 1],
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
    ['A', 'B', 'C', 'F', 'G', 3477],
    ['A', 'B', 'H', 'I', 'J', 2607],
    ['A', 'K', 'L', 'M', 'N', 1862],
    ['A', 'B', 'O', 'P', 'Q', 1304],
    ['A', 'D', 'F', 'H', 'R', 652],
    ['A', 'B', 'D', 'K', 'R', 435],
    ['A', 'O', 'P', 'Q', 'R', 290],
    ['A', 'D', 'G', 'I', 'L', 217],
    ['A', 'F', 'O', 'P', 'Q', 93],
    ['A', 'F', 'I', 'L', 'M', 73],
    ['A', 'K', 'M', 'O', 'R', 51],
    ['A', 'F', 'G', 'P', 'Q', 22],
    ['A', 'F', 'K', 'P', 'Q', 20],
    ['A', 'L', 'M', 'P', 'R', 8],
    ['A', 'L', 'M', 'Q', 'R', 8],
    ['A', 'F', 'G', 'L', 'R', 1],
    ['A', 'F', 'G', 'L', 'R', 1],
    ['A', 'F', 'G', 'M', 'R', 1],
    ['A', 'F', 'G', 'L', 'M', 1],
    ['A', 'F', 'G', 'K', 'M', 1],
    ['A', 'F', 'G', 'K', 'L', 1],
    ['A', 'F', 'G', 'Q', 'R', 1],
    ['A', 'F', 'G', 'P', undefined, 1],
  ]);
});
