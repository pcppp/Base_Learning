function binarySearch(arr, target) {
  const middle = parseInt(arr.length / 2);
  if (target === arr[middle]) {
    return middle;
  } else if (arr.length === 1) {
    return -1;
  } else if (target > arr[middle]) {
    let res = binarySearch(arr.slice(middle + 1));
    return res !== -1 ? middle + res : -1;
  } else {
    let res = binarySearch(arr.slice(0, middle));
    return res !== -1 ? res : -1;
  }
}
