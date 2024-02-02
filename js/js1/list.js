// Creating a list (array) of numbers
let numbers = [1, 2, 3, 4, 5];

console.log("First element:", numbers[0]);
console.log("Second element:", numbers[1]);

// Adding an element to the end of the list
numbers.push(6);
console.log("List after pushing 6:", numbers);

// Removing the last element from the list
let poppedElement = numbers.pop();
console.log("Popped element:", poppedElement);
console.log("List after popping:", numbers);

// Iterating through the list
console.log("Iterating through the list:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using forEach for iteration
console.log("Iterating using forEach:");
numbers.forEach(function (element) {
  console.log(element);
});

// Mapping the list to create a new list
let squaredNumbers = numbers.map(function (element) {
  return element * element;
});
console.log("Squared numbers:", squaredNumbers);
