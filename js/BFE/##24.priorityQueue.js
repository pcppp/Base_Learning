class PriorityQueue {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }

  add(element) {
    this.data.push(element);
    this.data.sort(this.compare); // 直接排序保持顺序
  }

  poll() {
    return this.data.shift(); // 移除并返回第一个元素
  }
}

const pq = new PriorityQueue((a, b) => a - b);
pq.add(5);
pq.add(3);
pq.add(1);
pq.add(4);
pq.add(2);
const result = [];
while (pq.size() > 0) {
  result.push(pq.poll());
}
console.log(result);
