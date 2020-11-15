
// breadth-first search with use recursion
function recur_walker(tree, min) {
   if(tree.value < min.value) {
      min = tree;
   }
  if (tree.childs != null) {
    for (let i = 0; i < tree.childs.length; ++i) {
      min = recur_walker(tree.childs[i], min);
    }
  }
  return min;
}

// breadth-first search with use while
function breadth_walker(tree) {
  let history = [];
  let current = {};
  let min = tree[0];
  while(tree.length > 0) {
    current = tree.shift();
    if(current.value < min.value) min = current;
    if(current.childs != null) {
      for(let i = 0; i < current.childs.length; ++i) {
        tree.push(current.childs[i]);
      }
    }
  }
  return min;
}

function get_node(tree, history) {
  let adress = 'tree[0]';
  for(let i = 0; i < history.length; ++i){
    adress = adress+'.childs['+history[i].toString()+']';
  }
  return eval(adress);
}

//depth first search with use while
function depth_walker(tree) {
  const history = [0];
  let current = tree[0];
  let min = current;
  while(history.length > 0) {
    if(current === undefined){
      history.pop();
      history[history.length-1]++;
      current = get_node(tree, history);
      continue;
    } else {
      if(current.value < min.value) {
        min = current;
      }
    }
    if(current.childs.length > 0) {
      history.push(0);
      current = get_node(tree, history);
      continue;
    }
    if(current.childs == null || current.childs.length < 1) {
      history[history.length-1]++;
      current = get_node(tree, history);
      continue;
    }
  }
  return min;
}
