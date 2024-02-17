// Define an object using object literal syntax
let person = {
  firstName: "Shreya",
  lastName: "Dhakal",
  age: 23,
  isStudent: true,
  greet: function () {
    console.log("Hello, " + this.firstName + " " + this.lastName + "!");
  },
};

// Access properties of the object
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Is Student:", person.isStudent);

// Call a method of the object
person.greet();