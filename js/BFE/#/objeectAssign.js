Object.prototype.MyAssign = function (target, ...sources) {
  sources.forEach((source) => {
    for (const { key, value } of Object.entries(source)) {
      target[key] = value;
    }
  });
};
