/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  let remain = promises.length;
  let lastResult = Array(promises.length).fill(null);
  let lastError;

  return new Promise((resolve, reject) => {
    if (remain === 0) {
      resolve(lastResult);
    }
    promises.forEach((promise, index) => {
      // Promise.resolve(item)确保item是一个Promise，
      // 如果是就返回这个promise
      Promise.resolve(promise).then(
        (result) => {
          lastResult[index] = result;
          remain--;
          if (remain === 0) {
            resolve(lastResult);
          }
        },
        (error) => {
          if (!lastError) {
            lastError = error;
            reject(lastError);
          }
        }
      );
    });
  });
}
