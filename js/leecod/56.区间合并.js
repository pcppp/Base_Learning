var merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let left = 0,
    right = 1;
  const res = [];
  let currentRes = null;
  while (right < intervals.length) {
    const vLR = intervals[left][1];
    const vLL = intervals[left][0];
    const vRL = intervals[right][0];
    const vRR = intervals[right][1];
    if (vLR >= vRL) {
      currentRes = [Math.min(vLL, vRL), Math.max(vLR, vRR)];
      intervals[right] = currentRes;
    } else {
      res.push([vLL, vLR]);
      currentRes = null;
    }
    left++, right++;
  }
  if (currentRes) res.push(currentRes);
  else res.push(intervals[right - 1]);
  return res;
};
console.log(
  merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
  ])
);
