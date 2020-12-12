/* #permutation #iterative
 * task: 
 * << [1,2,3,4], 1
 * >> [1,2,4,3]
 */

export default function permutations (array) {
  const stack = [ ['', array] ];
  const result = [];

  while (stack.length) {
    const [permute, choices] = stack.pop();

    if (choices.length) {
      choices.forEach((choice, i, choices) => {
        stack.push([permute.concat(choice), choices.slice(0, i).concat(choices.slice(i + 1))]);
      });
    } else {
      result.push(permute);
    }
  }

  return result;
}
