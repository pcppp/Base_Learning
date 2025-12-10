function concurRequest(urls, maxCount) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }

    let index = 0;
    let finishedCount = 0;
    const res = [];

    const createTask = async () => {
      if (index >= urls.length) return;

      const currentIndex = index;
      const url = urls[index];
      index++;

      try {
        const data = await fetch(url);
        res[currentIndex] = data;
      } catch (err) {
        res[currentIndex] = err;
      } finally {
        finishedCount++;
        if (finishedCount === urls.length) {
          resolve(res);
        } else {
          createTask();
        }
      }
    };

    const max = Math.min(urls.length, maxCount);
    for (let i = 0; i < max; i++) {
      createTask();
    }
  });
}
