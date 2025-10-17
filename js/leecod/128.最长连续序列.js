/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  nums.forEach((num) => {
    set.add(num);
  });
  let res = 0;
  nums.forEach((num) => {
    if (!set.has(num - 1)) {
      let i = 1;
      while (set.has(num + 1)) {
        i++;
        num++;
      }
      res = i > res ? i : res;
    }
  });
  return res;
};
