/* #bsearch #binarysearch #searchbinary 
 * task: search a value in the array in log(n)
 * << [1,2,3,4,5,43,56], 43
 * >> 5
 */

const binary_search = (array, value) => {
  let left   = 0;
  let right  = array.length - 1;

  let middle = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (array[middle] > value) {
      right = middle - 1;
    } else if (array[middle] < value) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return undefined;
};

