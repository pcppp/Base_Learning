/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-17 14:32:19
 * @LastEditors: pccc 1326278155@qq.com
 * @LastEditTime: 2024-10-21 18:48:57
 */
function badparse(str) {
  if (str === "") {
    throw Error();
  }
  if (str[0] === "'") {
    throw Error();
  }
  if (str === "null") {
    return null;
  }
  if (str === "{}") {
    return {};
  }
  if (str === "[]") {
    return [];
  }
  if (str === "true") {
    return true;
  }
  if (str === "false") {
    return false;
  }
  if (str[0] === '"') {
    return str.slice(1, -1);
  }
  if (+str === +str) {
    return Number(str);
  }
  if (str[0] === "{") {
    return str
      .slice(1, -1)
      .split(",")
      .reduce((acc, item) => {
        const index = item.indexOf(":");
        const key = item.slice(0, index);
        const value = item.slice(index + 1);
        acc[parse(key)] = parse(value);
        return acc;
      }, {});
  }
  if (str[0] === "[") {
    return str
      .slice(1, -1)
      .split(",")
      .map((value) => parse(value));
  }
}
/**
 * @Author: pc
 * @description: !!!需要考虑有逗号在值里面的情况，不能用逗号进行拆分，必须再写方法
 * @param {JSON} json
 * @return {Object}
 */
function parse(json) {
  function removeSpace(str) {
    let arr = str.split("");
    arr = arr.filter((item) => item !== " ");
    return arr.join("");
  }

  function splitValue(str) {
    let arr = [];
    let bracket = 0;
    let quotes = 0;
    let data = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '"' || str[i] === "'") {
        quotes++;
      }
      if (str[i] === "{" || str[i] === "[") {
        bracket++;
      } else if (str[i] === "}" || str[i] === "]") {
        bracket--;
      }
      if (str[i] === "," && bracket === 0 && quotes % 2 === 0) {
        arr.push(data.join(""));
        data = [];
      } else {
        data.push(str[i]);
      }
    }

    if (data.length > 0) {
      // 添加最后一对键值对
      arr.push(data.join(""));
    } else {
      throw new Error();
    }
    return arr;
  }
  function splitKeyValuePairs(str) {
    let pair = [];
    let quotes = 0;
    let bracket = 0;
    let k_v_Flag = 0; //0为key，1为value
    let key = [],
      value = [];
    for (let i = 0; i < str.length; i++) {
      // 计数
      if (str[i] === '"') {
        quotes++;
      } else if (str[i] === "'") {
        if (!k_v_Flag) {
          throw new Error();
        }
        quotes++;
      }
      if (str[i] === "{" || str[i] === "[") {
        bracket++;
      } else if (str[i] === "}" || str[i] === "]") {
        bracket--;
      }
      // 添加
      if (str[i] === ":" && bracket === 0 && quotes % 2 === 0) {
        k_v_Flag = (k_v_Flag + 1) % 2;
      } else if (str[i] === "," && bracket === 0 && quotes % 2 === 0) {
        pair.push([key.join(""), value.join("")]);
        key = [];
        value = [];
        k_v_Flag = (k_v_Flag + 1) % 2;
      } else if (k_v_Flag) {
        value.push(str[i]);
      } else if (!k_v_Flag && str[i] !== "'" && str[i] !== '"') {
        key.push(str[i]);
      }
    }
    if (key.length > 0 && value.length > 0) {
      // 添加最后一对键值对
      pair.push([key.join("").trim(), value.join("").trim()]);
    } else {
      throw new Error();
    }
    return pair;
  }
  function parseInner(json) {
    if (json[0] === "{") {
      let res = {};
      let inner = json.slice(1, -1);
      if (inner) {
        inner = splitKeyValuePairs(inner);
        inner.forEach((element) => {
          res[element[0]] = parseInner(element[1]);
        });
      }
      return res;
    } else if (json[0] === "[") {
      let res = [];
      let inner = json.slice(1, -1);
      inner = splitValue(inner);
      console.log("inner :>> ", inner);
      inner.forEach((element) => {
        res.push(parseInner(element));
      });
      return res;
    } else if (json[0] === '"') {
      return json.slice(1, -1);
    } else if (json === "true" || json === "false") {
      return Boolean(json);
    } else if (json === "null") {
      return null;
    } else if (json[0] === "'") {
      throw new Error();
    } else {
      return Number(json);
    }
  }
  return parseInner(removeSpace(json));
}
obj = parse('[{"a":{"b":{"c":[1],"d":"BFE,dev"}}},null,"str"]');
console.log(obj);
