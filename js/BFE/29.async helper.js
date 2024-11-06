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
  let i = 0;
  // your code here
  return (callback, data) => {
    if (i < funcs.length) {
      funcs[i](callback, data);
    }
  };
}
