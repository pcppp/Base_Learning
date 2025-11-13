Function.prototype.bind = function (thisArg, ...args) {
  const fn = this;

  const boundFn = function (...nArgs) {
    // 检查是否用 new 调用
    if (this instanceof boundFn) {
      return new fn(...args, ...nArgs);
    }
    return fn.call(thisArg, ...args, ...nArgs);
  };

  // 继承原型
  boundFn.prototype = Object.create(fn.prototype);
  return boundFn;
};
