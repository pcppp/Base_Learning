/* 
    const add = (a,b,c) => a * b + c
    const curryAdd = curry(add)
    curryAdd(_,_,_)(2,_,_)(_,2,_)(3) = 7
    curryAdd(2,2,3) = 7
    curryAdd(3,_,_)(2,2) = 8
*/
function curry(cb) {
  const arrs = [];
  function curryAdd(...args) {
    let res = null;
    arrs.forEach((arr) => {
      if (arr === curry.placeholder) {
        arrs.push(arr);
      }
    });
    if (arrs.length < 3) return curryAdd;
    res = cb(...arrs);
    return res;
  }
  return curryAdd;
}

const _ = Symbol();
curry.placeholder = _;

const add = (a, b, c, d) => a * b + c + d;
const curryAdd = curry(add);
console.log(curryAdd(_, 1, 2, 3, 4, 5)(2));
