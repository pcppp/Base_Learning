// please complete the implementation
class EventEmitter {
  constructor() {
    this.event = new Array();
  }
  subscribe(eventName, callback) {
    this.event.push([eventName, callback]);
    return {
      release: () => {
        const index = this.event.findIndex((item) => {
          return item[0] === eventName && item[1] === callback;
        });

        if (index !== -1) {
          this.event.splice(index, 1); // 删除找到的回调
        }
      },
    };
  }

  emit(eventName, ...args) {
    const callbackList = this.event.filter((item, index, array) => {
      return item[0] === eventName;
    });
    if (callbackList.length) {
      callbackList.forEach((item) => item[1](...args));
    }
  }
}

const emitter = new EventEmitter();
const callback1 = (arr) => {
  console.log(arr);
};
emitter.subscribe("event1", callback1);
emitter.emit("event1", 1, 2, 3);
