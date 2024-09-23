// Hum Promises me chaining bhi kar sakte hai then aur catch ki jab hume returned value ko aur 
// further explore karna ho ya phir Database me se koi particular value nikaal ni ho.

const promiseOne = new Promise(function(relsove, reject){
    setTimeout(function(){
        relsove({
            username: "Blank",
            userId: "1234",
            password: "123"
        })
    }, 1000)
})

promiseOne.then(function(user){
    console.log(user);
    return user.username; // this value is returnd to the next chained then as an parameter
})
.then(function(username){
    console.log(username);
    return "TXT" // this is also returned to next then as parameter
})
.then((arg) => console.log(arg))