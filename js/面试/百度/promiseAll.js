Promise.prototype.myPromiseAll = (arr) => {
  let finished = 0;
  let results = new Array(arr.length);
  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          finished++;
          results[index] = res;
          if (finished === arr.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
