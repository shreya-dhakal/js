let x = ["a", "b", "b", "c", "a", "a", "b", "d", "c"];
let elementCount = {};
x.forEach((element) => {
  elementCount[element] = (elementCount[element] || 0) + 1;
});

// Display the counts
console.log("Element Counts:");
for (let key in elementCount) {
  console.log(`${key}: ${elementCount[key]}`);
}
