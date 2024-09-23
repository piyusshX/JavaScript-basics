// Some more methods of Array

const MHA_heros = ["Deku", "Shoto", "Bakago"]
const MHA_villains = ["Shigaraki", "Himiko", "Dabi"]

// Now if we push MHA_villains in MHA_heros -> Elements of both array will not merge 
// Instead of merging MHA_villains array will treat as 1 element and got inserted into MHA_heros

MHA_heros.push(MHA_villains)
// console.log(MHA_heros); // [ 'Deku', 'Shoto', 'Bakago', [ 'Shigaraki', 'Himiko', 'Dabi' ] ]
MHA_heros.pop()

// <------------------------------------------Merging Elements of two Array---------------------------------------->

// Method 1

// For Merging Elements of both Arrays we can use concat() and store it in new array

const MHA_characters = MHA_heros.concat(MHA_villains) // Merges elements of both array and returns a new array
// console.log(MHA_characters); // [ 'Deku', 'Shoto', 'Bakago', 'Shigaraki', 'Himiko', 'Dabi' ]


// Method 2

// spread(...) -> mostly used
// Syntax -> newArr = [...Arr1, ...Arr2, ...Arr3, and so on]
// We can also use spread operator(...) to merge elements of two or more arrays


const all_MHA_char = [...MHA_heros, ...MHA_villains];
// console.log(all_MHA_char); // [ 'Deku', 'Shoto', 'Bakago', 'Shigaraki', 'Himiko', 'Dabi' ] 


// <------------------------------------------------------------------------------------------------------------>

// flat -> Create a new array with all sub-array elements concatenated 
// into it recursively up to the specified depth.

// Syntax -> newArr = arrName.flat(depth); 

const newArr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]]
const anotherArray = newArr.flat(Infinity);
// console.log(anotherArray); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// <------------------------------------------------------------------------------------------------------------>

// We can also check and convert some values into array with -> Array

console.log(Array.isArray("Deku")); // false -> bcz its string
console.log(Array.from("Deku")); // [ 'D', 'e', 'k', 'u' ]
// we can also give values other than string

console.log(Array.from({a: "Deku"})); // [] -> humne ye nhi bataya ki hume values ki array banani hai ya keys ki

// we can also create Array of multiple variables

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
