/* == 宽松相等运算符规则
任一操作数是Boolean:将Boolean转化为数字
字符串与数字： 字符串被转换为数字
对象与原始值： 将对象转化为原始值，调用对象的valueOf/toString方法
null与undefined:  null 和 undefined 在使用 == 比较时是相等的，但与其他任何值都不相等(包括0、false)
NaN与任何值都不相等，包括自身
*/

// ==和>=的逻辑是不同的
console.log("null > 0", null > 0); // F
console.log("null == 0", null == 0); // F
console.log("null >= 0", null >= 0); // T
// undefined不应被用于比较
console.log("undefined > 0", undefined > 0); // false
console.log("undefined < 0", undefined < 0); // false
console.log("undefined == 0", undefined == 0); // false

/* === 严格相等
  比较时不做类型转换，类型不同则立马false  
*/
console.log("NaN == NaN", NaN == NaN);
console.log("null == undefined", null == undefined);
console.log("null === undefined", null === undefined);
console.log("undefined === undefined", undefined === undefined);
console.log("null === null", null === null);
console.log("NaN === NaN", NaN === NaN);
