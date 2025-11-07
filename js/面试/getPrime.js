/* 质数:
大于 1 的自然数中，除了 1 和它本身以外，不能被其他任何自然数整除的数
*/
const getPrime = (() => {
  let currentPrime = 1;

  return function () {
    while (true) {
      currentPrime++;
      let isPrime = true;
      for (let i = 2; i < currentPrime; i++) {
        if (currentPrime % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime && currentPrime > 1) {
        return currentPrime;
      }
    }
  };
})();
