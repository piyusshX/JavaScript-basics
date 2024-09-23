// const -> once a value is assigned it can't be change/modified
const accountId = 13453;
// accoountId = 124643; // Not allowed


// var -> this used to declare variable and we can also change its value
var accountEmail = "piyush@yahoo.com";
// let -> this is similar to var and we prefer to use let in place of var bcz of scope issues with var
let accountPassword = "12345";
// Important Note : prefer not to use var because of the issue in block scope and functional scope


// we can also declare the variable like this
accountCity = "Bina"; // but dont use this 


// we can also declare a variable without initializing its value
let accountUserName;

console.log(accountId);
// we can print the data in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity, accountUserName]);