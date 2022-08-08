type Name = string;
type NameQuantityTuple = [Name, number];
export type VoteStep = [Name, Name, Name, Name, Name, number];
type VoteStepSolver = (input: {
  nameQuantityTuples: NameQuantityTuple[];
}) => VoteStep[];

type ExtractName = (tuple: NameQuantityTuple) => Name;
const extractName: ExtractName = (tuple) => tuple[0];

type ExtractRemainQuantity = (tuple: NameQuantityTuple) => number;
const extractRemainQuantity: ExtractRemainQuantity = (tuple) => tuple[1];

type FetchLastElement = <T extends any>(array: T[]) => T;
const fetchLastElement: FetchLastElement = (array) => array[array.length - 1];

type SortByRemainQuantity = (
  tuples: NameQuantityTuple[]
) => NameQuantityTuple[];
const sortByRemainQuantity: SortByRemainQuantity = (tuples) =>
  tuples.sort((a, b) => b[1] - a[1]);

type UniqArray = <T extends any>(array: T[]) => T[];
const uniqArray: UniqArray = (array) =>
  array.filter((v, i, a) => a.indexOf(v) === i);

type Compact = <T extends any>(array: T[]) => T[];
const compact: Compact = (array) => array.filter((elm) => elm != null);

const isEqual = (a: Array<any>, b: Array<any>): boolean =>
  JSON.stringify(a) == JSON.stringify(b);

type SolveByGreedyMethod = (input: {
  remain: NameQuantityTuple[];
  steps: VoteStep[];
  nameOrder: Name[];
}) => VoteStep[];
const solveByGrddeyMethod: SolveByGreedyMethod = ({
  remain,
  steps,
  nameOrder,
}) => {
  if (remain.length == 0) {
    return steps;
  }

  const sotedTuples = sortByRemainQuantity(remain);
  const dividedTuples = sotedTuples.slice(0, 5);
  const quantityToDivide = fetchLastElement(
    compact(
      uniqArray<number>(sotedTuples.map(extractRemainQuantity))
        .sort((a, b) => b - a)
        .slice(0, 5)
    )
  );

  const dividedNames = dividedTuples
    .map(extractName)
    .sort((a, b) => nameOrder.indexOf(a) - nameOrder.indexOf(b));

  const lastStep = fetchLastElement(steps);
  if (lastStep && isEqual(lastStep.slice(0, 5), dividedNames)) {
    lastStep[5] += quantityToDivide;
  } else {
    steps.push([
      dividedNames[0],
      dividedNames[1],
      dividedNames[2],
      dividedNames[3],
      dividedNames[4],
      quantityToDivide,
    ]);
  }

  dividedTuples.forEach((tpl) => (tpl[1] -= quantityToDivide));

  const nextRemain = remain.filter((tpl) => extractRemainQuantity(tpl) != 0);

  return solveByGrddeyMethod({
    remain: nextRemain,
    steps,
    nameOrder,
  });
};

export const voteStepSolver: VoteStepSolver = ({ nameQuantityTuples }) => {
  const steps = solveByGrddeyMethod({
    remain: nameQuantityTuples,
    steps: [],
    nameOrder: sortByRemainQuantity(nameQuantityTuples).map(extractName),
  });

  return steps;
};
