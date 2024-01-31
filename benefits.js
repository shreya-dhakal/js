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
function getBenefitById(selectedId) {
  return benefits.find((benefit) => benefit.id === selectedId);
}
const selectedId = 2;
const selectedBenefit = getBenefitById(selectedId);

console.log(`Benefit with ID ${selectedId}:`, selectedBenefit);
