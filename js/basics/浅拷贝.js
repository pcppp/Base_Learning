// 深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象，是“值”而不是“引用”（不是分支）
// 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存（分支）。

// **************************************** 浅拷贝 ********************************************
let syb = Symbol();
let obj = {
  cObj: {
    a: 12,
    key: 20,
  },
  syb,
  key: 10,
};
let newObj = {};
let newNewObj = Object.create(obj);
let descriptions = Object.getOwnPropertyDescriptors(obj);
Object.defineProperties(newObj, descriptions); // 浅拷贝，仅在第一层将 属性的值、对象的引用 复制给newObj

newObj.key = 1; // 对于属性的值 永远都不会是复制引用，而是复制值
console.log('propCopy ->', obj.key);

newNewObj.cObj.a = 1; // 对于对象，浅拷贝会复制对于对象的引用
console.log('objCopy ->', obj.cObj.a);
console.log('----------------------------------------');
let a = [12, { a: 123 }];
let b = a.slice(0); // b是一个新数组，没有复制对a的引用，但是其中的对象仍然是一个引用(因为这个对象在a中就是一个引用)
let c = [...a]; // c与b一样
let d = a; // d是直接复制对于a数组的引用

b[1].a = 2;
console.log('b->', a[1]);
// c[1].a = 2;
console.log('c->', a[1]);
d[0] = 1;
console.log('d->', a[0]);
console.log('----------------------------------------');

// **************************************** 深拷贝 ********************************************
let deepCopy = JSON.parse(JSON.stringify(obj));
// 不是完美方案->如果对象中有方法或者继承自某个类（带有原型），这些都会丢失
deepCopy.cObj.a = 999;

console.log('obj->', obj.cObj.a); // 输出: 1（原对象不受影响）
console.log('deepObj ->', deepCopy.cObj.a); // 输出: 12（深拷贝被修改）

const copy = (obj) => {
  const keys = Object.keys(obj);
  const value = Object.values(obj);
};

// foo.key1 ==> 2
