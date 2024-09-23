// Higher-Order Loops -> these loops are mainly used on arrays, strings, objects, maps etc. for iterating.


// <----------------------------------------- for-of loop ----------------------------------------------------->

// Syntax -> for(iterator/variable of arrName/iteratable){ statement }

const newArr = [1,2,3,4,5]
for (const arr of newArr) {
    // console.log(arr);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(greet);
}

// <------------------------------------------------- MAP ---------------------------------------------------->

// MAP -> Map are similar to object and has collection of key-value pairs. A key in the Map may only occur 
// once and remembers the original insertion order of the keys.

// Syntax -> mapName = new Map();
// set val -> mapName.set('Key', value);

const newMap = new Map
newMap.set('IN', "India")
newMap.set('USA', "United States of America")
newMap.set('Fr', "France")
newMap.set('IN', "India") // Duplicate

// Printing Map with for-of loop

// Syntax -> for (const [key, value] of mapNqme) { statement }

for (const [key, value] of newMap) {
    // console.log(key, ':-', value);
}


// Maps and objects are similar but we cannot print them in same way

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA-V',
}

// for (const [key, value] of myObject) { // Shows error
//     console.log(key, ':-', value);
// }

// As we can see that for-of loop didn't print the object

// To print objects we use for-in loop

