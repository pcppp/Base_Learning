function concurRequest(urls, maxCount) {
  return new Promise((resolve) => {
    const currentCount = 0;
    const concurPromise = new Promise((resolve, rej) => {
      const res = [];
      let i = 0;
      async function request() {
        try {
          currentCount++;
          const data = await fetch(urls[i]);
          res[i] = data;
        } catch (err) {
          res[i] = err;
        } finally {
          i++;
          currentCount--;
          request();
        }
      }
      new Promise();
    });
  });
}
