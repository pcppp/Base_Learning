const promiseLimit = (arr, limit) => {
  let i = 0;
  let finished = 0;
  const results = new Array(arr.length);
  return new Promise((resolve, reject) => {
    const startTask = () => {
      if (i >= arr.length) return;
      const cur = i++;
      Promise.resolve()
        .then(arr[cur]())
        .then((res) => {
          finished++;
          results[cur] = res;
          if (finished === arr.length) {
            resolve(results);
          } else {
            startTask();
          }
        })
        .catch((err) => {
          reject(err);
        });
    };
    for (let i = 0; i < Math.min(arr.length, limit); i++) {
      startTask();
    }
  });
};
