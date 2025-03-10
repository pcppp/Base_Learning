class MyMap {
  #obj = {};
  set(node, value) {
    Object.defineProperties(this.#obj, node, value);
  }
  get(node) {
    return Object.getOwnPropertyDescriptor(this.#obj, node);
  }
  has(node) {
    return Boolean(Object.getOwnPropertyDescriptor(this.#obj, node));
  }
}
