// <--------------------------------------- While Loop --------------------------------------------------------->

let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let i = 0
while (i < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    i++
}

// <--------------------------------------- Do-While Loop ---------------------------------------------------->

// It executes the loop before checking the condition, So even if the condition is not satisfied loop will  
// atleast going to be executed one time. 


let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);