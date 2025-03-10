const sum = (dataS) => {
  const add = (data) => {
    return sum(dataS + data);
  };
  add.valueOf = () => dataS;
  return add;
};
const sum1 = sum(1);
console.log(
  sum1(2), // true
  sum1(3), // true
  sum(1)(2)(3), // true
  sum(5)(-1)(2)
);
