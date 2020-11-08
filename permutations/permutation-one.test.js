import get_one_mutation from './permutation-one.js';
const func = get_one_mutation;

const tests = [
  [[[1,2,4], 0], [1,2,3,4]],
  [[[1,2,3,4], 1], [1,2,4,3]],
];

const input = 0;
const expect = 1;

((tests, func) => {
  tests.map((test, position) => {
    const output = func(...test[input]);
    return [
      () => {},
      () => console.log(`wrong[${position}]: ${JSON.stringify(test)}`)
    ][JSON.stringify(output) === JSON.stringify(test[expect])];
  }).forEach(log => log());
})(tests, func);
