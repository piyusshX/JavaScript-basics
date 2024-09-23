// <------------------------------------------ reduce function ------------------------------------------------->


//  Reduce Function -> it is an iterative method. It runs a "reducer" callback function over all elements in 
// the array, and accumulates them into a single value.

// It is mostly in Shopping Cart for amount calculation.

// Syntax -> arrName.reduce( function (accumulator, currValue, currIndex, array) { fun defination }, initialVal )

// accumulator -> The value resulting from the previous call to callbackFn. On the first call, 
// its value is initialValue if the latter is specified; otherwise its value is array[0].

// currValue -> The value of the current element.

// initialVal -> A value to which accumulator is initialized the first time the callback is called.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval // 6 -> 0(initial value) + 1 + 2 + 3 = 6 
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // also write the above statement like this

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "WorldEnd Vol 1",
        price: 998
    },
    {
        itemName: "Classroom Of the Elites Vol 7",
        price: 1399
    },
    {
        itemName: "Casestudy of Vanitas",
        price: 859
    },
    {
        itemName: "Mushoku Tensei",
        price: 1299
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`Total Amount : ${priceToPay}`);