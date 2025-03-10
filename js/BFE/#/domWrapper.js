class $ {
  #dom = {};
  constructor(selector) {
    this.#dom = selector;
  }
  css(attribuld, data) {
    console.log('链式调用');
    return this;
  }
}
const s = new $();
s.css().css();
