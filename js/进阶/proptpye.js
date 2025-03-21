Object.defineProperty(Object.prototype, 'a', { value: 2, writable: false, configurable: true, enumerable: true });
myObject = {};
myObject.a = 13;
console.log('======= myObject.a =======\n', myObject.a);
