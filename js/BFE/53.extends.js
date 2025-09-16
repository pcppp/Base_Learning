function SuperType(name) {
  this.name = name;
  this.forSuper = [1, 2];
  this.from = 'super';
}
SuperType.prototype.superMethod = function () {};
SuperType.prototype.method = function () {};
SuperType.staticSuper = 'staticSuper';
function SubType(name) {
  this.name = name;
  this.forSub = [3, 4];
  this.from = 'sub';
}
SubType.prototype.subMethod = function () {};
SubType.prototype.method = function () {};
SubType.staticSub = 'staticSub';

const InheritedSubType = myExtends(SuperType, SubType);
const instance1 = new InheritedSubType();
// 上述代码需要(几乎)和下面的一样
// class SubType extends SuperType {}
// const instance2 = new SubType();

function myExtends(SuperType, SubType) {
  InheritSubType.prototype = SubType.prototype;
  function InheritSubType(...args) {
    SuperType.call(this, ...args);
    SubType.call(this, ...args);
    return this;
  }
  Object.setPrototypeOf(InheritSubType.prototype, SuperType.prototype);
  Object.setPrototypeOf(InheritSubType, SuperType);
  return InheritSubType;
}

const ExtendedType = myExtends(SuperType, SubType);
const instance = new ExtendedType('bfe');
console.log(instance.__photo__);
