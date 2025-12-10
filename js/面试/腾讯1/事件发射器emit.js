// 尝试实现一个简单的事件发射器，它应具备以下行为：

// `once` 方法：接受一个事件名称和一个回调函数。当触发具有指定名称的事件时，回调函数应仅执行一次。

// `async wait` 方法：接受一个事件名称，并在事件触发后返回事件的有效负载。

// `emit` 方法：接受一个事件名称和一个有效负载。它会触发所有已注册到 `once` 方法的、与指定事件名称相同的回调函数，并返回所有等待方法。

// implement this class
class SimpleEventEmitter {
  constructor() {
    this.listeners = new Map();
    this.waitPromises = new Map();
  }
  once(name, callback) {
    /* YOUR CODES HERE */
    const wrapper = (...args) => {
      callback(...args);
      if (this.listeners.get(name)) {
        this.listeners.delete(name);
      }
    };
    let res = this.listeners.get(name);
    res.push(wrapper);
    this.listeners.set(name, res);
  }
  async wait(name) {
    /* YOUR CODES HERE */
    return new Promise((resolve) => {
      if (this.waitPromises.has(name)) {
        this.waitPromises.get(name)();
      }
      this.waitPromises.set(name, resolve);
    });
  }
  emit(name, payload) {
    /* YOUR CODES HERE */
    if (this.listeners.has(name)) {
      const listener = this.listeners.get(name);
      listener(payload);
      this.listeners.delete(name);
    }
    if (this.waitPromises.has(name)) {
      const resolve = this.waitPromises.get(name);
      resolve(payload);
      this.waitPromises.delete(name);
    }
    return [];
  }
}

// usage
const emitter = new SimpleEventEmitter();

setTimeout(() => {
  emitter.emit('myEvent', 'payload-0');
  emitter.emit('myOtherEvent', 'payload-1');
}, 1000);
setTimeout(() => {
  emitter.emit('myEvent', 'payload-2');
}, 2000);
(async () => {
  emitter.once('myEvent', (payload) => {
    console.log('A: ' + payload);
  });
  emitter.once('myOtherEvent', (payload) => {
    console.log('B: ' + payload);
  });
  const payload = await emitter.wait('myEvent');
  console.log('C: ' + payload);
  emitter.once('myEvent', (payload) => {
    console.log('D: ' + payload);
  });
})();
