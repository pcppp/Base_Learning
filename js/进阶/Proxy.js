let a = {
  b: 1,
  c: 2,
};
const proxyA = new Proxy(a, {
  get(target, key) {
    console.log(target, key);
    return 1;
  },
});
console.log(proxyA.b);
