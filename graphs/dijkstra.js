/* #dijkstra #dijka #sijka
 * task:
 *
*/

const find_lowest_cost_node = (costs, processed) => {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;

  const keys = Object.keys(costs);   
  for (let i = 0; i < keys.length; ++i) {
    if (lowest_cost > costs[keys[i]] && processed[keys[i]] === undefined) {
      lowest_cost = costs[keys[i]];
      lowest_cost_node = keys[i];
    }
  }

  return lowest_cost_node;
};

export default function dijkstra (graph, costs, parents) {
  const processed = {};

  let node = find_lowest_cost_node(costs, processed);

  while (node !== null) {

    const cost = costs[node];
    const nearby = graph[node];
    
    const nearby_keys = Object.keys(nearby);
    for (let i = 0; i < nearby_keys.length; ++i) {
      const new_cost = cost + nearby[nearby_keys[i]];

      if (new_cost < costs[nearby_keys[i]]) {
        costs[nearby_keys[i]] = new_cost;
        parents[nearby_keys[i]] = node;
      }
    }
    processed[node] = true;
    node = find_lowest_cost_node(costs, processed);
  }

  return parents;
}
