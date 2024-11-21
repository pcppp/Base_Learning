function butterMergeSort() {
  if (arr.length < 2) return;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  mergeSort(left);
  mergeSort(right);
  let l = 0,
    r = 0;
  while (l < left.length || r < right.length) {
    if (r == right.length || (l < left.length && left[l] <= right[r]))
      arr[l + r] = left[l++];
    else arr[l + r] = right[r++];
  }
}
function mergeSort(arr) {
  function initArr(arr) {
    return arr.map((item) => [item]);
  }
  function setGroup(arr) {
    let res = [];
    let i = 1;
    while (i < arr.length) {
      res.push([arr[i - 1], arr[i]]);
      i += 2;
    }
    if (arr.length % 2 === 1) {
      res.push([arr[arr.length - 1], []]);
    }
    return res;
  }
  function mergeArr(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let res = [];

    while (index1 < arr1.length && index2 < arr2.length) {
      if (arr1[index1] < arr2[index2]) {
        res.push(arr1[index1++]);
      } else {
        res.push(arr2[index2++]);
      }
    }

    if (index1 !== arr1.length) {
      res.push(...arr1.slice(index1));
    }
    if (index2 !== arr2.length) {
      res.push(...arr2.slice(index2));
    }
    console.log(res);

    return res;
  }
  let spiltedArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    spiltedArr = initArr(arr);
    spiltedArr = setGroup(spiltedArr);
  }

  while (spiltedArr.length > 1) {
    spiltedArr = spiltedArr.map((item) => mergeArr(item[0], item[1]));
    spiltedArr = setGroup(spiltedArr);
  }
  spiltedArr = mergeArr(spiltedArr[0][0], spiltedArr[0][1]);

  return spiltedArr;
}
