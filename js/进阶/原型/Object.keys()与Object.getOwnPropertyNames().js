const obj = { a: 123, b: 456, [Symbol('a')]: 123 };

Object.defineProperty(obj, 'c', { value: 789, enumerable: false });
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Reflect.ownKeys(obj));
