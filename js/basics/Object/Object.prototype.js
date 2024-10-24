/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-10 11:29:52
 * @LastEditors: your name
 * @LastEditTime: 2024-10-10 12:39:19
 */
const obj = {
  name: "Alice",
  age: 25,
};
const arr = [1, 2, 3, 5];
// 使用 toString() 方法
console.log(obj.toString()); // 输出: "[object Object]"
console.log(arr.toString()); // 输出: "1,2,3,5"

// 使用 hasOwnProperty() 方法,检查私有属性，不检查原型链上的
console.log(obj.hasOwnProperty("name")); // 输出: true
console.log(obj.hasOwnProperty("gender")); // 输出: false

console.log(obj.isPrototypeOf("name")); // 输出: true
console.log(obj.hasOwnProperty("gender")); // 输出: false

console.log(
  'Object.prototype.toString.call("ss1") :>> ',
  Object.prototype.toString.call("ss1")
);
console.log(
  'Object.prototype.toString.call("ss1") :>> ',
  Object.prototype.toString.call("ss1")
);
