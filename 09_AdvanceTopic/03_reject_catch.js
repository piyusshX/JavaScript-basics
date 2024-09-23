// Reject and catch -> it executes when an error occure we can show that by using reject() and with catch we can
// display it

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

promiseOne.catch(function(error){
    console.log(error);
})