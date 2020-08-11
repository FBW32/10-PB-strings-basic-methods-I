// ****************Exercise 10
// # Programming Basics: Basic String Methods

// **These exercises are aimed at making you more familiar with string methods
//  as well as string interpolation.
// Print your results of each exercise to the console. Use the terminal to view
//  your results.**

// **NB: declare each variable with a unique name so that you can run the
//  exercises below in a single script without SyntaxErrors. If you are not
//   sure what we mean by that, try first running your script with multiple
//    variables of the same name and see what happens. We'll wait.**

// 1. Declare a variable with the value of "I can walk in the park all day!".
//  Print the word "park" to the console.

let sunnyDay = "I can walk in the park all day!";
let sunnyDayPrint = sunnyDay.slice(18, 22);
console.log(sunnyDayPrint); // park

// 2. Declare a variable with the value "JavaScript".
// Use string methods to print the the characters "aSc"
// from your declared variable.

let varQ2 = "JavaScript";
console.log(varQ2.slice(3, 6)); // aSc

// 3. Check if the sentence "nice shoes" contains the letter l or n.

let varQ3 = "nice shoes";

// let checkVarQ3 = varQ3.includes("l" || "n");
// console.log(checkVarQ3); // false

let checkVarQ32 = varQ3.includes("n");
console.log(checkVarQ32); //true

let checkVarQ33 = varQ3.includes("l");
console.log(checkVarQ33); //false

// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let name = "Anika";
let like1 = "sleeping";
let like2 = "awake";

console.log(
  `My Name is ${name}. Sometimes I like being ${like2}, sometimes I like ${like1}.`
); // My Name is Anika. Sometimes I like being awake, sometimes I like sleeping.
