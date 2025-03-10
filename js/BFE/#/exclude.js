function excludeItems(items, excludes) {
  const resArr = items.filter((item) => {
    let res = true;
    excludes.forEach((pairs) => {
      if (item[pairs.k] === pairs.v) res = false;
    });
    return res;
  });

  return resArr;
}
let items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 },
];
const excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' },
];
console.log(excludeItems(items, excludes));
