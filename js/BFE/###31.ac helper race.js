function race(funcs) {
  // your code here
  let hasError = false;
  let isHandled = false;
  return (callback, data) => {
    funcs.forEach((func, index) => {
      func((err, res) => {
        if (isHandled) {
          // 最好前置，这样逻辑结构更为清晰
          return;
        }
        isHandled = true;
        if (hasError) {
          return;
        }
        if (err) {
          hasError = true;
          callback(err, undefined);
          return;
        }
        callback(undefined, res);
      }, data);
    });
  };
}
