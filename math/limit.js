/* #minimax #limit #clamp
 * task: limit a value in minimum and maximum limitations
 * >> 6, 10, 5
 * << 6
*/

export default function limit (min, max, value) {
  Math.min(Math.max(value, min), max);
}