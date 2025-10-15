function special_throttle(func, wait, option) {
  let waitting = false;
  let lastArg;
  return (...args) => {
    if (waitting) {
      lastArg = args;
    } else {
      func(args); // push to arr
      waitting = true;
      setTimeout(() => {
        if (lastArg) func(lastArg);
        else waitting = false;
      }, wait);
    }
  };
}
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let waitting = false;
  let lastArg;
  function setTimer() {
    setTimeout(() => {
      if (lastArg && option.trailing) {
        func.call(this, lastArg);
        lastArg = null;
        setTimer();
      } else {
        waitting = false;
      }
    }, wait);
  }
  return (...args) => {
    if (waitting) {
      lastArg = args;
    } else {
      waitting = true;
      if (option.leading) {
        func.call(this, args); // push to arr
      } else {
        lastArg = args;
      }
      setTimer();
    }
  };
}
