/* #eachother #arrayeachother
 * task: each with each on the array
*/

export function each_with_each (array, operation) {
  for (let i = 0; i < array.length; ++i) {
    for (let j = i + 1; j < array.length; ++j) {
      operation(array[i], array[j]);
    }
  }
}
