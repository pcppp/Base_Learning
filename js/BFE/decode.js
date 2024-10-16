/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-15 18:03:08
 * @LastEditors: your name
 * @LastEditTime: 2024-10-15 18:55:29
 */
// This is a JavaScript coding problem from BFE.dev

/**
 * @param {string[][]} message
 * @return {string}
 */
decode([["a", "b", "c"], [("aa", "bb", "cc")]]);
function decode(message) {
  let wight, high;
  let resMessage = [];
  let isAllOut = 0;
  console.log("message :>> ", message);
  if (message.length && message[0].length) {
    wight = message[0].length;
    high = message.length;
    resMessage.push(message[0][0]);
  } else {
    return "";
  }

  function isWorking(i, j) {
    if (i >= wight || i < 0 || j >= high || j < 0) {
      isAllOut++;
      return false;
    }
    return true;
  }
  for (let c = 3, i = 0, j = 0; isAllOut < 2; ) {
    switch (c) {
      case 2:
        {
          i++;
          j--;
          if (isWorking(i, j)) {
            resMessage.push(message[j][i]);
            isAllOut = 0;
          } else {
            i--;
            j++;
            c = 3;
          }
        }
        break;
      case 3:
        {
          i++;
          j++;
          if (isWorking(i, j)) {
            resMessage.push(message[j][i]);
            isAllOut = 0;
          } else {
            i--;
            j--;
            c = 2;
          }
        }
        break;
    }
  }
  console.log(resMessage.join());

  return resMessage.join("");
}
