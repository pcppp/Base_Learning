// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  // your code here
  const tasks = [];
  const addTask = (fn, first = false) => {
    if (first) {
      tasks.unshift(fn);
    } else {
      tasks.push(fn);
    }
  };
  const runTasks = async () => {
    for (const task of tasks) {
      await task();
    }
  };
  addTask(() => {
    logFn(`Hi, I'm ${name}.`);
  });
  const api = {
    eat(food) {
      addTask(() => {
        logFn(`Eat ${food}.`);
      });
      return api;
    },

    sleep(time) {
      addTask(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (time === 1) {
              logFn(`Wake up after ${time} second.`);
            } else {
              logFn(`Wake up after ${time} seconds.`);
            }
            resolve();
          }, time * 1000);
        });
      });
      return api;
    },

    sleepFirst(time) {
      addTask(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (time === 1) {
              logFn(`Wake up after ${time} second.`);
            } else {
              logFn(`Wake up after ${time} seconds.`);
            }
            resolve();
          }, time * 1000);
        });
      }, true);
      return api;
    },
  };
  setTimeout(() => {
    runTasks();
  }, 0);
  return api;
}
const log = (str) => {
  console.log(str);
  log.logs.push(str);
};
log.logs = [];
LazyMan('Jack', log);
