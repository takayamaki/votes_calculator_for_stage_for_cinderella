import { useRef, useState } from 'preact/hooks';
import { CharacterSorter } from '../../lib/CharacterSorter';
import { groupA } from '../../lib/constants/year2022';
import { Name, OrderdArray } from '../../lib/types';
import { SortResult } from './SortResult';

export const CharacterSort = () => {
  const characterSorterRef = useRef(
    new CharacterSorter({ candicates: groupA.candicates })
  );
  const [choices, setChoices] = useState<{
    left: Name;
    right: Name;
  }>(characterSorterRef.current.choices);
  const [result, setRessult] = useState<OrderdArray>([]);
  const onClickSelectLeft = () => {
    characterSorterRef.current.selectLeft();
    const { choices } = characterSorterRef.current;
    setChoices(choices);
    characterSorterRef.current.isFinished &&
      setRessult(characterSorterRef.current.result);
  };

  const onClickSelectRight = () => {
    characterSorterRef.current.selectRight();
    const { choices } = characterSorterRef.current;
    setChoices(choices);
    characterSorterRef.current.isFinished &&
      setRessult(characterSorterRef.current.result);
  };
  const onClickSelectDraw = () => {
    characterSorterRef.current.selectDraw();
    const { choices } = characterSorterRef.current;
    setChoices(choices);
    characterSorterRef.current.isFinished &&
      setRessult(characterSorterRef.current.result);
  };

  const children = characterSorterRef.current.isFinished ? (
    <SortResult result={result} />
  ) : (
    <table>
      <tbody>
        <tr>
          <td onClick={onClickSelectLeft} rowSpan={2}>
            {choices.left}
          </td>
          <td onClick={onClickSelectDraw}>引き分け</td>
          <td onClick={onClickSelectRight} rowSpan={2}>
            {choices.right}
          </td>
        </tr>
        <tr>
          <td onClick={onClickSelectDraw}>どうでもいい</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <>
      <h1>投票優先度決定</h1>
      <h2>使い方</h2>
      <p>好きな順、一番好きなアイドルと一緒に歌っているところを観たい順などの基準によって、より多く投票したいアイドルを選ぶ</p>
      {children}
    </>
  );
};
