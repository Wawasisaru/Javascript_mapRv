// USING.MAP(), .SET(), .GET()


// Saturday To Do Filelist
// 8a.m: Walk the dog
// 12.a.m: lunch 
// 3.am:Watch a movie

// create a new Map() and each to-do as a key- value
const Saturday = new Map();

Saturday.set(8,"Walk the Dogs");
Saturday.set(12,"Lunch");
Saturday.set(3,"Watch a movie");

console.log(Saturday)
// using .get()
const noon = Saturday.get(12);
console.log("What am I doing on Saturday", noon);
// .has()
// it returns true or false based on whether the value provided exist
const hasEight = Saturday.has(8);
console.log("Does our map have eight?", hasEight);
// 
const hasFour = Saturday.has(4);
console.log("Does our map have four", hasFour);
// to check the size of our map we use .size()
const saturdaySize = Saturday.size;
console.log(`My map contains ${saturdaySize} elements`);
