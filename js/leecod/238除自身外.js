/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pre = Array(nums.length).fill(null);
  const beh = Array(nums.length).fill(null);
  const res = [];
  let left = 0;
  let right = nums.length - 1;
  pre[left] = nums[left];
  beh[right] = nums[right];
  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] * nums[i];
    beh[nums.length - 1 - i] = beh[nums.length - i] * nums[nums.length - i - 1];
  }
  console.log(pre);
  console.log(beh);
  res.push(beh[1]);
  for (let i = 1; i < nums.length - 1; i++) {
    res.push(pre[i - 1] * beh[i + 1]);
  }
  res.push(pre[nums.length - 2]);
  return res;
};
console.log(productExceptSelf([1, 2, 3, 4]));
