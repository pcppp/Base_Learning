const myPipeLine = (...args) => {
  return (cb, num) => {
    args.push(cb);
    args.reduce((chain, pipe) => {
      chain.then(() => pipe(null, num));
    }, Promise.resolve(null));
  };
};
const asyncTimes2 = (callback, num) => {
  setTimeout(() => {
    null, num * 2;
  }, 100);
};
