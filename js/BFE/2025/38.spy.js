/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  // your code here
  let calls = [];
  const originMethod = obj[methodName];
  if (typeof originMethod !== 'function') {
    throw new Error('not a function');
  }
  obj[methodName] = function (...args) {
    originMethod.apply(this, args);
    calls.push([...args]);
  };
  return {
    calls,
  };
}
const obj = {
  data: 1,
  increment(num) {
    this.data += num;
  },
};
const spy = spyOn(obj, 'increment');
obj.increment(1);
console.log(obj.data); // 2
obj.increment(2);
console.log(obj.data); // 4
console.log(spy.calls);
