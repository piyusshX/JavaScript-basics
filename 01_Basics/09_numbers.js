const score = 300 // js set its type number
console.log(score);

// We can also Strictly declare a Number with new Keyword
const balance = new Number(400); 
console.log(balance);


// Similar to string Number also have some inbuilt functions

// toSting -> convert a number in string
// Syntax :- numName.toString();
console.log(balance.toString().length); // after converting it we can also use the string functions

// toFixed -> returns a string representation of a number with some digit after the decimal point
// Syntax :- numName.toFixed(digit); // used for precision 
console.log(balance.toFixed(2));

// toPrecision -> it is rounded to the nearest integer and returns a sstring
// Syntax :- numName.toPrecision(number_Of_Significant_Digits);
// it basically round off the nth(number_Of_Significant_Digit) digit
const num1 = 110.633
console.log(num1.toPrecision(4));


// toLocaleString -> it convert a number into local format by adding commas(,) to make it easy to read
// Syntax :- numName.toLocaleString('en-IN');  for indian format
const num2 = 1000000
console.log(num2.toLocaleString('en-IN')); // return a string