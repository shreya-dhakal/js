// Using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car1 = new Vehicle("GT", "BMW", "1998cc");

console.log(car1.name); //GT

// Constructor function
function Person(name, age) {
  // Properties
  this.name = name;
  this.age = age;

  // Method
  this.sayHello = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}

// Creating an instance of the person instance
var person1 = new Person("Ayusma", 21);

// Accessing properties and calling methods
console.log(person1.name);
console.log(person1.age);
person1.sayHello();
