// var - 函数作用域变量
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log('var:', i);
  }, 0);
}
// let - 块级作用域变量
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log('let:', j);
  }, 0);
}
