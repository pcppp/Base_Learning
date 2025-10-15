/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-14 08:35:03
 * @LastEditors: your name
 * @LastEditTime: 2024-10-14 09:21:19
 */
function $(el) {
  const body = el;
  const css = function (propertyName, value) {
    body.style[propertyName] = value;
    return body;
  };
  body.css = css;

  return body;
}

const a = $(document.createElement("p"));
a.css("1", 2);
