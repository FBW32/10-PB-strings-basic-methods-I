// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let myString = "I can walk in the park all day!";
console.log(myString.slice(18, 22)); // park

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let value = "JavaScript";
console.log(value.slice(3, 6)); // aSc

// 3. Check if the sentence "nice shoes" contains the letter l or n.
let sentence = "nice shoes";
console.log(sentence.includes("l")); // false

// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let name = "Bartosz";
let city = "Berlin";
let country = "Poland";

console.log("Hi, my is " + name + " I'm coming from " + country + " and live in " + city);