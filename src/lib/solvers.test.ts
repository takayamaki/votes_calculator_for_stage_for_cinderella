import { stepSolver } from './solvers';

it('', () => {
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

it('', () => {
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
