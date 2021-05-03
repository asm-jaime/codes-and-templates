/* #numbermap #maptonumber
 * task: digits of a map to the number
 * << {1:[0,1], 2:[2,8], 3:[3,4], 4:[5], 5:[6,7]}
 * >> 112334552
*/

export default function numbermapToNumber (numbermap) {
  const digits = [];

  for(const digit in numbermap) {
    for(const position of numbermap[digit]) {
      digits[position] = digit;
    }
  }

  return parseInt(digits.join(''));
}
