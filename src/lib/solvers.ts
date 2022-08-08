type Name = string;
type NameQuantityTuple = [Name, number];
type StepSolverInput = {
  nameQuantityTuples: NameQuantityTuple[];
};
type VoteStep = [Name, Name, Name, Name, Name, number];
type StepSolver = (input: StepSolverInput) => VoteStep[];

export const stepSolver: StepSolver = (input) => {
  const steps: VoteStep[] = [['A', 'B', 'C', 'D', 'E', 1]];
  return steps;
};
