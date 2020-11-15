const check_it = (name) => {
  if(name === undefined) return false;
  if(name === '') return false;
  const name_arr = name.split('');
  const last_char = name_arr[name_arr.length - 1];
  return last_char === 'm';
};

const search = (graph, start, check_it) => {
  const dequeue = [];
  const checked = {};
  dequeue.push(...graph[start]);
  while(dequeue.length) {
    const current = dequeue.shift();
    if(checked[current] === undefined) {  
      console.log(current);
      if(check_it(current)) {
        return current;
      } else {
        checked[current] = true;
        dequeue.push(...graph[current]);
      }
    }
  }

  return null;
};