/* #codeforceio #contestio #yandexcupio #fileio
 * task: input output(to the file) template contests
*/

const readLine = require('readline').createInterface({ input: process.stdin });

const { openSync, appendFileSync } = require('fs');
const output = openSync('output.txt', 'w+');

const NEW_LINE = '\n';

const input = [];
readLine
    .on('line', (line) => {
        // read input data
        input.push(line);
    })
    .on('close', () => main());

function main() {
    const result = input.join(' ');
    appendFileSync(output, `${result}${NEW_LINE}`);
}

// solved by: $%U%$