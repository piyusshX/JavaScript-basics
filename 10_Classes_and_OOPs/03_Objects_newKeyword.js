// As we know that JavaScript is a Prototypal Language and everything is consider to be an Object in it.
// But the Question is are Function can also be considered as Objects ?

// Let's Find Out :-

function multiplyByFive(num){
    return num*5
}

multiplyByFive.power = 3 // But multiplyByFive is a function than how are we able to use .(dot) ?
// Beacuse of Prototypal Behaviour in JavaScript.

console.log(multiplyByFive(3)); // 15
console.log(multiplyByFive.power); // 3
console.log(multiplyByFive.prototype); // {}

// As we can see above that function also have Prototype Object in it so we can say that Functions
// inherites Object's Properties

// For more details Watch this -> https://youtu.be/uMI5cNeHTOc?si=Bsmd_SX_Ei336-kY

function createUser(username, score){
    this.username = username 
    this.score = score
}

// Adding our own Properties in Prototype

// Syntax -> Object_name.prototype.PropertyName = function(){ function_defination }


createUser.prototype.increment = function(){
    this.score++ // this -> jiss ne call kiya hai uss ka score
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // this matlab jiss
}

const chai = new createUser("chai", 25) // if we didn't use new keyword then code will give error
const tea = new createUser("tea", 250)

chai.printMe()


// Here's what happens behind the scenes when the new keyword is used:

// 1 -> A new object is created: The new keyword initiates the creation of a new JavaScript object.

// 2 -> A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
// function. This means that it has access to properties and methods defined on the constructor's prototype.

// 3 -> The constructor is called: The constructor function is called with the specified arguments and this is 
// bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript 
// assumes this, the newly created object, to be the intended return value.

// 4 -> The new object is returned: After the constructor function has been called, if it doesn't return a 
// non-primitive value (object, array, function, etc.), the newly created object is returned.

