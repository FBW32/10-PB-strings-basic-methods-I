
// 1.)
let duty = "i can walk in the park all day!";
let sliceString = duty.slice(18,22);
console.log(sliceString);  // park

// 2.)
let myLang = "javaScript"
let sliceStringPart = myLang.slice(3, 6);  
console.log(sliceStringPart); // aSc

//3.)
let word = "nice shoes";
let partWordLetter = word.includes("l");
console.log(partWordLetter);  // false

let partWordLetter2 = word.includes("l" || "n");
console.log(partWordLetter2);  //  false 

//4.)

let name = "Larry"
let city = "Frankfurt"
let car = "RangeRover"
let age = "36 years"

console.log("my name is " + name + ", i live in "+ city + ". I bought my 1st " + car + " at the age of " + age );   //my name is Larry, i live in Frankfurt. I bought my 1st RangeRover at the age of 36 years