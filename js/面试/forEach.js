Array.prototype.MyforEach = function (cb) {
  const _this = this;
  let i = 0;
  for (const element of this) {
    if (element === void 0) {
      i++;
      continue;
    }
    cb(element, i, _this);
    i++;
  }
};

[1, , , 2, 3].forEach((item, index) => {
  console.log(index);
});
