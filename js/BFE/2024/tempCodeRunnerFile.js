/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-18 15:58:35
 * @LastEditors: pccc 1326278155@qq.com
 * @LastEditTime: 2024-10-21 19:01:33
 */
function sum(num) {
  let sum = num;
  function cSum(arg) {
    sum = sum + arg;
    return arg ? cSum : cSum.valueOf();
  }
  cSum.valueOf = () => {
    return sum;
  };
  return cSum;
}
const sum1 = sum(1);
console.log(sum1(1) == 2);
console.log(sum1(2) == 3);
