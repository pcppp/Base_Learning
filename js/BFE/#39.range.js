function range(from, to) {
  length = to - from + 1;
  let arr = Array(length).fill(null);
  const res = arr.map((item, index) => from + index);
  return res;
}
// 2. implement iterable/iterator protocol
// for ... of uses interable protocol
// [Symbol.iterator]: () =>  Iterator
// next: () => {done: bolean, value?: any}
function range(from, to) {
  return {
    // 可迭代协议:任何对象只要实现了 [Symbol.iterator]() 方法，就被认为是可迭代的
    [Symbol.iterator]() {
      // 迭代器协议：返回的对象需要有一个 next() 方法，该方法返回一个包含 value 和 done 属性的对象。value 是当前迭代的值，done 表示是否还有更多的值可供迭代。
      return {
        next() {
          return {
            done: from > to,
            value: from++,
          };
        },
      };
    },
  };
}
// 3. use geneator function to make things simpler
// geneator function returns generator which implements iterator protocol
function range(from, to) {
  return {
    // iterable protocol
    [Symbol.iterator]: function* () {
      // 生成器函数,自动管理状态，每次迭代都从上一次yield执行
      /* 每一次yield都返回一个生成器对象，生成器对象具有以下特征：
        next() 方法：这个方法用于获取下一个 yield 的结果。每次调用 next() 时，
        生成器函数将继续执行，直到遇到下一个 yield 表达式或函数结束。
          next()包含两个属性：
          value：当前 yield 表达式返回的值。
          done：表示生成器是否完成的布尔值，当没有更多可返回的值时为 true。*/
      while (from <= to) {
        yield from++;
      }
    },
  };
}
// 4. actualy geneator also implements iterable protocol
function range(from, to) {
  return (function* () {
    while (from <= to) {
      yield from++;
    }
  })(from, to); // 立即执行表达式(function x(a){...})(1)意为定义x函数并且立即执行x(1)
}
// 5. maybe just change the entry function?
function* range5(from, to) {
  while (from <= to) {
    yield from++;
  }
}
console.log(range5(1, 5).next());
