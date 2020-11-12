/* #factorial #A000142
 * task: multiple all numbers from 1 to n
 * << 4
 * >> 24
*/

export default function factorial (number) {
  let result = 1;

  for (let multiple = 1; multiple < number + 1; ++multiple) {
    result = result * multiple;
  }

  return result;
}
