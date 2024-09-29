const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});

// console.log(thenProm);

setTimeout(() => {
    console.log(thenProm);
});