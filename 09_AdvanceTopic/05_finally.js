// finally() -> this keyword is executed either promise is either resolved or rejected

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name: "Piyush", age: 18})
        } else {
            reject("ERROR : something went wrong")
        }
    }, 1000)
})

promiseOne.then(function(user){
    console.log(user);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

// Output :-

// ERROR : something went wrong                      // -> Beacuse an error occure 
// The promise is either resolved or rejected        // -> it has to execute either resolved or rejected