const spyOn = (obj, functionKey) => {
  const calls = [];
  let func = obj[functionKey];
  if (typeof func !== 'function') {
    throw new Error('not a function');
  }
  obj[functionKey] = function (...args) {
    calls.push(args);
    func.apply(this, args);
  };
  return {
    get calls() {
      return calls;
    },
  };
};

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
