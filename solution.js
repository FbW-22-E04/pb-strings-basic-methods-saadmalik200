// const parkWalkStr = "I can walk in the park all day!";
// console.log(parkWalkStr.slice(18, 23));

// Q1

const parkWalkStr = "I can walk in the park all day!";
console.log(parkWalkStr);
const parkStart = parkWalkStr.indexOf("p");
const parkEnd = parkWalkStr.lastIndexOf("k");
console.log(parkWalkStr.substring(parkStart, parkEnd + 1));

// Q2

const helloStr = "Hello World";
console.log(helloStr);
console.log(helloStr.toUpperCase());

// Q3

const earthlingsStr = "Hello Earthling";
console.log(earthlingsStr);
console.log(earthlingsStr.toLowerCase());

// Q4

const jsStr = "JavaScript";
console.log(jsStr);
console.log(jsStr.slice(3, 6));

// Q5

const niceShoesStr = "nice shoes";
console.log(niceShoesStr);
console.log(niceShoesStr.includes("I"));
console.log(niceShoesStr.includes("n"));

// Q6

const oldStr = "Computer";
console.log(oldStr);
const newStr = oldStr[0] + oldStr + oldStr[0];
console.log(newStr);

// Q7

const scritcherStr = "Travelling";
console.log(scritcherStr);
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars);
console.log(lastThreeChars + scritcherStr + lastThreeChars);

// Q8

const boogieNightsStr = "HelloThere";
console.log(boogieNightsStr);
console.log(
  boogieNightsStr[boogieNightsStr.length - 1] +
    boogieNightsStr.substring(1, boogieNightsStr.length - 1) +
    boogieNightsStr[0]
);

// Q9

const firstName = "Saad";
const city = "Bremen";
const job = "Student";
console.log(firstName);
console.log(city);
console.log(job);

console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);

const foxStr = "the quick brown fox";
console.log(foxStr);
console.log(foxStr[0].toUpperCase() + foxStr.substring(1));
