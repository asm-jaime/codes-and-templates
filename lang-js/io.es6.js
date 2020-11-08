/* #codeforceio #contestio #yandexcupio #es6
 * task: input output template contests
*/

'use strict';

const rl = require('readline').createInterface({
  input: process.stdin, output: process.stdout
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
 
function main() {
  const one_line = parseInt(readline());
  write(`${one_line}\n`);
}

// solved by: $%U%$