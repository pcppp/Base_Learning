function flat(arr, depth = 1) {
  let newArr = arr;
  for (let i = 0; i < depth; i++) {
    let tempArr = [];
    newArr.forEach((element) => {
      if (Array.isArray(element)) {
        tempArr.push(...element);
      } else {
        tempArr.push(element);
      }
    });
    newArr = tempArr;
  }
  return newArr;
}

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
function throttle(func, wait, option) {
  let waitting = false;
  let lastArg;
  let firstArg;
  let timer;
  return (...args) => {
    if (option.trailing) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (lastArg) func(lastArg);
        else waitting = false;
      }, wait);
    }
    if (waitting) {
      lastArg = args;
    } else {
      firstArg = args;
      if (option.leading) {
        func(args); // push to arr
        clearTimeout(timer);
      }
      setTimeout(() => {
        if (lastArg) func(lastArg);
        else waitting = false;
      }, wait);
      waitting = true;
    }
  };
}
