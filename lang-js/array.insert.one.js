/* #insertone
 * task: insert the item to an array
 * >> [5, 6], 0, 4
 * << [4, 5, 6]
*/

export default function insert (array, index, item) {
  array.splice(index, 0, item);
  return array;
}