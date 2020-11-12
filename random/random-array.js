/* #randomarray
 * task: an array of random element
*/

export function random_array (length, min, max) {
  const result = [];
  for (let i = 0; i < length; ++i) {
    result.push(Math.floor(Math.random() * (max - min) + min));
  }

  return result;
}
