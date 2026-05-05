var a = 10;

function outer() {
  var a = 20;

  function inner() {
    console.log(a);
  }

  return inner;
}

var fn = outer();

fn();

a = 30;

fn();
