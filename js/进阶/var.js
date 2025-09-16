// function game(name) {
//   this.name = name;
//   this.skin = [1, 2, 3];
// }

// game.prototype.getName = function () {
//   return this.name;
// };
// game.prototype.getSkin = function () {
//   return this.skin;
// };

// game.prototype.setName = function (name) {
//   this.name = name;
// };
// game.prototype.setSkin = function (skin) {
//   this.skin.push(skin);
// };

// function lol(name) {
//   game.call(this, name);
// }
// // lol.prototype = game;
// lol.prototype = Object.create(game.prototype);
// lol.prototype.constructor = lol;

// const pc = new lol('pc');

// console.log(pc.skin);
// pc.setSkin('sss');
// console.log(pc.skin);

// const a = [, ,];
const b = [undefined, undefined, undefined];

// console.log(Object.keys(a));
console.log(Object.keys(b));
const a = Array(Number.MAX_SAFE_INTEGER).fill(Symbol(' '));
a.forEach((item) => {});
