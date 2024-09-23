// dataTypes -> two types based on how they are stored in the memory and accessed from memory.

// Primitive -> call by value
// 7 types -> string, number, boolean, null, undefined, symbol, bigint

const str = "piyush" // string
const num = 21.3 // number
let isLoggedIn = true // boolean
let outsideTemp = null // null
let username; // undefined
let id = Symbol('133') // symbol
let bgInt = 39303903083833n //vbigint

// Non-Primitive/Refrence-Type -> call by refrence
// mainly 3 types -> Array, Object, Function

// Array
let isekai = ["Mushoku Tensei", "Re:Zero", "Slime", "Finest Assassin"];
// Object
let myObj = {
    name: "Kazuma",
    age: 18,
}
// Function
const myFun = function(){
    console.log("Hello World");
}
