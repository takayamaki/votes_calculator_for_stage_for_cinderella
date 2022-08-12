import { OrderdArray } from '../../lib/types';

type SortResultProps = {
  result: OrderdArray;
};
export const SortResult = ({ result }: SortResultProps) => {
  const resultWithOrder = result.flatMap((elm, index) => {
    const order = index + 1;
    return elm.map((name) => (
      <tr>
        <td>{order}</td>
        <td>{name}</td>
      </tr>
    ));
  });
  return <table>{resultWithOrder}</table>;
};
