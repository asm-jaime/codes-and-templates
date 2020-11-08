/* #preallocatedarray #arrayn #arraysize
 * task: get a sized array
 * << 4, null
 * >> [null, null, null, null]
*/

export default function get_array_size (size, value) {
  return Array.apply(null, {length: size}).map(element => value);
}