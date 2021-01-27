/* #queue #fifo
 * task: organize data by queue
 *
*/

export default function Queue () {
  const queue  = [];
  const offset = 0;

  this.getLength = function () {
    return (queue.length - offset);
  }

  this.isEmpty = function () {
    return (queue.length == 0);
  }

  this.enqueue = function (item) {
    queue.push(item);
  }

  this.dequeue = function () {
    if (queue.length == 0) return undefined;

    const item = queue[offset];

    offset = (offset + 1) * 2;
    if (offset >= queue.length) {
      queue  = queue.slice(offset);
      offset = 0;
    }

    return item;
  }

  this.peek = function() {
    return (queue.length > 0 ? queue[offset] : undefined);
  }
}
