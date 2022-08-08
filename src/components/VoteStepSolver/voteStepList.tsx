import { VoteStep as VoteStepType } from '../../lib/types';

const VoteStep = (step: VoteStepType, index: number) => {
  const cells = step.map((elm) => <td>{elm ?? '任意'}</td>);

  return (
    <tr>
      <th>{index + 1}</th>
      {cells}
    </tr>
  );
};

export const VoteStepList = (input: { steps: VoteStepType[] }) => {
  const lines = input.steps.map(VoteStep);
  return (
    <table>
      <tr>
        <th></th>
        <th colSpan={5} rowSpan={1} style="text-aline: center;">
          名前
        </th>
        <th>票数</th>
      </tr>
      {lines}
    </table>
  );
};
