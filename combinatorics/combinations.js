/* #combinations #combos #cnk #n!/k!(n-k)!
 * task: all passable combinations from n sets
 * >> [[1,2], [3,4]]
 * << [[1,3], [1,4], [2,3], [2,4]]
*/

export default function combinations (sets) {
  const result = [];

  const combination = (sets, res, position) => {
    if (res.length === sets.length) {
      result.push(res);
      return;
    }
    for (let i = 0; i < sets[position].length; ++i) {
      combination(sets, [...res, sets[position][i]], position + 1);
    }
  };

  combination(sets, [], 0);

  return result;
}
