import { Name } from '../types';

type SortItem = Name[];
type OrderdArray = SortItem[];

type CharacterSorterConstructorArgs = { candicates: Name[] };

const shiftItem = <T>(array: Array<T>): T => {
  const item = array.shift();
  if (item == null) throw Error;
  return item;
};

export class CharacterSorter {
  arraysToBeMerge: OrderdArray[];
  mergedArrays: OrderdArray[] = [];
  isFinished = false;
  acc: OrderdArray = [];
  leftArray: OrderdArray = [];
  rightArray: OrderdArray = [];
  result: OrderdArray | undefined;

  constructor({ candicates }: CharacterSorterConstructorArgs) {
    this.arraysToBeMerge = candicates.map((candicate) => [[candicate]]);

    if (this.arraysToBeMerge.length <= 1) {
      this.finishSort();
      return;
    }

    this.setMergingArrays()
  }

  finishSort = () => {
    this.result = this.arraysToBeMerge.pop();
    this.mergedArrays = [];
    this.isFinished = true;
  };

  setMergingArrays = () =>{
    this.leftArray = shiftItem(this.arraysToBeMerge);
    this.rightArray = shiftItem(this.arraysToBeMerge);
  }

  nextMerging = (remain: OrderdArray) => {
    this.acc.push(...remain);
    this.mergedArrays.push(this.acc);
    this.acc = [];

    if (this.arraysToBeMerge.length <= 1) {
      this.arraysToBeMerge.push(...this.mergedArrays);
      this.mergedArrays = [];
      if (this.arraysToBeMerge.length === 1) {
        this.finishSort();
        return;
      }
    }
    this.setMergingArrays()
  };

  selectLeft = () => {
    const leftItem = shiftItem(this.leftArray)

    this.acc.push(leftItem);
    if (this.leftArray.length === 0) {
      this.nextMerging(this.rightArray);
    }
  };
  selectRight = () => {
    const rightItem = shiftItem(this.rightArray)

    this.acc.push(rightItem);
    if (this.rightArray.length === 0) {
      this.nextMerging(this.leftArray);
    }
  };
  selectDraw = () => {
    const rightItem = shiftItem(this.rightArray);
    const leftItem = shiftItem(this.leftArray);

    this.acc.push([...leftItem, ...rightItem]);
    if (this.rightArray.length === 0) {
      this.nextMerging(this.leftArray);
    } else if (this.leftArray.length === 0) {
      this.nextMerging(this.rightArray);
    }
  };
}
