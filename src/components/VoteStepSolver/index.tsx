import { voteStepSolver } from '../../lib/voteStepSolver';
import { useMemo, useState } from 'preact/hooks';
import { VoteStepList } from './voteStepList';
import { VoteStep } from '../../lib/types';

export const VoteStepSolver = () => {
  const [input, setInput] = useState('');
  const onTextAreaChange: JSX.GenericEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    // React.ChangeEvent<HTMLTextAreaElement>に該当するものがpreactにはないっぽい？
    // https://github.com/preactjs/preact/issues/1930
    // @ts-ignore
    setInput(event.target.value);
  };

  const stepSolverInput = useMemo(() => {
    if (input === '') {
      return [];
    }
    const lines = input.split('\n');
    const parseLine = (line: string): [string, number] => {
      const splited = line.split(',');
      return [splited[0], parseInt(splited[1], 10)];
    };
    return lines.map(parseLine);
  }, [input]);

  const steps: VoteStep[] = voteStepSolver({
    nameQuantityTuples: stepSolverInput,
  });

  return (
    <>
      <h1>投票手順計算</h1>
      <h2>使い方</h2>
      <p>名前と投票したい票数をカンマ区切りで入力する</p>
      <div>
        <textarea value={input} onInput={onTextAreaChange} />
        <VoteStepList steps={steps} />
      </div>
    </>
  );
};
