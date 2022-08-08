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
