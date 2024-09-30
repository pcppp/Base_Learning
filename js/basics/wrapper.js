function work(a, b) {
  console.log(a + b); // work 是一个任意的函数或方法
}
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

function f(x) {
  console.log(x);
}
function delay1(f, ms) {
  function wrapper(...args) {
    setTimeout(f, ms, ...args);
  }
  return wrapper;
}
function delay2(f, ms) {
  return function () {
    setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  };
}
// create wrappers
let f1000 = delay2(f, 1000);
let f1500 = delay2(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"

let _ = {
  last_timer: null,
  last_time: Date.now(),
  debounce(f, ms) {
    return function () {
      if (Date.now() - this.last_time < ms) {
        clearTimeout(this.last_timer);
      }
      this.last_timer = setTimeout(() => f(arguments), ms);
      this.last_time = Date.now();
    };
  },
};

let ff = _.debounce(console.log, 1000);

ff("a");
setTimeout(() => ff("b"), 200);
setTimeout(() => ff("c"), 1500);
// 防抖函数从最后一次函数调用以后等待 1000ms，然后执行：alert("c")

function fff(a) {
  console.log("throttle -> " + a);
}
function throttle(f, ms) {
  let last_time = 0;
  return function (arg) {
    if (Date.now() - last_time > ms) {
      f(arg);
    }
    last_time = Date.now();
  };
}
// f1000 最多每 1000ms 将调用传递给 f 一次
let fff1000 = throttle(fff, 1000);

fff1000(1); // 显示 1
fff1000(2); // (节流，尚未到 1000ms)
fff1000(3); // (节流，尚未到 1000ms)
setTimeout(() => {
  fff1000(3);
}, 3000); // 显示 3

// 当 1000ms 时间到...
// ...输出 3，中间值 2 被忽略
