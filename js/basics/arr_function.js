/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-10 08:59:40
 * @LastEditors: your name
 * @LastEditTime: 2024-10-10 12:57:11
 */
function camelize(str) {
  newStr = str.split("-");
  newStr.forEach((item, index, array) => {
    if (index !== 0) {
      item = item[0].toUpperCase() + item.slice(1);
    }
    array[index] = item;
  });
  return newStr.join("");
}
console.log(camelize("background-color")); // == 'backgroundColor';

let arrr = [5, 3, 8, 1];
arrr.forEach((item, index, array) => {
  item = 3;
  array[index] = 5;
  item = 3;
});
console.log(arrr.join());

function filterRange(arr, a, b) {
  return arr.filter((item) => {
    return item >= a && item <= b;
  });
}
let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
console.log(filtered); // 3, 1 (matching values)

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // 删除了范围在 1 到 4 之外的所有值
console.log(arr2); // [3, 1]

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => a - b);
console.log(arr3); // 8, 5, 2, 1, -10

function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
