Object.defineProperty(Object.prototype, 'a', { value: 2, writable: false, configurable: true, enumerable: true });
myObject = {};
myObject.a = 13;
console.log('======= myObject.a =======\n', myObject.a);

function Foo() {
  // ...
}
Foo.prototype.constructor === Foo; // true
var a = new Foo();
a.constructor === Foo; // true
let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};
Object.defineProperty(hamster, 'stomach', { value: [], writable: false });
let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// 这只仓鼠找到了食物
speedy.eat('apple');
console.log(speedy.stomach); // apple
console.log(lazy.stomach); // apple
