var twoSum = function (nums, target) {
  const map = new Map();
  let res;
  nums.forEach((num, index) => {
    map.set(num, index);
  });
  nums.forEach((num, index) => {
    const resMap = map.get(target - num);
    if (resMap === index) return;
    if (resMap) res = [index, resMap];
  });
  return res;
};
console.log(twoSum([2, 7, 11, 15], 9));
