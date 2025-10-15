function objectAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new Error('Not an object');
  }

  if (typeof target !== `object`) {
    target = new target.__proto__.constructor(target);
  }

  for (const source of sources) {
    // 非严格等于时，undefined等于null
    if (source == null) {
      continue;
    }
    for (item in source) {
      console.log('item', item, source[item]);
    }
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    console.log('------------------------------>', Object.getOwnPropertyDescriptors(source));
    for (const symbol of Object.getOwnPropertySymbols(source)) {
      target[symbol] = source[symbol];
    }
  }
  return target;
}
let source = {
  [Symbol(1)]: 'pc',
  b: 3,
};
let target1 = {},
  target2 = {};
objectAssign(target1, source);
Object.assign(target2, source);
console.log('target1 :>> ', target1);
console.log('target2 :>> ', target2);
