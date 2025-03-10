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
function sequence(asyncFuncs) {
  return function (callback, initialData) {
    // 定义一个递归函数来处理每个异步函数
    const executeNext = (index, data) => {
      if (index >= asyncFuncs.length) {
        // 所有函数执行完毕，调用最终回调
        return callback(null, data);
      }

      // 获取当前要执行的函数
      const currentFunc = asyncFuncs[index];
      // 执行当前函数，并传入回调
      currentFunc((error, result) => {
        if (error) {
          // 如果发生错误，调用最终回调并传入错误
          return callback(error, null);
        }
        // 递归调用下一步
        executeNext(index + 1, result);
      }, data);
    };

    // 开始执行链式调用
    executeNext(0, initialData);
  };
}
