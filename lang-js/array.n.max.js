/* #nmax
 * task: n max elements from an array
 * << [1, 2, 3], 2
 * >> [2, 3]
*/

export default function get_n_max (array, n) {
  const result = Array.apply(null, {length: n}).map((e) => -Infinity);

  for (let i = 0; i < array.length; ++i) {
    if (array[i] > result[0]) {
      result.shift(0);
      let position = 0;
      for (; position < n - 1; ++position) {
        if (array[i] < result[position]) break;
      }
      result.splice(position, 0, array[i]);
    }
  }

  return result;
}