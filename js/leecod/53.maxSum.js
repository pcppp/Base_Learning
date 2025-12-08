var maxSubArray = function (nums) {
  let res = nums[0];
  nums.reduce((pre, current) => {
    pre = Math.max(pre, pre + current);
    res = Math.max(pre, res);
    console.log(pre, res);
    return pre;
  }, 0);
  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
