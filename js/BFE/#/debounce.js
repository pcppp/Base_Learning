function throttle(func, wait = 300, options = { leading: true, trailing: false }) {
  let lastInvokeTime = 0;
  let timer = null;

  let lastArgs = null;
  let lastThis = null;

  const leading = options.leading !== false;
  const trailing = options.trailing === true;

  function invoke(time) {
    lastInvokeTime = time;
    func.apply(lastThis, lastArgs);
    lastArgs = null;
    lastThis = null;
  }

  return function (...args) {
    const now = Date.now();

    lastArgs = args;
    lastThis = this;

    // 第一次触发，并且 leading=false，则不立即执行
    if (lastInvokeTime === 0 && leading === false) {
      lastInvokeTime = now;
    }

    const remaining = wait - (now - lastInvokeTime);

    // 已经到时间了，立即执行
    if (remaining <= 0) {
      // 关键：如果之前安排过 trailing，这里要取消，避免重复执行
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      invoke(now);
      return;
    }

    // 没到时间，并且允许 trailing，才安排最后一次执行
    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;

        // 如果这段时间内还有最后一次参数，就执行
        if (lastArgs) {
          invoke(Date.now());
        }
      }, remaining);
    }
  };
}
const debounce = (func, time = 3000, first = false) => {
  const timer = null;
  return (...args) => {
    const ctx = this;
    if (timer) clearTimeout(timer);
    if (first) {
      func.call(ctx, ...args);
      first = false;
      return;
    }
    timer = setTimeout(func.call(ctx, ...args), time);
  };
};
