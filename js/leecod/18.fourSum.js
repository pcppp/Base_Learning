/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res = [];
  // 最后三个不需要循环
  for (let k = 0; k < n - 3; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    if (nums[k] + nums[0] + nums[1] + nums[2] > target) break;
    if (nums[k] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;
    for (let i = k + 1; i < nums.length; i++) {
      if (nums[k] + nums[i] + nums[1] + nums[0] > target) break;
      if (nums[k] + nums[i] + nums[n - 1] + nums[n - 2] < target) continue;
      if (i > k + 1 && nums[i] === nums[i - 1]) continue;
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right] + nums[k];
        if (sum === target) {
          res.push([nums[i], nums[left], nums[right], nums[k]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
};
