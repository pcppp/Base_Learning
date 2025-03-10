function parallel(funcs) {
  // your code here
  let hasError = false;
  let sum = 0;
  let result = Array(funcs.length).fill(null);
  return (callback, data) => {
    funcs.forEach((func, index) => {
      func((err, data) => {
        if (hasError) {
          return;
        }
        if (err) {
          hasError = true;
          callback(err, undefined);
          return;
        }
        if (sum < funcs.length - 1) {
          result[index] = data;
          sum++;
        } else {
          result[index] = data;
          callback(undefined, result);
        }
      }, data);
    });
  };
}
