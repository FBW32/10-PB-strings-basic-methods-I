// 10.08.2020
// EXERCISE 1
// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let theString = "I can walk in the park all day!";
let sliceString = theString.slice(17, 22);
console.log(sliceString);

// EXERCISE 2
// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let program = "JavaScript";
let programString = program.slice(3,6);
console.log(programString);

// EXERCISE 3
// Check if the sentence "nice shoes" contains the letter l or n.
let apparel = "nice shoes";
let myShoe = apparel.includes("n");
console.log(apparel);

// EXERCISE 4
// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let firstName = "Abayomi";
let city = "Berlin";
console.log(`My name is ${firstName}, I live in ${city} and  ia am a Student.`);
