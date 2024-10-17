/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  // your code here
  return Object.prototype.toString.call(data).split(" ")[1].slice(1).toLowerCase();
}




