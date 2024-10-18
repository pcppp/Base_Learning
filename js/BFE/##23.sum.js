/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-18 15:58:35
 * @LastEditors: your name
 * @LastEditTime: 2024-10-18 17:59:10
 */
function sum(num) {
  let sum = num;
  function sssum(arg) {
    sum = sum + arg;
    return sum;
  }
  sssum.valueOf = () => {
    return num;
  };
  return sssum;
}
console.log(sum(1).valueOf());
