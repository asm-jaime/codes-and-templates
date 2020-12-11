/* #testing #assert
 * task: check test cases on a function
 * << [[[a1, a2], [result]]], (a,b) => a + b
 * >> pos: 0, expect: [result], got: [wrong result]
*/

const input = 0;
const expect = 1;

export default function testing (tests, func, options = {}) {
  tests.map((test, position) => {
    const output_string = JSON.stringify(func(...test[input]));
    const expect_string = JSON.stringify(test[expect]);

    if (output_string !== expect_string) return () => {
      console.log(`pos: ${position}, expect: ${expect_string}, got: ${output_string}`);
    };
    return () => {};
  }).forEach(log => log());
}
