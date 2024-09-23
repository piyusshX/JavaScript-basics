// Conditionals -> Helps in maintaining control flow in code or logical flow.

// <--------------------------------------------------- if-else ------------------------------------------------>

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 50 ){
//     console.log("less than 50");
// } 
// else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// Comparision Operators -> <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // Show error -> Out of scope


const balance = 1000

// if (balance > 500) console.log("test"); // We can also write oneline conditional without any curly-braces{}

// if (balance > 500) console.log("test"),console.log("test2"); // this'll also execute but don't code like this


// <--------------------------------------- else-if / Multiple if-else ---------------------------------------->

// if (balance < 500) {
//     console.log("less than 500");
// } 
// else if (balance < 750) {
//     console.log("less than 750");
    
// } 
// else if (balance < 900) {
//     console.log("less than 750");
    
// } 
// else {
//     console.log("less than 1200");

// }


// <---------------------------------------------- AND(&&) / OR(||) -------------------------------------------->

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}