/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-15 14:31:54
 * @LastEditors: your name
 * @LastEditTime: 2024-10-18 17:41:45
 */
let mapDemo = new Map();
mapDemo.set("1", 1);
mapDemo.set("1", 2);
mapDemo.set("1", 3);
mapDemo.set("2", 3);
console.log("mapDemo.get(1) :>> ", mapDemo.get(1));
console.log("mapDemo.get(1) :>> ", mapDemo.get("1"));
console.log("mapDemo.entries() :>> ", mapDemo.entries());
let setDemo = new Set();
setDemo.add("1");
setDemo.add("1");
setDemo.add("1");
