import dijkstra from './dijkstra.js';
import testing from '../lang-js/testing.js';

const func = get_one_mutation;

const tests = [
  [[
    {'start': {'a': 6, 'b': 2}, 'a': {'fin': 1}, 'b': {'a': 3, 'fin': 5}, 'fin': {}},
    {'a': 6, 'b': 2, 'fin': Infinity},
    {'a':'start', 'b': 'start', 'fin': null})
  ],[
  ]],
];

testing(tests, func);
