console.log("horses are great!") //string sample, it is a sequence of characters
let horseName = "Gilbert"; //The variable is named using camel convention
let horseAge = 5; //this is a number, it is a sequence of numbers. anything inside a "---" is a string
let isHorseInStable = true; //This is a boolean
//decleration "let" is only supposed to be used 1 / the first time when your declaring a variable
console.log(horseName);
console.log(horseAge);
console.log(isHorseInStable);

console.log (typeof 42);
console.log (typeof "42");
console.log (typeof true);

const stableMonthlyFee = 100; //"let" can be updated anytime while "const" is a fixed value
console.log (stableMonthlyFee);
console.log (2 + 3);
const horseIntroduction = " is the name of my horse"
console.log (horseName + horseIntroduction); //the "+" operator can also be used to join multiple strings/numbers together
console.log ("it costs a " + stableMonthlyFee ** 2 + "$ to board the horse"); // "**" means to the power of..
console.log(`It costs ${stableMonthlyFee}$ to board ${horseName} on a monthly basis`) // "`" using a backtick lets you use variables within a string without using "+" or any quotations
console.log("-----------------------------------------------------------------------------------------------");
///////////// Lesson 4 - Assignment
let horseNickName = "Gilli";
console.log(`The Horse's name is ${horseName}, but you can call him ${horseNickName}. He's ${horseAge} years old.`);
console.log(`our usual price per month is ${stableMonthlyFee}$.`);
const discountPrice = (stableMonthlyFee * 3) * 0.1;
console.log (`But if you join today, you'll get a 10% discount for the first 3 months. This would bring the price down to ${(stableMonthlyFee * 3) - discountPrice}`)