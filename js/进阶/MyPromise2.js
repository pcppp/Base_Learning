FULFILLED = 'fulFilled';
PENDING = 'pending';
REJECTED = 'rejected';
class MyPromise {
  #state = PENDING;
  #result = undefined;
  #handlers = [];
  resolve = (data) => {
    this.#changeState(FULFILLED, data);
  };
  reject = (reason) => {
    this.#changeState(REJECTED, reason);
  };
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  then(onResolve, onReject) {
    const promise = new MyPromise((resolve, reject) => {
      this.#handlers.push({
        reject,
        resolve,
        onResolve,
        onReject,
      });
      this.#run();
    });
    return promise;
  }
  #changeState(state, data) {
    if (this.#state !== PENDING) {
      return;
    }
    this.#state = state;
    this.#result = data;
    this.#run();
  }
  #run() {
    if (this.#state === PENDING) {
      return;
    }
    while (this.#handlers.length) {
      const { reject, resolve, onResolve, onReject } = this.#handlers.shift();
      if (this.#state === FULFILLED) {
        this.#runOne(onResolve, resolve, reject);
      } else {
        this.#runOne(onReject, resolve, reject);
      }
    }
  }
  #runOne(fn, resolve, reject) {
    try {
      this.#runMicroTask(() => {
        const result = fn(this.#result);
        if (this.#isPromiseLike(fn)) {
          fn.then(result);
        } else {
          resolve(this.#result);
        }
      });
    } catch (error) {
      reject(this.#result);
    }
  }
  #isPromiseLike(value) {
    // 检查是否是类 Promise 对象的私有方法
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      return typeof value.then === 'function';
    }

    return false;
  }
  #runMicroTask(func) {
    // 运行微任务的私有方法
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(func); // Node.js 环境中使用 process.nextTick
    } else if (typeof MutationObserver === 'function') {
      const ob = new MutationObserver(func); // 浏览器环境中使用 MutationObserver
      const textNode = document.createTextNode('1');
      ob.observe(textNode, { characterData: true });
      textNode.data = '2';
    } else {
      setTimeout(func, 0); // 最后使用 setTimeout
    }
  }
}
const promise = new MyPromise((res, rej) => {
  console.log('1');
  res(0);
}).then((res) => {
  console.log(res);
});
