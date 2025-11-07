Function.prototype.bind = function (thisArg, ...args) {
  const fn = this;
  const fnProp = Symbol('fn');
  thisArg[fn] = fn;
  return (...nArgs) => {
    thisArg[fnProp](...[...args, ...nArgs]);
  };
};
