/* #codeforceio #contestio #yandexcupio #es6
 * task: input output template contests
*/

'use strict';

const rl = require('readline').createInterface({
  input: process.stdin
});

const write = (...args) => {
  process.stdout.write(args.join(' '));
};

const lines = [];

let rl_count = 0;
const readline = () => {
  return lines[rl_count++];
};

rl.on('line', line => {
  lines.push(line);
});

rl.on('close', main);

function MoveToSymmetric(matrix) {

}
 
function main() {
  const setOfData = parseInt(readline());
  for (let dataset = 0; dataset < setOfData; ++dataset) {
    const matrixSize = parseInt(readline());
    const matrix = Array
      .apply(null, {length: matrixSize })
      .map(() => readline().split('').map(Number));

    const result = MoveToSymmetric(matrix);
    write(`${result}\n`);
  }

}

// solved by: asmjaime
