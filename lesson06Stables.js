let horseName = "Honda";
let horseAge = "10";
let isHorseInStable = true;
let horseNickName = "Ho";

// Horse = ["name", age, isInside]
let horseOne = [horseName, horseAge, isHorseInStable, horseNickName];
let horseTwo = ["Jimmy", 8, false, "Jim"];

console.log (horseOne);
console.log (horseTwo);
console.log (horseOne.length); // tells us how many items are there in the "horseOne" Array (count)

let horseColor = "Silver";
horseOne.push(horseColor); // lets you add a new element in an already existing element
console.log(`${horseOne[0]}'s nickname is ${horseOne[3]}`); //this lets you call an item in a specific position of an element
console.log(horseOne[1] * horseTwo[1]);

if (horseOne[1] * horseTwo[1] === 80){
    console.log("The total is 80");
} else if (horseOne[1] * horseTwo[1] > 80) {
    console.log("The total is greater than 80")
} else {
    console.log("The total is lower than 80");
}

// Lab Today - Branch lesson06 due date is sunday!!!!
// For Stables 
// - output an introduction to your horses
// - output wheater your horses are inside or outside. Atleast 3 horse!
// For readme
// - mention 3 confusing things
// - 3 things you have properly understood
// - Analogies that you use to think about things (optional gif)