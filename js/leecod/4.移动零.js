/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let p1 = 0,
    p2 = 0;
  const change = (a, b) => {
    const t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
  };
  while (p1 < nums.length) {
    const item = nums[p1];
    if (item === 0) {
      p1++;
    } else {
      change(p1++, p2++);
    }
  }
  return nums;
};
