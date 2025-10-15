const arr = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

const rotateLog = (arr) => {
  if (!Array.isArray(arr)) return;
  let top = 0,
    left = 0,
    bottom = arr.length - 1,
    right = arr[0].length - 1;
  for (;;) {
    for (let i = left; i <= right; i++) {
      console.log(arr[top][i]);
    }
    top++;
    if (top > bottom) break;
    for (let j = top; j <= bottom; j++) {
      console.log(arr[j][right]);
    }
    right--;
    if (right < left) break;
    for (let i = right; i >= left; i--) {
      console.log(arr[bottom][i]);
    }
    bottom--;
    if (bottom < top) break;
    for (let j = bottom; j >= top; j--) {
      console.log(arr[j][left]);
    }
    left++;
    if (left > right) break;
  }
};
rotateLog(arr);
