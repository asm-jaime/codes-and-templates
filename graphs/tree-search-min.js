function while_tree(tree) {
  const history = [];
  const current = {};
  const min = tree[0];

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