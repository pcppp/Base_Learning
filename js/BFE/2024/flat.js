function flat(arr, depth = 1) {
  let newArr = arr;
  for (let i = 0; i < depth; i++) {
    let tempArr = [];
    newArr.forEach((element) => {
      if (Array.isArray(element)) {
        tempArr.push(...element);
      } else {
        tempArr.push(element);
      }
    });
    newArr = tempArr;
  }
  return newArr;
}
