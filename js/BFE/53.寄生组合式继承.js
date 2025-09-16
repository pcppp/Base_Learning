function Parent(name) {
  this.name = name;
}

Parent.sayHello = function () {
  console.log('hello');
};

Parent.prototype.sayName = function () {
  console.log('my name is ' + this.name);
  return this.name;
};

function Child(name, age) {
  this.name = name;
  this.age = age;
}

function _inherits(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.__proto__ = Parent;
}
_inherits(Child, Parent);

Child.prototype.sayAge = function () {
  console.log('my age is ' + this.age);
  return this.age;
};

var parent = new Parent('Parent');
var child = new Child('Child', 18);
console.log(parent);
Parent.sayHello();
parent.sayName();
console.log(child);
Child.sayHello();
child.sayAge();
child.sayName();
