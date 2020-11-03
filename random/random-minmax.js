/* #randomminmax
 * >> 45, 100
 * << 67
*/

const random_minmax = (min, max) => (
  Math.floor(min + Math.random() * (max - min + 1))
);