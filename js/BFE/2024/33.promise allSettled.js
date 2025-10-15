function allSettled(promises) {
  let remain = promises.length;
  let lastResult = Array(promises.length).fill(null);
  return new Promise((resolve, reject) => {
    if (remain === 0) {
      resolve(lastResult);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          lastResult[index] = { status: 'fulfilled', value: result };
        })
        .catch((err) => {
          lastResult[index] = { status: 'rejected', reason: err };
        })
        .finally(() => {
          remain--;
          if (remain === 0) {
            resolve(lastResult);
          }
        });
    });
  });
}
