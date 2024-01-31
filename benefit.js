let benefits = [
  {
    id: 1,
    name: "marketing",
    bonus: 500,
  },
  {
    id: 2,
    name: "Travel",
    bonus: 440,
  },
  {
    id: 3,
    name: "Sales",
    bonus: 300,
  },
  {
    id: 4,
    name: "Digital",
    bonus: 600,
  },
];
// Select benefits with id 1 and 2
// let selectedBenefits = benefits.filter(
//     (benefit) => benefit.id === 1 || benefit.id === 2
//   );
function getBenefitById(selectedId) {
  return benefits.find((benefit) => benefit.id === selectedId);
}
const selectedId = 2;
const selectedBenefit = getBenefitById(selectedId);

console.log(`Benefit with ID ${selectedId}:`, selectedBenefit);
// // Function to find data based on id
// const findData = (id) => benefits.find((item) => item.id === id);

// // Using map to find data based on id
// const idsToFind = [2, 3];
// const foundData = idsToFind.map((id) => findData(id));

// console.log(foundData);
const idsToFind = [2, 3];
const foundData = idsToFind.map((id) =>
  benefits.find((item) => item.id === id)
);

console.log(1 == "1"); // true
console.log(1 === "1"); //false
