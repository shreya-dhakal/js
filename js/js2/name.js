let school = {
  name: "Herald Secondary School",
  location: "Basundhara",
  established: "1990",
  displayInfo: function () {
    console.log(`${school.name} was established 
			in ${school.established} at ${school.location}`);
  },
};
let person = {
  gender: "female",
};

let person1 = Object.create(person);
person1.name = "Shreya";
person1.age = 23;
person1.nationality = "Nepalese";

for (let key in person1) {
  // Output : name, age, nationality
  // and gender
  console.log(key);
}
let k = Object.keys(person1);
console.log(k);
