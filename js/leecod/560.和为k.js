/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const prefixArray = [];
  const prefixMap = new Map();
  prefixArray.push(0);
  prefixMap.set(0, 1);
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    const prefix = prefixArray[i] + nums[i];
    prefixArray.push(prefix);
    const targetItemsNum = prefixMap.get(prefix - k) || 0;
    len += targetItemsNum;
    const prefixItemsNum = prefixMap.get(prefix) || 0;
    prefixMap.set(prefix, prefixItemsNum + 1);
  }
  return len;
};
console.log(subarraySum([1], 0));
