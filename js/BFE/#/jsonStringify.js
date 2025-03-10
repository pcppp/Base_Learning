const MyStringify = (obj) => {
  let resString = '';
  console.log(JSON.stringify({ a: 1, b: 2, c: [1, 2, 3] }));
  const type = Object.prototype.toString.call(this, obj).split(' ')[1].slice(0, -1);
  console.log(type);
};
MyStringify({ a: 1, b: 2, c: [1, 2, 3] });
