// Function -> It's nothing but a block of code which executes some task.
// To avoid writting a same code again-n-again we can define a function.
// Functions are Object

// Syntax -> function funNAme(parameters){ Function Defination }
// Syntax -> varName/funName = function(parameters){ Function Defination }

// Function execution Syntax -> funName(arguments);

function name(){
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// name; // This is refrence of the function
// name(); // this is function execution

function addTwoNumbers(num1, num2){
    return num1 + num2
}

const sum = addTwoNumbers(4,6)
// console.log(`Sum : ${sum}`);

function loginUserMessage(username = "sam"){ // Default parameter
    if(!username){ // since ("") -> means false so -> !("") = true
        console.log("PLease enter a username"); // if empty string("") will be passed
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deku")); // Deku just logged in
// console.log(loginUserMessage()); // sam just logged in
console.log(loginUserMessage("")); // PLease enter a username