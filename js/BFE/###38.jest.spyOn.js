function spyOn(obj, methodName) {
  const calls = [];
  const originMethod = obj[methodName];
  if (typeof originMethod !== 'function') {
    throw new Error('not a function');
  }
  obj[methodName] = function (...args) {
    console.log(args);

    calls.push(args);
    return originMethod.apply(this, args); //### this指向的是originMethod调用时的this
  };
  //### 返回一个对象，包含 calls 属性
  return {
    get calls() {
      return calls; // 提供对调用记录的访问
    },
  };
}
