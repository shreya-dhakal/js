let programs = ["Python", "Java", "React", "Q/A"];

// Sorting in ascending order
programs.sort();
console.log(programs);

// Sorting in descending order
programs.sort((a, b) => b.localeCompare(a));
console.log(programs);
