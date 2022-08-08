import { voteStepSolver } from '.';

it('1 step', () => {
  expect(
    voteStepSolver({
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
    voteStepSolver({
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
    voteStepSolver({
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

it('2 step(2)', () => {
  expect(
    voteStepSolver({
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
    ['A', 'B', 'C', 'D', 'E', 2],
    ['A', 'B', 'C', 'F', 'G', 1],
  ]);
});

it('3 step(3)', () => {
  expect(
    voteStepSolver({
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

it('23 steps', () => {
  expect(
    voteStepSolver({
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
    ['A', 'F', 'G', 'L', 'R', 2],
    ['A', 'F', 'G', 'M', 'R', 1],
    ['A', 'F', 'G', 'L', 'M', 1],
    ['A', 'F', 'G', 'K', 'M', 1],
    ['A', 'F', 'G', 'K', 'L', 1],
    ['A', 'F', 'G', 'Q', 'R', 1],
    ['A', 'F', 'G', 'P', undefined, 1],
  ]);
});

it('35 steps', () => {
  expect(
    voteStepSolver({
      nameQuantityTuples: [
        ['A', 16341],
        ['B', 16341],
        ['C', 8484],
        ['D', 6312],
        ['E', 5007],
        ['F', 4139],
        ['G', 3517],
        ['H', 3053],
        ['I', 2690],
        ['J', 2401],
        ['K', 2163],
        ['L', 1966],
        ['M', 1798],
        ['N', 1656],
        ['O', 1532],
        ['P', 1531],
        ['Q', 1531],
        ['R', 1242],
      ],
    })
  ).toStrictEqual([
    ['A', 'B', 'C', 'D', 'E', 4139],
    ['A', 'B', 'C', 'F', 'G', 3053],
    ['A', 'B', 'H', 'I', 'J', 2173],
    ['A', 'B', 'D', 'K', 'L', 1798],
    ['A', 'B', 'M', 'N', 'O', 1531],
    ['A', 'B', 'C', 'P', 'Q', 1086],
    ['A', 'B', 'F', 'H', 'R', 868],
    ['A', 'B', 'E', 'G', 'I', 445],
    ['A', 'B', 'E', 'P', 'Q', 374],
    ['A', 'B', 'D', 'K', 'R', 267],
    ['A', 'B', 'F', 'J', 'M', 206],
    ['A', 'B', 'C', 'L', 'N', 108],
    ['A', 'B', 'C', 'D', 'R', 72],
    ['A', 'B', 'I', 'K', 'P', 61],
    ['A', 'B', 'L', 'M', 'Q', 49],
    ['A', 'B', 'D', 'E', 'K', 35],
    ['A', 'B', 'C', 'Q', 'R', 19],
    ['A', 'B', 'G', 'J', 'N', 16],
    ['A', 'B', 'E', 'M', 'R', 11],
    ['A', 'B', 'F', 'H', 'L', 7],
    ['A', 'B', 'C', 'I', 'P', 6],
    ['A', 'B', 'F', 'I', 'J', 3],
    ['A', 'B', 'H', 'P', 'R', 2],
    ['A', 'B', 'H', 'L', 'R', 1],
    ['A', 'B', 'E', 'J', 'L', 1],
    ['A', 'B', 'G', 'L', 'Q', 1],
    ['A', 'B', 'G', 'J', 'Q', 1],
    ['A', 'B', 'E', 'H', 'R', 1],
    ['A', 'B', 'F', 'I', 'P', 1],
    ['A', 'B', 'I', 'K', 'P', 1],
    ['A', 'B', 'E', 'F', 'K', 1],
    ['A', 'B', 'G', 'H', 'R', 1],
    ['A', 'B', 'J', 'L', 'Q', 1],
    ['A', 'B', 'C', 'M', 'N', 1],
    ['A', 'B', 'D', 'O', undefined, 1],
  ]);
});