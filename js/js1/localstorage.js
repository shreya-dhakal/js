// Storing an object in local storage
var dataObject = { name: "Shreejan", age: 18 };
localStorage.setItem("userData", JSON.stringify(dataObject));

// Retrieving and parsing the object from local storage
var storedData = JSON.parse(localStorage.getItem("userData"));
console.log(storedData);