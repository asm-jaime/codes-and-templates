/* #numbermap #numbertomap
 * task: digits of a number to the map
 * << 112334552
 * >> {1:[0,1], 2:[2,8], 3:[3,4], 4:[5], 5:[6,7]}
*/

export default function numberToNumberMap (number) {
  const map = Object.create(null);

  const digits = number.toString().split('');

  for (let i = 0; i < digits.length; ++i) {
    if(digits[i] in map) {
      map[digits[i]].push(i);
    } else {
      map[digits[i]] = [i];
    }
  }

  return map;
}
