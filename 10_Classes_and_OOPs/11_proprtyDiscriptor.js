// There are some properties of objects that are hidden in javascript that works behind the scene in it,
// and to see those properties we can use a method call "getOwnPropertyDescriptor()" and re-write those 
// properties using "defineProperty()" but note that we cannot re-write every property using this method.
// There are many values/objects/functions/etc who's properties cannot be re-written.

// Syntax -> Object.getOwnPropertyDescriptor(Module, "Value")
// Syntax -> Object.defineProperty(Module, value, { propertyName : value, })

const piValue = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(piValue);
// Output :
// {
//     value: 3.141592653589793,
//     writable: false, // as we can see it is not writable so we cannot edit it
//     enumerable: false,
//     configurable: false
// }

console.log(Math.PI); // 3.141592653589793

Math.PI = 5;
console.log(Math.PI); // 3.141592653589793

// The Code below gives error beacuse Math.PI's properties cannot be re-written

// Object.defineProperty(Math, "PI", {
//     writable: true,
//     configurable: true,
// })

const Player = {
    username: 'Blank',
    HP: 90,
    isAlive: true,

}

console.log(Object.getOwnPropertyDescriptor(Player, "username"));
// Output :
// {
//     value: 'Blank', 
//     writable: true, // username can be modified
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(Player, 'username', {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(Player, "username"));
// Output :
// {
//     value: 'Blank',
//     writable: false, // username cannot be modified
//     enumerable: true,
//     configurable: false
// }

Player.username = "Piyush"

console.log(Player.username) // Blank -> username is not modified
