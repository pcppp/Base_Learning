const myMap = new WeakMap();
let my = {
  name: 'ljc',
  sex: '男',
};
myMap.set(my, 'info');
my = null;
setTimeout(() => {
  // console.log('After nulling my2:', [...myMap.entries()]);
}, 1000);
setTimeout(() => {
  console.log('After nulling my:', [myMap.get(my)]);
}, 1000);

const myMap2 = new Map();
let my2 = {
  name: 'ljc',
  sex: '男',
};
myMap2.set(my2, 'info');
my2 = null;
setTimeout(() => {
  console.log('After nulling my2:', [...myMap2.entries()]);
}, 1000);
setTimeout(() => {
  console.log('After nulling my2:', [myMap2.get(my2)]);
}, 1000);
