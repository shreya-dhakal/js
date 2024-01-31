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
// // Function to find data based on id
// const findData = (id) => benefits.find((item) => item.id === id);

// // Using map to find data based on id
// const idsToFind = [2, 3];
// const foundData = idsToFind.map((id) => findData(id));

// console.log(foundData);
const idsToFind = [2, 3];
const foundData = idsToFind.map((id) => {
  return benefits.find((item) => item.id === id);
});
