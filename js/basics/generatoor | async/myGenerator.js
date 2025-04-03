function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello Async');
    }, 1000);
  });
}
async function asyncFunc() {
  const data = await getData();
  console.log(data); // "Hello Async"
  return 'Done';
}

// 执行
asyncFunc().then((result) => {
  console.log(result);
});
