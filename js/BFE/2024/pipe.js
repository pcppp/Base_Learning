/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-09 20:09:39
 * @LastEditors: your name
 * @LastEditTime: 2024-10-09 20:12:27
 */
function pipe(funcs) {
  return (x) => {
    for (item of funcs) {
      x = item(x);
    }
    return x;
  };
}
