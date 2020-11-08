/* #codeforceio #contestio #yandexcupio #es5
 * task: input output template for hard contests
*/

var rl = require('readline').createInterface({
  input: process.stdin, output: process.stdout
});

function write () {
  var args = [];
  var keys = Object.keys(arguments);
  for(var i = 0; i < keys.length; ++i) args.push(arguments[keys[i]]);

  process.stdout.write(args.join(' '));
}

var lines = [];

var lines_count = 0;
function readline () {
  return lines[lines_count++];
}

rl.on('line', function (line) {
  lines.push(line + '');
});

rl.on('close', main);

function main() {
  var one_line = parseInt(readline());
  write(one_line + '\n');
}

// solved by: $%U%$