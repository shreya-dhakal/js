// Example of using splice in JavaScript

// Creating an array
let fruits = ["apple", "banana", "cherry", "date"];

// Using splice to add elements at a specific position
fruits.splice(2, 0, "orange", "kiwi");

// Displaying the modified array
console.log("Modified array:", fruits);

// Using splice to remove elements from a specific position
fruits.splice(1, 2);

// Displaying the final modified array
console.log("Final array:", fruits);