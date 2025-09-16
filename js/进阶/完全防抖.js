// 非立即执行防抖
function debounce(func, time) {
  let timer = null;
  return function handleDebounce(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, ...args), time);
  };
}
// 立即执行防抖
function debounce(func, time) {
  let timer = null;
  return function handleDebounce(...args) {
    if (timer) clearTimeout(timer);
    let callNow = !timer;
    timer = setTimeout(() => func.apply(this, args), time);
    if (callNow) func.apply(this, param);
  };
}
