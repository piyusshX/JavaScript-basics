// async-await -> its another type of function that can handle Promise, but there is one problem
// in it that it cannot handle error. To resolve that we can use try and catch block.

// Syntax -> async function funName(){
//                  const response = await promiseName
//                  console.log(response)
//          }

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            console.log("First Promise")
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// In this case where promise is resolved  there wont be an error in async-await
async function consumePromiseOne(){
    const response = await promiseOne
    console.log(response);
}

consumePromiseOne()


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            console.log("2nd Promise")
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// but here to handle promise which is been rejected we need to use try and catch block

async function consumePromiseTwo(){
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseTwo()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // takes time to fetch resource
                                                                        
        const data = await response.json() // similar to fetching converting also takes sometime -> so we use await to
        console.log(data); // if we didnt use await in above statement then code will not work properly
    } catch (error) {
        console.log("E: ", error);
    }
}

//getAllUsers()