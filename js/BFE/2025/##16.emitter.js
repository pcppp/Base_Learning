// please complete the implementation
class EventEmitter {
  subscriber = [];
  subscribe(eventName, callback) {
    this.subscriber.push([eventName, callback]);
    const _this = this;
    return {
      release() {
        const index = _this.subscriber.indexOf((item) => {
          return !(item[0] === eventName && item[1] === callback);
        });
        _this.subscriber.splice(index, 1);
      },
    };
  }
  emit(eventName, ...args) {
    const events = this.subscriber.filter((item) => {
      return item[0] === eventName;
    });
    events.forEach((event) => {
      event[1](...args);
    });
  }
}
