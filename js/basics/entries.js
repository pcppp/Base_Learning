/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-17 13:47:42
 * @LastEditors: your name
 * @LastEditTime: 2024-10-17 14:17:41
 */
let obj = {
  aa: "aaa",
  bb: "ccac",
  obj_l: {
    da: "da",
  },
  ss() {
    return 123;
  },
  sy: Symbol(),
};
console.log(typeof obj.sy);

console.log("object :>> ", Object.entries(obj));
let map = new Map();
map.set("da", "sada");
map.set("dad", "sddasada");
map.set("dadas", "ssaddasada");
console.log("map", map.entries());
