function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}
function varAndLetScoping() {
  var x = 1;

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}
function nestedScopeTest() {
  if (true) {
    var functionVariable = 1;
    let blockVariable = 2;

    console.log(functionVariable);
    console.log(blockVariable);

    if (true) {
      console.log(functionVariable);
      console.log(blockVariable);
    }
  }

  console.log(functionVariable);
  console.log(blockVariable);
}
