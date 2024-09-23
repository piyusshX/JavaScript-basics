// There are situations when we don't know how many number of parameters we will going to recive
// EXAMPLE -> Shopping Cart
// to deal with such situations we can use "rest operator(...)" -> yes it has same symbol as spread operator

// Rest Operator returns an array of all the parameter

// Syntax -> function funName(...para){ Function Defination }

function calculateCartPrice(...price){
    return price
}

// console.log(calculateCartPrice(10, 99, 1000)); // [ 10, 99, 1000 ]

// We can also use the rest operator like this too
function cartPrice(val1, val2, ...price){ // Here val1 -> 10, val2 -> 99
    return price
}

console.log(calculateCartPrice(10, 99, 1000, 2000)); // [ 10, 99, 1000, 2000 ]




// <--------------------------------- Passing Objects to a Function -------------------------------------------->


const user = {
    name: "Deku",
    age: 16,
}

function handleObject(anyObject){
    console.log(`User's name is ${anyObject.name} and he's ${anyObject.age} years old`);
}

// handleObject(user); // User's name is Deku and he's 16 years old

handleObject({ // User's name is Deku and he's 16 years old
    name: "Deku",
    age: 16,
})


// <--------------------------------- Passing Array to a Function -------------------------------------------->

const myArr = [100, 200, 400, 500]

function print3rdValue(arr){
    console.log(arr[2]);
}

print3rdValue(myArr) // 400