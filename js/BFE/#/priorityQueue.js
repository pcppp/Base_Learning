class PriorityQueue {
  // 构造函数接受一个compare函数
  // compare返回的-1, 0, 1决定元素是否优先被去除
  #queue = [];
  #compare = () => {
    return false;
  };
  constructor(compare) {
    this.#compare = compare;
  }

  // 添加一个元素
  add(element) {
    let i = 0;
    this.#queue.forEach((p) => {
      if (this.#compare(p, element) >= 0) {
        i++;
      }
    });
    const arr1 = this.#queue.slice(0, -i);
    arr1.push(element);
    const arr2 = this.#queue.slice(-i);
    this.#queue = arr1.concat(arr2);
  }
  // 去除头元素并返回
  poll() {
    const res = this.#queue[0];
    this.#queue = this.#queue.slice(1);
    return res;
  }
  // 取得头元素
  peek() {
    return this.#queue[0];
  }
  // 取得元素数量
  size() {
    return this.#queue.length;
  }
}
