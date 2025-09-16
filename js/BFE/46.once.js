function func(num) {
  return num;
}
const onced = once(func);
onced(1);
// 1
onced(2);
// 1，因为已经调用过了，前一次的结果被直接返回
function once(func) {
  const none = Symbol('none');
  const memoFunc = new WeakMap();
  memoFunc.set(func, none);
  return function (...args) {
    const _this = this;
    const res = memoFunc.get(func);
    if (res !== none) {
      return res;
    } else {
      const funcRes = func.apply(_this, args);
      memoFunc.set(func, funcRes);
      return funcRes;
    }
  };
}
