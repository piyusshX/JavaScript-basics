// Math is default library of JavaScript and it has many Methods/Functions

// abs -> absolute value of a number -> abs(-Val) = Val
// console.log(Math.abs(-5)); // 5

// round -> it normally round-off the given value
// console.log(Math.round(6.7)); // 7

// ceil -> ceiling means it alway round-off a value to upper limit
// console.log(Math.ceil(2.3)); // 3

// floor -> it alway round-off a value to lower limit
// console.log(Math.floor(7.9)); // 7


// other Math methods

// console.log(Math.sqrt(25)); // 5 -> give squreRoot of a number

// console.log(Math.min(4, 6, 3, 7, 4, 10)); // 3 -> give minimum value from the given values/array 

// console.log(Math.max(4, 6, 3, 7, 4, 10)); // 10 -> give maximum value from the given values/array 



// random -> it gives the value between 0 and 1, to get values other than 0 and 1 we use arithmatic operations

console.log(Math.random()); // give value between 0 and 1

console.log((Math.random() * 10) + 1); // we add 1 to avoid getting 0, here minimum value will be 1

console.log(Math.floor((Math.random() * 10) + 1)); // it round-off the decimal value

// How to set of random number

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min)); // random value between 10 and 20