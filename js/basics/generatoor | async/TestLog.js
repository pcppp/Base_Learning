async function promisefunc() {
  a = await console.log(1);
}
promisefunc().then((res) => {
  console.log(res);
});
