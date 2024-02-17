// Define a function to square a number
function square(x) {
  return x ** 2;
}

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use map to apply the square function to each element in the array
const squaredNumbers = numbers.map(square);

// Log the original and squared \
console.log("Original numbers:", numbers);
console.log("Squared number:", squaredNumbers);