function flat(arr, depth = 1) {
  let newArr = arr;
  for (let i = 0; i < depth; i++) {
    let tempArr = [];
    newArr.forEach((element) => {
      if (Array.isArray(element)) {
        tempArr.push(...element);
      } else {
        tempArr.push(element);
      }
    });
    newArr = tempArr;
  }
  return newArr;
}

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
