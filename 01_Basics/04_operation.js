let val = 4
let negVal = -val
// console.log(negVal);

// Arithmatic Operations in JavaScript
// console.log(2+2); // additon
// console.log(2-5); // substraction
// console.log(2*2); // multiplication
// console.log(2**4); // by using x**y we can get x to the power y
// console.log(2/2); // division
// console.log(2%3); // modulus -> remainder

// String Operation
let str1 = "Kono"
let str2 = "Suba"
let str3 = str1 + str2
// console.log(str3);


// string to number / number to string confussion

// agar number pahale hai to unpe operation perform hoga and then vo string ke sath merge hoga
// agar string pahale hai to sare data types string me append hojaye ge 

// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log(1 + 2 + "3"); // "33"
// console.log("1" + 2 + 3); // "123"
// // if we want above output -> "15" then we have to use ()
// console.log("1" + (2 + 3)); // "15"



// boolean
console.log(true); // true
console.log(+true); // 1 -> by using + boolean is converted into number
console.log(+""); // 0


// multiple assignment

let num1, num2, num3
num1 = num2 = num3 = 55

console.table([num1, num2, num3]);

// prefix and postfix operator

// prefix
console.log("Prefix");
let ans1 = 6
let ans2 = ++ans1 
console.table([ans1, ans2]);
// postfix
console.log("Postfix");
ans1 = 4
ans2 = ans1++ 
console.table([ans1, ans2]);

