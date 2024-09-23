// Promise -> The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

// Syntax -> new Promise(function(resolve, reject){
//              // Do an async task
//              // DB calls, cryptography, network
//              resolve(returnParameter) // connect to then 
//          })

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task is complete");
        resolve() // must to execute
    }, 1000)
})

// to consume a promise we used "then" keyword
// then -> jo bhi value hamara Promise return karta hai vo then ke callback function me aajati hai
// Syntax -> promiseName.then(callback_function)

promiseOne.then(function(){
    console.log("Promise consumed");
})

// Syntax without storing the Promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise 2 consumed");
})


// Returning a value from a Promise 

// for returning a value we need to pass it in the resolve() as argument and then keyword will 
// accept it as parameter

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Piyush",
            email: "piyush@email.com"
        })
    }, 1000)
})

promiseThree.then(function(userInfo){
    console.log(userInfo);
})
