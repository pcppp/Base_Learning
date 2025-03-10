class emmiter {
  #event = {};
  subscribe(key, cb) {
    this.#event[key] = cb;
    return { release() {} };
  }
}
