function race(promises) {
  let hasFinish = false;
  return new Promise((resolve, reject) => {
    if (!promises) {
      resolve('');
    }
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => {
          if (hasFinish) {
            return;
          }
          hasFinish = true;
          resolve(result);
        })
        .catch((error) => {
          if (hasFinish) {
            return;
          }
          hasFinish = true;
          reject(error);
        });
    });
  });
}
