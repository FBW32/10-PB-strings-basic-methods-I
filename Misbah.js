// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let parkWalking = "I can walk in the park all day!";
console.log(parkWalking.slice(-13, -9));

// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let myJava = "JavaScript";
console.log(myJava.indexOf("aSc"));
console.log(myJava.slice(3,6));

// Check if the sentence "nice shoes" contains the letter l or n.
let sentence1 = "nice shoes";
let findL = sentence1.indexOf("l");
let findN = sentence1.indexOf("n");
console.log(findL); //-1 (no)
console.log(findN);//0 (yes)
// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let firstName = "Misbah";
let city = "Berlin";
let myJob = "Student";
console.log(
    `My name is ${firstName} and I am from ${city} my Job is ${myJob}.`
  );
