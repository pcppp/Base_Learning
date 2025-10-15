/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-10 14:06:35
 * @LastEditors: your name
 * @LastEditTime: 2024-10-10 16:31:55
 */
function memo(func, resolver) {
  // resolver用于将不同函数封装的内容存入不同的键,避免map的空间被占用的不规律
  // your code here
  function hash(args) {
    return resolver ? resolver(...args) : args.join(",");
  }

  clear: () => {
    map.clear();
  };
  map = new Map();
  return function (...args) {
    let mapData = hash(args);
    if (map.has(mapData)) {
      return map.get(mapData);
    } else {
      let res = func.call(this, ...args);
      map.set(mapData, res);
      return res;
    }
  };
}
