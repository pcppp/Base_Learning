var findAnagrams = function (s, p) {
  const res = [];
  const p_arr = new Array(26).fill(0);
  const x_arr = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    ++x_arr[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++p_arr[p[i].charCodeAt() - 'a'.charCodeAt()];
    console.log(x_arr);
  }
  if (x_arr.toString() === p_arr.toString()) {
    res.push(0);
  }
  for (let i = 0; i < s.length - p.length; i++) {
    --x_arr[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++x_arr[s[i + p.length].charCodeAt() - 'a'.charCodeAt()];
    if (x_arr.toString() === p_arr.toString()) {
      res.push(i + 1);
    }
  }
  return res;
};
console.log(findAnagrams('cbaebabacd', 'abc'));
