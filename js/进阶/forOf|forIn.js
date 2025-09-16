// 用于遍历对象属性的 for..in 循环请见
// 用于遍历数组和可迭代对象的循环分别请见for of

const arr = [1, 2, 3];
const obj = { a: [1, 2, 3] };
console.log(arr instanceof Object);
for (let value of arr) {
  console.log(value);
}
// for (let { key, value } of arr) {
//   console.log(key);
//   console.log(value);
// }
// error obj is not iterable

// for (let value of obj) {
//   console.log(value);
// }
for (let value in arr) {
  console.log(value);
}
for (const [key, value] in obj) {
  console.log(value);
}
