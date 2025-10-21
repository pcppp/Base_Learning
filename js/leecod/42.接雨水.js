/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const map = new Map();
  height.forEach((item, index) => {
    const arr = map.get(item);
    map.set(item, [index, ...arr]);
  });
  height.map((v, index) => {
    return [v, index];
  });
  const sortList = height.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < height.length; i++) {
    if (sortList[i][0] === sortList[i + 1][0] || sortList[i][0] === sortList[i - 1][0]) {
      continue;
    } else {
      sortList[i][0] = sortList[++i][0];
    }
  }
};
