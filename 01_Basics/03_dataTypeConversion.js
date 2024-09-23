let score = "77" // string

// NUMBER

// to convert any dataType into number we can create a new variable or can store in previous one
// syntax -> var_name = Number(var);

let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber); // number
// console.log(score);

// if we have a string that cant be converted into number like "32ab" or "piyush" than
// the type of the variable will be change by the js but the value of the var will be
// NaN -> Not a Number

let a = "32ab"
let b = Number(a);
// console.log(typeof b); // number
// console.log(b); // NaN -> Not a Number

// if we have null as value than value in number will be zero
a = null
b = Number(a);
// console.log(b); // 0

// if we have undefined as value than value in number will be zero
a = undefined
b = Number(a);
// console.log(b); // NaN -> Not a Number

// "77" -> 77
// "34ab" -> NaN
// true -> 1; false -> 0
// null -> 0
// undefined -> NaN

// <------------------------------------------ END --------------------------------------------------------->

// BOOLEAN
// syntax -> var_name = Boolean(var);
let isLoggedIn = 16
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// if we use empty string -> false
isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // false


// if we use non-empty string -> true
isLoggedIn = "piyush"
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true


// 1 or any other value -> true
// 0 -> false
// "" -> false
// "non_empty" -> true

// <------------------------------------------ END --------------------------------------------------------->

// STRING
// syntax -> var_Name = String(var);
let someValue = 45
let someString = String(someValue);
console.log(typeof someString); // string
console.log(someString); // "45"


// if value is boolean
someValue = true
someString = String(someValue);
console.log(typeof someString); //string
console.log(someString); // "true"


// 45 -> "45"
// true -> "true"
// false -> "false"

// <------------------------------------------ END --------------------------------------------------------->