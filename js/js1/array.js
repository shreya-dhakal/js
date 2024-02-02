// Function to calculate the sum and average of an array of numbers
function calculateSumAndAverage(numbers) {
  // Calculate the sum of numbers using the reduce method
  const totalSum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Calculate the average by dividing the sum by the number of elements
  const average = totalSum / numbers.length;

  return [totalSum, average];
}

// Example usage:
// You can replace the numbers array with your own set of numbers
const numbers = [5, 10, 15, 20, 25];

// Call the function and store the results in variables
const [sumResult, averageResult] = calculateSumAndAverage(numbers);

// Display the results
console.log("Numbers:", numbers);
console.log("Sum:", sumResult);
console.log("Average:", averageResult);
