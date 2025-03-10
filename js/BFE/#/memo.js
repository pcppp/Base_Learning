const memo = (func, resolver) => {
  let memoValue = new Map();
  const memoFunc = (...args) => {
    let key = resolver ? resolver(...args) : args.join(',');
    let res = memoValue.get(key);

    if (res) {
      return res;
    } else {
      res = func(...args);
      memoValue.set(key, res);
    }
  };
  return memoFunc;
};
const caculate = (a, b) => {
  console.log('caculate...');
  return a + b;
};
const memoCacukate = memo(caculate);
memoCacukate(1, 2);
memoCacukate(2, 1);
memoCacukate(2, 1);
