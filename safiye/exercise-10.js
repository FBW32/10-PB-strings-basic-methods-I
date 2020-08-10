//1
let walkingInThePark = "I can walk in the park all day!";
console.log(walkingInThePark.slice(-13, -9));
//2
let script = "JavaScript";
console.log(script.slice(3, 6));
//3
let shoes = "nice shoes";
console.log(shoes.includes("1"));
console.log(shoes.includes("n"));
//4
let myName = "Safiye Guelenc";
let familyStand = "married";
let location = "Germany, Berlin";
console.log(
  `My name is ${myName.slice(0, 6)} and I am ${familyStand.slice(
    0,
    7
  )}.I live in ${location.slice(9)}.`
);
