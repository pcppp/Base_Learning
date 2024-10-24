let syb = Symbol();
let obj = {
  cObj: {
    a: 12,
    key: 20,
  },
  syb,
  [Symbol("hidden")]: "secret",
  key: 10,
};
let newObj = {};
let newNewObj = Object.create(obj);
let descriptor = Object.getOwnPropertyDescriptors(obj);
Object.defineProperties(newObj, descriptor); // 浅拷贝，仅在第一层将 属性的值、对象的引用 复制给newObj
console.log("descriptor :>> ", descriptor);
console.log("newObj :>> ", newObj);
