// const obj = {
//   property1: "value1", // property name may be an identifier
//   2: "value2", // or a number
//   "property n": "value3", // or a string
// };

const object1 = {
  a: "somestring",
  b: 42,
};
// console.log("Keys:", Object.keys(object1));
// console.log("Values:", Object.values(object1));
console.log({
  Keys: Object.keys(object1),
  Values: Object.values(object1),
  entries: Object.entries(object1),
});
{
