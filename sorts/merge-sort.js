function merge (array, left, right) {
  let iterator = 0;

  while (left.length && right.length) {
    if (right[0] < left[0]) {
      array[iterator++] = right.shift();
    } else {
      array[iterator++] = left.shift();
    }
  }

  while (left.length) {
    array[iterator++] = left.shift();
  }

  while (right.length) {
    array[iterator++] = right.shift();
  }
}
