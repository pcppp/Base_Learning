const obj = {
  sybo: Symbol(),
  data: 123,
  ss() {
    return 1;
  },
  qq: {
    aaa: 'aaa',
  },
};
function detectType(data) {
  // your code here
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1).toLowerCase();
}
console.log(undefined === undefined);
console.log(null === null);
console.log(JSON.stringify(obj));
console.log(stringify(obj));

function stringify(data, outer = true) {
  if (typeof data === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt at JSON.stringify');
  }
  if (typeof data === 'string') {
    return `"${data}"`;
  }
  if (typeof data === 'function') {
    return undefined;
  }
  if (data !== data) {
    return 'null';
  }
  if (data === Infinity) {
    return 'null';
  }
  if (data === -Infinity) {
    return 'null';
  }
  if (typeof data === 'number') {
    return `${data}`;
  }
  if (typeof data === 'boolean') {
    return `${data}`;
  }
  if (data === null) {
    return 'null';
  }
  if (data === undefined) {
    return 'null';
  }
  if (typeof data === 'symbol') {
    if (outer) {
      return undefined;
    } else {
      return 'null';
    }
  }
  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (Array.isArray(data)) {
    const arr = data.map((el) => stringify(el, false));
    return `[${arr.join(',')}]`;
  }
  if (typeof data === 'object') {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined || typeof value === 'function' || typeof value === 'symbol') {
        return acc;
      }
      acc.push(`"${key}":${stringify(value, false)}`);
      return acc;
    }, []);
    return `{${arr.join(',')}}`;
  }
}
function badStringify(data) {
  let type = detectType(data);
  switch (type) {
    case 'null':
      return null;
      break;
    case 'object':
      {
        let res = [];
        res.push('{');
        for (item in data) {
          let json = [];
          if (res.length !== 1) {
            res.push(',');
          }
          console.log('stringify(data[item])', stringify(data[item]));

          if (stringify(data[item])) {
            json.push('"' + item + '":');
            json.push(stringify(data[item]));
          }
          if (json.length) {
            res.push(json.join(''));
          }
        }

        res.push('}');
        return res.join('');
      }
      break;
    case 'array':
      {
        let res = [];
        res.push('[');
        for (item of data) {
          let json = [];
          if (res.length !== 1) {
            res.push(',');
          }
          json.push('"' + item + '":');
          json.push(stringify(data[item]));
          if (json.length) {
            res.push(json.join(''));
          }
        }

        res.push(']');
        return res.join('');
      }
      break;
    case 'number':
      {
        return data.toString;
      }
      break;
    case 'string':
      {
        return '"' + data + '"';
      }
      break;
    case 'boolean':
      {
        return '"' + data + '"';
      }
      break;
  }
}
