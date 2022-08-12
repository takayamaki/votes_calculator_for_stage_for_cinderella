import { Name } from '../types';

type CharacterSortSet = {
  name: string;
  candicates: readonly Name[];
}[];

import {groups as groups2022}  from './year2022';
export const groups: CharacterSortSet = [
  ...groups2022
];
