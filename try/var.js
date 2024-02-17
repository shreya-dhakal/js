function func() {
  var x = 5;

  if (1) {
    var y = 10;

    console.log(x);
    console.log(y); // can be redeclared and updated
  }
}
// for let
function func() {
  let x = 10;

  if (x === 10) {
    let y = 20;

    console.log(x);
    console.log(y); // can be updated but not redeclared
  }
}

func();
// for const
