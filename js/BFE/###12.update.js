/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-09 20:18:58
 * @LastEditors: your name
 * @LastEditTime: 2024-10-10 11:15:34
 */
/**
 * @param {any} data
 * @param {Object} command
 */

function update(data, command) {
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case "$push":
        return [...data, ...value];
        break;
      case "$set":
        return value;
        break;
      case "$merge":
        if (data instanceof Object) return { ...data, ...value };
        else throw new Error("");
        break;
      case "$apply":
        return value(data);
      default:
        data[key] = update(data[key], value);
    }
  }
  return data;
}
const arr = [1, 2, 3, 4];
const newArr = update([1], { 0: { $apply: (item) => item * 2 } });
console.log("newArr :>> ", newArr);

// const body = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let [key, value] = Object.entries(body);

// console.log("key :>> ", key);
// console.log("value :>> ", value);
console.log(
  "Object.prototype.toString({a}) :>> ",
  Object.prototype.toString([21, 12])
);
console.log(
  "Object.prototype.toString({a}) :>> ",
  Object.prototype.toString.call([21, { a: 12, b: [] }])
);
