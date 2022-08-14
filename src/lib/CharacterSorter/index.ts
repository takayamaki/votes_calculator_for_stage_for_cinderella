import { Name, OrderdArray } from '../types';

type CharacterSorterConstructorArgs = {
  candicates: readonly Name[];
  debug?: boolean;
};

const shiftItem = <T>(array: Array<T>): T => {
  const item = array.shift();
  if (item == null) throw Error;
  return item;
};

const randRange = (min: number, max: number, seed: number): number => {
  if (seed >= 1) {
    throw Error;
  } else {
    return Math.floor(seed * (max - min + 1) + min);
  }
};

export const sample = <T>(array: Array<T>, seed: number = Math.random()): T =>
  array[randRange(0, array.length - 1, seed)];

export class CharacterSorter {
  arraysToBeMerge: OrderdArray[];
  mergedArrays: OrderdArray[] = [];
  isFinished = false;
  acc: OrderdArray = [];
  leftArray: OrderdArray = [];
  rightArray: OrderdArray = [];
  result: OrderdArray = [];
  debug: boolean;
  choices: {
    left: Name;
    right: Name;
  } = {
    left: '',
    right: '',
  };

  constructor({ candicates, debug }: CharacterSorterConstructorArgs) {
    this.debug = debug ?? false;
    this.arraysToBeMerge = candicates.map((candicate) => [[candicate]]);

    if (this.arraysToBeMerge.length <= 1) {
      this.finishSort();
      return;
    }

    this.setMergingArrays();
    this.setNextChoices();
  }

  printDebugInfo = (choiced: string) => {
    if (!this.debug) return;

    console.log(choiced);
    console.log(JSON.stringify(this.leftArray));
    console.log(JSON.stringify(this.rightArray));
    console.log(JSON.stringify(this.mergedArrays));
    console.log(JSON.stringify(this.arraysToBeMerge));
  };

  finishSort = () => {
    this.result = this.arraysToBeMerge.pop()!;
    this.mergedArrays = [];
    this.isFinished = true;
  };

  setNextChoices = () => {
    this.choices = {
      left: sample(this.leftArray[0]),
      right: sample(this.rightArray[0]),
    };
  };

  setMergingArrays = () => {
    this.leftArray = shiftItem(this.arraysToBeMerge);
    this.rightArray = shiftItem(this.arraysToBeMerge);
  };

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
    this.setMergingArrays();
    this.setNextChoices();
  };

  selectLeft = () => {
    const leftItem = shiftItem(this.leftArray);

    this.acc.push(leftItem);
    if (this.leftArray.length === 0) {
      this.nextMerging(this.rightArray);
    } else {
      this.setNextChoices();
    }
    this.printDebugInfo('selectLeft');
  };

  selectRight = () => {
    const rightItem = shiftItem(this.rightArray);

    this.acc.push(rightItem);
    if (this.rightArray.length === 0) {
      this.nextMerging(this.leftArray);
    } else {
      this.setNextChoices();
    }
    this.printDebugInfo('selectRight');
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
    this.printDebugInfo('selectDraw');
  };
}

export function* onlineSort<T>(arr: T[]): Generator<{left: T, right: T}, T[], -1 | 0 | 1> {
  function* merge(
    left: T[],
    right: T[]
  ): Generator<{ left: T; right: T }, T[], -1 | 0 | 1> {
    const result: T[] = [];
    while (left.length > 0 || right.length > 0) {
      if (left.length > 0 && right.length === 0) {
        result.push(left.shift()!);
        continue;
      }
      if (right.length > 0 && left.length === 0) {
        result.push(right.shift()!);
        continue;
      }
      const lh = left[0];
      const rh = right[0];
      const cmpResult = yield { left: lh, right: rh };
      if (cmpResult < 0) {
        result.push(left.shift()!);
      } else {
        result.push(right.shift()!);
      }
    }

    return result;
  }

  let splitted: T[][] = arr.map((x) => [x]);
  let result = splitted;

  while (result.length > 1) {
    const next: T[][] = [];
    for (let i = 0, l = result.length; i + 1 < l; i += 2) {
      const merged = yield* merge(result[i], result[i + 1]);
      next.push(merged);
    }
    if (result.length % 2 === 1) {
      next.push(result.at(-1)!);
    }

    result = next;
  }

  return result[0];
}
