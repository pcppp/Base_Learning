/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-15 12:53:34
 * @LastEditors: your name
 * @LastEditTime: 2024-10-15 15:08:03
 */
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @description:排除包含某些属性的项目
 * @param {object[]} items
 * @param {Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */

function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    console.log("items :>> ", items);
    items = items.filter((item) => {
      return item[pair.k] !== undefined ? !(item[pair.k] === pair.v) : true;
    });
  });
  return items;
}
// 初始方法调用如下例子的时间复杂度太高，实际上同一个属性可以设置一个Set来保存他的value
const excludes = [
  { k: "color", v: "silver" },
  { k: "color", v: "silver123" },
  { k: "color", v: "silve1231r" },
  { k: "color", v: "silver312" },
  { k: "color", v: "silv23123132131er" },
  { k: "color", v: "silv2131231er" },
  { k: "color", v: "silv213 1231er" },
  { k: "color", v: "sil123123ver" },
  { k: "color", v: "silve213r" },
  { k: "color", v: "sil123ver" },
  { k: "color", v: "silver" },
  { k: "color", v: "31" },
  { k: "color", v: "sil3123123123ver" },
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];
function butterExcludeItems(items, excludes) {
  let excludeMap = new Map();
  excludes.forEach((pair) => {
    if (!excludeMap.get(pair.k)) {
      excludeMap.set(pair.k, new Set());
    }
    excludeMap.get(pair.k).add(pair.v);
  });
  excludeMap.forEach((value, key, map) => {
    items = items.filter((item) => {
      return item[key] !== undefined ? !value.has(item[key]) : true;
    });
  });
  return items;
}
excludeItems(items, excludes);
