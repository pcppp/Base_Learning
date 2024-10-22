/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-18 15:58:35
 * @LastEditors: pccc 1326278155@qq.com
 * @LastEditTime: 2024-10-21 19:08:26
 */
function sum(num) {
  function cSum(arg) {
    return sum(num + arg);
  }
  cSum.valueOf = () => num;
  return cSum;
}
const sum1 = sum(1);
