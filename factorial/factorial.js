/* #factorial #A000142
 * 1 1 2 6 24 120
*/

const factorial = (n) => {
  let result = 1;

  for(let a = 1; a < n + 1; ++a) {
    result = result * a;
  }

  return result;
}

export default factorial;