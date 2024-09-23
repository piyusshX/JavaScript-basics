// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// Array -> In JavaScript array can store multiple elements (either same type or different)
// Array are object type in JS and they are resizable in JS and also follow 0 based indexing
// JavaScript array-copy operations create shallow copies(meaning change in copy will reflect on the orignal)
// Shallow Copy -> A copy which shares the same refrence point as orignal

// Declaring Array
let myArr = [0, 1, 2, 3, 4, 5]

let isekai = ["MushokuTensei", "Slime", "FinestAssiassin", "EminenceInShadow" ]

let myArr2 = new Array(1, 2, 3, 4, 5)


// <--------------------------------------- Array Methods --------------------------------------------------->

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(7); // this method insert the given element at the start and shift all the other elements by one place
// console.log(myArr); // [ 7, 0, 1, 2, 3, 4, 5 ]

myArr.shift(); // this method removes the first element and shift back all the other elements
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]


// console.log(myArr.includes(8)); // false
// console.log(myArr.includes(1)); // true


// console.log(myArr.indexOf(10)); // -1 -> not present in array
// console.log(myArr.indexOf(2)); // 2 -> present at 2nd idx


const newArr = myArr.join(); // joins all the ele of array by comma(,) and convert it into string

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr) // string



// <-------------------------------------- Slice and Splice ------------------------------------------------>

console.log("A ", myArr); // before slice
// Slice
const arr1 = myArr.slice(1,3);
console.log("Slice : ", arr1);


console.log("B ", myArr); // after slice and before splice 

// Splice
const arr2 = myArr.splice(1,3);
console.log("Splice : ", arr2);

console.log("C ", myArr); // after splice


// Slice does not include the ending idx element and does not affect orignal array

// Splice include the ending idx element and also affect orignal array
