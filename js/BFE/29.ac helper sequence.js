/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  // your code here

  return (callback, initData) => {
    let index = 0;
    const next = (error, data) => {
      if (error) {
        callback(error, data);
      }
      if (index >= funcs.length) {
        callback(undefined, data);
      } else {
        const func = funcs[index++];
        func(next, data);
      }
    };
    if (funcs.length !== 0) {
      next(undefined, initData);
    }
  };
}
