// # Programming Basics: Basic String Methods


// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console. 

let myString1 = "I can walk in the park all day!";
//INCLUDES
let ifIncluded = myString1.includes('park');
console.log(ifIncluded); // true
//SLICE
let slicedString1 = myString1.slice(18, 22);
console.log(slicedString1); //park
let slicedString2 = myString1.slice(-13, -9);
console.log(slicedString2); //park

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let javaScript = "JavaScript";
console.log(javaScript.slice(3, 6));

// 3. Check if the sentence "nice shoes" contains the letter l or n. 
let myString2 = "nice shoes"
console.log(myString2.includes("l", "n")); // false
console.log(myString2.includes("l")); // false
console.log(myString2.includes("n")); // true

// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
let myName = "Irina";
let city = "Berlin";
let occupation = "student";
let sentence = `My name is ${myName}. I live in ${city} and I am a ${occupation}.`; 
console.log(sentence);// My name is Irina. I live in Berlin and I am a student.