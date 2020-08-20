/* Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
 */ let maja = "I can walk in the park all day!";
console.log(maja.slice(18, 22));

/* Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
 */
let maja2 = "JavaScript";
console.log(maja2.slice(3, 6));

/* Check  if the sentence "nice shoes" contains the letter l or n.
 */
let maja3 = "nice shoes";
console.log(maja3.indexOf("L")); // -1
console.log(maja3.indexOf("n")); // 0

/* 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
 */
let firstName = "Maja";
let city = "Berlin";
let age = "40";
let total = `My name is ${firstName} I live in ${city} and I have ${40} years old.`;
console.log(total);
