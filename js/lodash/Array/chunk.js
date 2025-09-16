/* 创建一个元素数组，将元素拆分为大小相同的组。 如果数组不能平均分割，最后一个块将是剩余的元素。 */
/**
 * @description:
 * @param {*} arr 传入的数组
 * @param {*} size 分割的大小
 * @return {*} 返回新的块数组。
 */
function myChunk(arr, size) {
  const length = arr.length;
  if (!Array.isArray(arr)) return [];
  let i = 0;
  let resArr = [];
  while (i + size < length) {
    resArr.push(arr.slice(i, i + size));
    i = i + size;
  }
  resArr.push(arr.slice(i));
  return resArr;
}
console.log(myChunk([1, 2, 3], 3));
