// #objectiterationbyorder #objectordering

const object = {
  'first': '3x',
  'second': '1x',
  'third': '2x',
  'order': ['second', 'third', 'first'],
};

for (const key of object.order) {
  object[object.order[key]];
}