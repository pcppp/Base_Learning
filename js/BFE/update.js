/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-09 20:18:58
 * @LastEditors: your name
 * @LastEditTime: 2024-10-09 20:44:32
 */
/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  if (Object.keys(command)[0] === "$push") {
    return [...data, ...Object.values(command)[0]];
  } else if (Object.keys(Object.values(command)[0])[0] === "$set") {
    let newArr = [...data];
    newArr[Object.keys(command)[0]] = Object.values(
      Object.values(command)[0]
    )[0];
    return newArr;
  } else if (Object.keys(Object.values(command)[0])[0] === "$apply") {
    const apply = Object.values(Object.values(command)[0])[0];
    let newArr = [...data];
    newArr[Object.keys(command)[0]] = apply(data[Object.keys(command)[0]]);
    return newArr;
  } else {
    return null;
  }
}

function update(data, command) {
  for (const [key, value] of Object.entries(object1)) {
  }
  if (Object.keys(command)[0] === "$push") {
    return [...data, ...Object.values(command)[0]];
  } else if (Object.keys(Object.values(command)[0])[0] === "$set") {
    let newArr = [...data];
    newArr[Object.keys(command)[0]] = Object.values(
      Object.values(command)[0]
    )[0];
    return newArr;
  } else if (Object.keys(Object.values(command)[0])[0] === "$apply") {
    const apply = Object.values(Object.values(command)[0])[0];
    let newArr = [...data];
    newArr[Object.keys(command)[0]] = apply(data[Object.keys(command)[0]]);
    return newArr;
  } else {
    return null;
  }
}
const arr = [1, 2, 3, 4];
const newArr = update(arr, { 0: { $apply: (item) => item * 2 } });
console.log("newArr :>> ", newArr);
