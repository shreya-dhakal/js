// Define an object with properties
const person = {
  firstName: "Ayusma",
  lastName: "Bhandari",
  age: 21,
  address: {},
};

// Display the person's information using object properties
console.log("First Name: ", person.firstName);
console.log("Last Name: ", person.lastName);
console.log("Age: ", person.age);
console.log(
  "Address: ",
  person.address.street,
  ",",
  person.address.city,
  ",",
  person.address.state
);
// Define a constructor function for a 'Car' object
function Car(color, model, year) {
  this.color = color;
  this.model = model;
  this.year = year;
}

var myCar = new Car("Blue", "Bold", 2022);

console.log(myCar.color);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.days);
console.log(myCar.age);
console.log(myCar.city);