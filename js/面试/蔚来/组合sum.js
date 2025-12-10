// 给出一个数,通过不同的拆分方法有不同的和,111可以拆为1,1,1或者11,1或者111,输出一共有多少种和
const sumType = (num) => {
  const set = new Set();
  const foo = (currentSum, num) => {
    const arr = String(num);
    set.add(Number(num) + currentSum);
    for (let i = 1; i < arr.length; i++) {
      const num1 = arr.slice(0, i);
      const num2 = arr.slice(i);
      const newCurrentSum = currentSum + Number(num1);
      foo(newCurrentSum, num2);
    }
  };
  foo(0, num);
  return set;
};

console.log(sumType(1111));
