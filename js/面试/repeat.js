function repeat(func, times, wait) {
  let currentTimes = 0;
  const timer = setInterval(() => {
    func();
    currentTimes++;
    if (currentTimes >= times) {
      clearInterval(timer);
    }
  }, wait);
}
repeat(
  () => {
    console.log('hello');
  },
  4,
  4000
);
