const PENDING = 'pending'; // 状态: 等待中
const FULFILLED = 'fulfilled'; // 状态: 已完成
const REJECTED = 'rejected'; // 状态: 已拒绝

class MyPromise {
  #status = PENDING;
  #result = undefined;
  #handlers = [];

  constructor(execute) {
    let resovle = (data) => {
      if (this.#status !== 'PENDING') {
        this.#changeState(FULFILLED, data);
      }
    };
    let reject = (data) => {
      if (this.#status !== 'PENDING') {
        this.#changeState(REJECTED, data);
      }
    };
    try {
      execute(resovle, reject);
    } catch (error) {
      reject(error);
    }
  }
  #isPromiseLike(value) {
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
  #runOne(callBack, resovle, reject) {
    this.#runMicroTask(() => {
      if (typeof callBack === 'function') {
        try {
          const data = callBack(this.#result);
          if (this.#isPromiseLike(data)) {
            data.then(resovle, reject);
          } else {
            resovle(data);
          }
        } catch (error) {
          reject(error);
        }
      } else {
        const settled = this.#status === FULFILLED ? resovle : reject;
        settled(this.#result);
      }
    });
  }
  #run() {
    if (this.#status === PENDING) return;
    while (this.#handlers.length) {
      const { fulfilledCb, rejectedCb, resovle, reject } = this.#handlers.shift();
      if (this.#status === FULFILLED) {
        this.#runOne(fulfilledCb, resovle, reject);
      }
      if (this.#status === REJECTED) {
        this.#runOne(rejectedCb, resovle, reject);
      }
    }
  }

  #changeState(status, result) {
    this.#status = status;
    this.#result = result;
    this.#run();
  }
  then(fulfilledCb, rejectedCb) {
    return new MyPromise((resovle, reject) => {
      this.#handlers.push({ fulfilledCb, rejectedCb, resovle, reject });
      this.#run();
    });
  }
  static resolve(data) {
    let res, rej;
    const p = new MyPromise((_res, _rej) => {
      res = _res;
      rej = _rej;
    });
    if (p.#isPromiseLike(data)) {
      data.then(res, rej);
    } else {
      res(data);
    }
    return p;
  }
  static all(proms) {
    let res, rej;
    const p = new MyPromise((_res, _rej) => {
      res = _res;
      rej = _rej;
    });
    let i = 0;
    let result = [];
    let fulfilled = 0;
    for (const prom of proms) {
      const index = i;
      i++;
      MyPromise.resolve(prom).then(
        (resolve) => {
          result[index] = resolve;
          fulfilled++;
          if (fulfilled === i) {
            res(result);
          }
        },
        (reject) => {
          rej(reject);
        }
      );
    }
    if (i === 0) {
      res([]);
    }
    return p;
  }
}
const p1 = new MyPromise((resovle, reject) => {
  setTimeout(() => {
    resovle(1);
  });
});
const p2 = new MyPromise((resovle, reject) => {
  setTimeout(() => {
    resovle(2);
  });
});
const p3 = new MyPromise((resovle, reject) => {
  setTimeout(() => {
    resovle(3);
  });
});
MyPromise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
