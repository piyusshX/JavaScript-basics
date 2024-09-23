// Nested Scope 

function one(){
    const username = "Piyush"

    function two(){ // Since function two() is inside one(), it'll treat one() as kind of global scope meaning
        const website = "youtube" // two() can access one()'s variables
        console.log(username); // Piyush
    }
    console.log(website); // Show error -> out of scope

    two()
}

// one(); // Piyush

if (true) {
    const firstname = "Piyush"
    if (firstname === "Piyush") {
        const lastname = " Jain"
        // console.log(firstname + lastname); // Piyush Jain
    }
    // console.log(lastname); // error -> out of scope
}

// console.log(username); // error -> out of scope


// <------------------------------------------ Mini-Hosting ---------------------------------------------------->

// Since we can declare functions in two ways there is a major difference in them.
// And which is that we can't execute the function before defining it in code. This happens
// beacuse of hosting of variables or functions( Will discuss in Detail ).

// Syntax 1 -> function funNAme(parameters){ Function Defination }
// Syntax 2 -> varName/funName = function(parameters){ Function Defination }

// This happens in Syntax 2

console.log(addone(5)) // Executes perfectly

function addone(num){ // Syntax 1
    return num + 1
}



// addTwo(5) // Gives error 

const addTwo = function(num){ // Syntax 2 
    return num + 2
}

addTwo(5)