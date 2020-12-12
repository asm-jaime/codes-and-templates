/* #primefactorization #primedecomposition
 * task: array of prime numbers which when array.reduce(multiple) = number
 * << 48
 * >> [2, 2, 2, 2, 3]
*/

export default function primeFactorization (number) {
  const result = [];

  if (number <= 3) return result.push(number);

  let done = false;
  while (done === false) {
    if (number % 2 === 0) {
      result.push(2);
      number = number / 2;
      continue;
    }

    if (number % 3 === 0) {
      result.push(3);
      number = number / 3;
      continue;
    }

    if (number === 1) return result;

    // try to divide the checked number by all numbers till its square root
    const sqrt = Math.sqrt(number);

    done = true;
    for (let i = 6; i <= (sqrt + 6); i = i + 6) {
      if (number % (i - 1) === 0) { // is number divisible by i-1?
        result.push((i - 1));
        number = number / (i - 1);
        done = false;
        break;
      }
      if (number % (i + 1) === 0) { // is number divisible by i+1?
        result.push((i + 1));
        number = number / (i + 1);
        done = false;
        break;
      }
    }
  }
  result.push(number);

  return result;
}
