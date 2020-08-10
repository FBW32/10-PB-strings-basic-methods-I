// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let parkString = "I can walk in the park all day!";

let findPosition = parkString.indexOf("park");
console.log(findPosition); // 18
let findPosition2 = parkString.lastIndexOf("k");
console.log(findPosition2);  // 21
let printPark = parkString.slice(18, 22);
console.log(printPark); // park 


// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let varJs = "JavaScript";
let extract = varJs.indexOf("aSc");
console.log(extract); // 3
let noExtract = varJs.indexOf("ript");
console.log(noExtract); // 6
let printaSc = varJs.slice(3, 6);
console.log(printaSc); // aSc


// 3. Check if the sentence "nice shoes" contains the letter l or n.

let shoeString = "nice shoes";
let ifInclud1 = shoeString.includes("l") || shoeString.includes("n");
console.log(ifInclud1);  // true


// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let firstName = "Gabriele";
let job = "web developer";
let nationality = "I'm from Italy."
console.log("Hallo, I'm" + firstName + ". " + "I'm a" + " " + job + " and " + nationality); // Hallo, I'm a Gabriele. I'm a web developer and I'm from Italy.
 // or below in another way:

console.log(`Hallo, I'm ${firstName + ". " + "I'm a " + job} . I live in Berlin but ${nationality}`); // Hallo, I'm Gabriele. I'm a web developer . I live in Berlin but I'm from Italy.