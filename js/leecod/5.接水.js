/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let p1 = 0,
    p2 = height.length - 1;
  let max = 0;
  while (p1 < p2) {
    const width = p2 - p1;
    max = Math.max(max, width * Math.min(height[p1], height[p2]));
    if (height[p1] > height[p2]) {
      p2--;
    } else {
      p1++;
    }
  }
  return max;
};
