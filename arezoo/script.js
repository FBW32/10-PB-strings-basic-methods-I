// Q1
let myString = "I can walk in the park all day!";
let result = myString.slice(18, 22);
console.log(result);

// NB
// let myString = "JavaScript";
// let result = myString.slice(3, 6);
// console.log(result); 'myString' has already been declared

// Q2
let myString2 = "JavaScript";
let result2 = myString2.slice(3, 6);
console.log(result2);

// Q3
let myStr3 = "nice shoes";
let result3 = myStr3.includes("l");
let result4 = myStr3.includes("n");
console.log(result3);
console.log(result4);
console.log(result4 || result3);

// Q4
let name = "arezoo";
let city = "berlin";
let age = "30";
let resultSentence = `my name is ${name} I live in ${city} and I'm ${age} years old.`;
console.log(resultSentence);
