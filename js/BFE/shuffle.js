function shuffle2(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let random = parseInt(Math.random() * 1e16) % (arr.length - i);
    res.push(arr[random]);
    arr[random] = arr[arr.length - 1 - i];
  }
  res.push(arr[0]);
  console.log(res);
  return res;
}
function shuffle1(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
// 所有可能排列的出现次数
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  let array1 = shuffle2(array);
  count[array1.join("")]++;
}

// 显示所有可能排列的出现次数
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
