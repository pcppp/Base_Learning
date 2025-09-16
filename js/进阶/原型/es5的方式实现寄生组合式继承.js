function game(name) {
  this.name = name;
  this.skin = [1, 2, 3];
}

game.prototype.getName = function () {
  return this.name;
};
game.prototype.getSkin = function () {
  return this.skin;
};

game.prototype.setName = function (name) {
  this.name = name;
};
game.prototype.setSkin = function (skin) {
  this.skin.push(skin);
};

function lol(name) {
  game.call(this, name);
}
// lol.prototype = game; xxx
// 防止修改lol.protoType时影响game
lol.prototype = Object.create(game.prototype);

lol.prototype.constructor = lol;

const pc = new lol('pc');
