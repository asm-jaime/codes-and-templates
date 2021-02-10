/* #summary
 * task: get summ of an array
 * << [2, 2, 2, 2, 3]
 * >> 11
*/

export default function sum (array, from, to) {
  if (from < 0) {
    from = 0;
  }
  if (to < 0) {
    to = array.length;
  }

  let sum = 0;

  for (let i = from; i < to; ++i) {
    sum = sum + array[i];
  }

  return sum;
}
