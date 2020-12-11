import get_one_mutation from './permutation-one.js';
import testing from '../lang-js/testing.js';

const func = get_one_mutation;

const tests = [
  [[[1,2,4], 0], [1,2,3,4]],
  [[[1,2,3,4], 1], [1,2,4,3]],
];

testing(tests, func);
