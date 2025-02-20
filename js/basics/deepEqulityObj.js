const useDeepEqulity = (obj1, obj2) => {
    const detectType = (data) => {
      return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1).toLowerCase();
    };
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if (key1.length != key2.length) {
      return false;
    }
    key1.forEach((attribute) => {
      if (detectType(obj1[attribute]) === 'object') {
        if (!useDeepEqulity(obj1[attribute], obj2[attribute])) {
          return false;
        }
      } else {
        if (!obj1[attribute] === obj2[attribute]) {
          return false;
        }
      }
    });
    return true;
  };
  export default useDeepEqulity;
  