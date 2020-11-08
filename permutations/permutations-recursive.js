export default function permutations (array) {
  const result = [];

  const permutation = (arr, buff = []) => {
    if (arr.length === 0) {
      result.push(buff);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);

        permutation(curr.slice(), buff.concat(next));
      }
    }
  };

  permutation(array);

  return result;
}
