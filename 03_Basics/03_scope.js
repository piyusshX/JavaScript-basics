// Scope -> In most of the programming languages (including JS) -> { curly braces } defines the scope

// We don't use var beacuse it doesn't block Scope 

// var c = 20 // value get modified 

if(true){
    let a = 100
    const b = 400
    var c = 200
}

// console.log(a); // out of scope
// console.log(b); // out of scope
console.log(c); // 200 -> even though its outsize of scope -> this lead to problems