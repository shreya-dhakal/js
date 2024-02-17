// Get the current date,time and seconds.
const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Current Time: ${hours}:${minutes}:${seconds}`);