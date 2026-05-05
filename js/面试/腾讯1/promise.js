console.log(1);

const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});
console.log(4);
promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

setTimeout(() => {
  console.log(8);
}, 1);

setTimeout(() => {
  console.log(9);
}, 0);
