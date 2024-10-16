const mySymbol = Symbol();
const obj = {
    [mySymbol]: 'Hello'
};
console.log(obj[mySymbol]); // 输出 'Hello'
obj[mySymbol] = 'pc'
console.log(obj[mySymbol]); // 输出 'pc'

const COLOR_RED = Symbol('Red');// Red为描述符，它仅增强了 Symbol 的可读性和可理解性
const COLOR_WRITE = Symbol('#000');// 这样是有问题的，#000为描述符，无法使用
const COLOR_BLUE = Symbol('Blue');


let s2 = Symbol.for('sym');
let s3 = Symbol.for('sym');

console.log(s2 === s3); // 输出: false，s2 和 s3 是两个独立的 Symbol 实例