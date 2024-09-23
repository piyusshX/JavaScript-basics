// Closure -> A closure is the combination of a function bundled together (enclosed) with references 
// to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer 
// function's scope from an inner function.

// Jab hum kisi function ko hi return kardete hai tab Closure ki wajah se sirf function scope akela return nhi
// hota balki uske uska pura lexical scope bhi return hota hai.


function makeFunc() {
    const name = "Blank";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc(); // agar sirf displayName hi return hua hota to phir next line me 
myFunc(); // function execute nhi hota