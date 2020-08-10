// Programming Basics: Basic String Methods

/* 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console. */
let myString = "I can walk in the park all day!";
let slicedString = myString.slice(18, 22);
console.log(slicedString); // park

/* 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable. */
let myString2 = "JavaScript";
let slicedString2 = myString2.slice(3, 6);
console.log(slicedString2); // aSc

/* 3. Check if the sentence "nice shoes" contains the letter l or n. */
let myString3 = "niceshoes";
let stringIncluded = myString3.includes("l"); // false
console.log(stringIncluded);
console.log(myString3.includes("n")); // true

/* 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". */
let firstName = "Shanti" ;
let lastName = " Surapaneni";
let city = "Berlin";
let profession = "Software Developer";
console.log(`My name is ${firstName + lastName}.` + `I live in ${city}` + ` and I am a ${profession}.`);