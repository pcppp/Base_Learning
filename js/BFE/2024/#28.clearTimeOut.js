// 通过写wrapper来实现自己存储一个TimeoutId
(() => {
  let timers = new Set();
  let OriginClearTimeOut = clearTimeout;
  let OriginSetTimeOut = setTimeout;
  window.clearAllTimeout = () => {
    for (const timerId of timers) {
      clearTimeout(timerId);
    }
  };
  window.setTimeout = (callBack, time, ...arg) => {
    let timeId = OriginSetTimeOut(
      () => {
        callBack(...arg);
        clearTimeout(timeId);
      },
      time,
      ...arg
    );
    timers.add(timeId);
    return timeId;
  };
  window.clearTimeout = (timeId) => {
    OriginClearTimeOut(timeId);
    timers.delete(timeId);
  };
})();
() => {}; // 定义一个函数
(() => {})(); // 定义一个函数并且立即执行
