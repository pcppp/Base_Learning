const a = [
  { id: 1, parentId: 0, name: 'A' },
  { id: 2, parentId: 1, name: 'B' },
  { id: 3, parentId: 1, name: 'C' },
  { id: 4, parentId: 2, name: 'D' },
];
const toTree = (arr, pid) => {
  const map = new Map();
  arr.foreach((item) => {
    const map = new Map();
    if (parentId === 0) {
      map.set(item.id, item);
    }
  });
};
