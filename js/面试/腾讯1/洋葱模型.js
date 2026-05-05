class TinyKoa {
  constructor() {
    this.middlewares = []; // 存放中间件的数组
  }
  // 1. 注册中间件
  use(fn) {
    this.middlewares.push(fn);
  }
  // 2. 核心：执行组合逻辑
  callback(req, res) {
    // 将中间件数组组合成一个大的函数
    const fn = compose(this.middlewares);
    return fn(req, res);
  }
}

function compose(middlewares) {
  return function (req, res) {
    // 从第一个中间件开始执行
    return dispatch(0);

    function dispatch(i) {
      let fn = middlewares[i];

      // 如果所有中间件执行完了，返回一个 Resolved 的 Promise
      if (!fn) return Promise.resolve();

      try {
        // 【关键点】递归执行下一个
        // 这里把 dispatch(i + 1) 包装成 next 传给当前中间件
        return Promise.resolve(fn(req, res, () => dispatch(i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
