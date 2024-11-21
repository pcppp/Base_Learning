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
  })(from, to);
}
// 5. maybe just change the entry function?
function* range(from, to) {
  while (from <= to) {
    yield from++;
  }
}
