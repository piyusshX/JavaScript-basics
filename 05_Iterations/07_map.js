// map method -> it returns every value being the result of the callback function.

// Syntax 1 -> arr = arrName.map( function (element, index, array) { function defination } ) // Normal function
// Syntax 2 -> arr = arrName.map( (element, index, array) => { function defination } ) // Arrow function
// Syntax 3 -> arr = arrName.map( funName ) // Already defined function


const myNumers = [1, 2, 3, 4, 5]

const newNums = myNumers.map( (num) => { return num + 10})

// console.log(newNums); // [ 11, 12, 13, 14, 15 ]

// We can also do chaining of methods

// const newArr = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)

// We can also write the above equation like the equation down below

const newArr = myNumers
                .map((num) => num * 10 ) // [ 10, 20, 30, 40, 50 ]
                .map( (num) => num + 1) // [ 11, 21, 31, 41, 51 ]
                .filter( (num) => num >= 40) // [ 41, 51 ]

console.log(newArr); // [ 41, 51 ]