/*
假设我们有一个异步操作：
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 1000);
  });
}
编写一个 asyncToGenerator 生成器转换async函数 来模拟 async/await 的逻辑：
function* myGenerator() {
  const data = yield getData(); 
  console.log(data); // "Hello Async"
  return "Done";
}

其中*代表async,yield代表await

使用 asyncToGenerator 将生成器函数转换为异步函数：
const asyncFunc = asyncToGenerator(myGenerator);
*/
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello Async');
    }, 1000);
  });
}
function* myGenerator() {
  const data = yield getData();
  console.log(data); // "Hello Async"
  return 'Done';
}

function GeneratorToAsync(func) {
  return function () {
    const gen = func();
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let res;
        try {
          res = gen[key](arg);
          const { value, done } = res;
          if (done) {
            return resolve(value);
          } else {
            return Promise.resolve(value).then(
              (val) => step('next', val),
              (err) => step('throw', err)
            );
          }
        } catch (error) {
          return reject(error);
        }
      }
      step('next');
    });
  };
}

// 目标:
const asyncFunc = GeneratorToAsync(myGenerator);

// 执行异步函数
asyncFunc().then((result) => {
  console.log(result); // "Done"
});
