async function async1() {
  console.log('async1 - 1');
  async2();
  console.log('async1 - 2');

  return async2.call({ a: 1 });
}

async function async2() {
  console.log('async2 - 1');

  await Promise.resolve().then(() => {
    console.log('async2 - promise resolved - 1');
  });

  console.log('async2 - 2');

  Promise.resolve().then(() => {
    console.log('async2 - promise resolved - 2');
    setTimeout(() => {
      console.log(
        `async2 - promise resolved - settimeout - 1 ${Object.prototype.toString.apply(this).split(' ')[1].slice(0, -1)}`
      );
    }, 0);
  });

  console.log(`async2 - 3 - ${this && this.a}`);
  return generator.next();
}

async1().then((v) => console.log(v, generator.next()));

function* generateSequence(to) {
  let idx = 0;
  while (idx < to) {
    yield ++idx;
  }

  return idx;
}
const generator = generateSequence(5);
