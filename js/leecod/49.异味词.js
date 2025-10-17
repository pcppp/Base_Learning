/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((str) => {
    const key = str.split('').sort.join('');
    map.set(key, [...(map.get(key) || []), str]);
  });
  const res = [];
  map.forEach((v, k) => {
    res.push(v);
  });
  return res;
};
console.log('cjs'.split('').sort().join(''));
