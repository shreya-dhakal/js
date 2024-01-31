let student = [
  {
    id: 1,
    name: "Shreya",
    Semester: 7,
  },
  {
    id: 2,
    name: "Bipana",
    Semester: 6,
  },
  {
    id: 3,
    name: "Ayusma",
    Semester: 6,
  },
];
//console.log(student);
//for map array
let mappedArray = student.map((item) => {
  return {
    studentid: item.id,
    studentname: item.name,
  };
});
// console.log(mappedArray);
//for each array
let mapArray = student.forEach((item) => {
  return {
    studentsemester: item.semester,
  };
});
// console.log(mapArray);
//for each array

// student.forEach((std) => {
//   console.log(std.id);
//   console.log(std.name);
//   console.log(std.semester);
// });
//for filter
let newArray = student.filter((std) => std.Semester < 7); //=>[{}]
// console.log(newArray);
//for find
let selectedData = student.find((std) => std.Semester < 7); //=>object return
console.log({ selectedData: selectedData });
//for slice
let result = text.slice(6, 7);
//for splice
const value = ["id", "name", "semester"];
console.log("check console", value.splice(0, 2));
//for include
value.include["Name"];
