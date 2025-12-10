// 给定两个已排序的数字数组，求这两个数组合并后的数组的中位数。
// 请尽可能优化该算法的时间复杂度和内存复杂度。

function findMedian(arrayA, arrayB) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arrayA.length && j < arrayB.length) {
    if (arrayA[i] < arrayB[j]) {
      mergedArray.push(arrayA[i]);
      i++;
    } else {
      mergedArray.push(arrayB[j]);
      j++;
    }
  }

  while (i < arrayA.length) {
    mergedArray.push(arrayA[i]);
    i++;
  }

  while (j < arrayB.length) {
    mergedArray.push(arrayB[j]);
    j++;
  }

  const mid = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
}
