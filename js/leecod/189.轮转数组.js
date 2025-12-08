var rotate1 = function (nums, k) {
  const arr1 = nums.slice(0, nums.length - k);
  const arr2 = nums.slice(nums.length - k);

  return arr2.concat(arr1);
};
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
