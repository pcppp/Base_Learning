function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer;
  let waitting = false;
  return (...arg) => {
    if (waitting) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (option.trailing) {
          func.call(this, arg);
        }
        waitting = false;
      }, wait);
    } else {
      if (option.leading) {
        func.call(this, arg);
      } else {
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (option.trailing) {
            func.call(this, arg);
          }
          waitting = false;
        }, wait);
      }
    }
    waitting = true;
  };
}
