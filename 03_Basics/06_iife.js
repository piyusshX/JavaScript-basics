// Immediately Invoked Function Expression (IIFE)
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// IIFE -> A JavaScript function that gets executed as soon as it is defined is known as IIFE. 

// We use IIFE for various reasons like :-

// 1. Sometime we write a file that only has Database connection and we want to start the Database connection 
// to that file right after the program/application is started, In that case we use IIFE.

// 2. To avoid the problems arises from global scope pollution in function.

// Syntax ->   ( function funName(){ function defination } )(); / (function)();

// NOTE -> IIFE doesn't konw where to end it's context so we have to end it by explicitly using SemiColon(;) at 
// the end of IIFE. Otherwise if we write another IIFE it'll show error (In case of regular function it'll be fine).

(function DBC(){ // Named IIFE
    console.log("Database Connected")
})();

(function (){ // Simple IIFE / Unnamed IIFE
    console.log("Server Connected")
})();


// Arrow Function as IIFE
// Syntax ->   ( () => { function defination } )(); / ( () => {} )();

( (username) => { // Simple IIFE / Unnamed IIFE
    console.log(`Welcome Back!! ${username}`)
} )("Piyush");
