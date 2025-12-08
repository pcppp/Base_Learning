/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  // your code here
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      res([]);
      return;
    }
    let finished = 0;
    const results = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (result) => {
          results[index] = result;
          if (++finished === promises.length) {
            res(results);
          }
        },
        (error) => {
          rej(error);
        }
      );
    });
  });
}
