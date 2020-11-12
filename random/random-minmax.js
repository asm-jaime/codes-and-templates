/* #randomminmax
 * >> 45, 100
 * << 67
*/

export default function random_minmax (min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
};