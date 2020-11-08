/* #deepmerge
 *
*/

export default function deep_merge (first, second) {
  for (const element in second) {
    if (typeof first[element] != 'object') {
      first[element] = second[element];
    } else if (typeof second[element] == 'object') {
      first[element] = merge_recursive(first[element], second[element]);
    }
  };

  return first;
}