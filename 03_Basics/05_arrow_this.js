// this -> this keyword is used to refer current context, and points to a value( which is usually an object )

const user = {
    username: "Piyush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // print the current context which is user object
        // output of this keyword :-
        // { // for 1st function call
        //     username: 'Piyush',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        // }

        // { // for 2nd function call
        //     username: 'Deku',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        // }
    }

}

// user.welcomeMessage() // Piyush , welcome to website
// user.username = "Deku"
// user.welcomeMessage() // Deku , welcome to website -> bcz we have changed the current context from Piyush to Deku

// console.log(this); // {} -> this points to an empty object bcz we're in node environment and there in no context
// in global. But if we were in an browser environment then this will be pointing at window object bcz browser
// me global object window object hota hai.


function demo(){
    // console.log(this); // we can also execute this in a function
    let username = "deku"
    console.log(this.username); // undefined -> context is not working in functions, so we can't use this here
}

// demo()

const demo2 = function(){
    let username = "deku"
    console.log(this.username);
}

// demo2() // undefined



// <--------------------------------------------- Arrow Function ------------------------------------------------->


// Arrow function { () => {} } is concise way of writing JavaScript functions in shorter way.
// In Arrow functions there's no binding/context to this, if we use this in arrow function it will just refrence to
// the global context -> here {} bcz of node and in browser window object

// Syntax -> funName = (parameters) => { function defination } / () => {}

const demo3 = () => {
    console.log(this)
}

// demo3() // {}

const addTwoNumber = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwoNumber(3, 5)) // 8


// Implicit return -> a way of returning a value from a function without explicitly using the "return" keyword.
// We uses this method when we have only have one line return statement function or we just want to return a value.

// Syntax -> funName = (parameters) => ( expression/object/variable to return ) / () => ()

const implicitReturn = (num1, num2) => (num1 + num2)
console.log(implicitReturn(3,7)); // 10

// This is very useful when we have to return an object 

const impReturn = () => ({name: "Deku", age: 16,})

console.log(impReturn()); // { name: 'Deku', age: 16 }
