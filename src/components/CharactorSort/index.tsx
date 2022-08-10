import { useRef, useState } from 'preact/hooks';
import { CharacterSorter, OrderdArray } from '../../lib/CharacterSorter';
import { groupA } from '../../lib/constants/year2022';
import { Name } from '../../lib/types';

export const CharacterSort = () => {
  const characterSorterRef = useRef(
    new CharacterSorter({ candicates: groupA.candicates, debug: true })
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

  if (characterSorterRef.current.isFinished) return <>{result}</>;

  return (
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
};
