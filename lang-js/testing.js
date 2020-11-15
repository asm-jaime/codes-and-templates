/* #testing #assert
 * task: check test cases on a function
 * << [[[2, 2], [5]]], (a,b) => a + b
 * >> wrong[0]: [2, 2], [5]
*/

const input = 0;
const expect = 1;

export default function testing (tests, func) => {
  tests.map((test, position) => {
    const output = func(...test[input]);
    const result = JSON.stringify(output) === JSON.stringify(test[expect]);

    if (result) return console.log(`wrong[${position}]: ${JSON.stringify(test)}`);
    return () => {};
  }).forEach(log => log());
}
