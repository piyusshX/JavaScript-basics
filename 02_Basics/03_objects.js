// Objects -> We can declare objects in two ways -> (1) Literals, (2) Constructor

// When we declare an object with Constructor it will always becomes an Singleton (Its one of its kind) object
// Object.create(objName);

// When we declare an object as literals it does not becomes Singleton 

// But note that there is no difference between both objects except for one being singleton


// <------------------------------------------------------------------------------------------------------------->

// Object Literals
// Syntax -> objName = { key: value,} -> keys are used to access the values

const heroName = Symbol("key1"); // Symbol

const user = {
    name: "Izuku Midoriya", // string
    age: 16, // Number
    [heroName]: "Deku", // Symbol
    "quirk name": "One For All", // also declare with space like this
    status: "Student At UA High",
    isProHero: false, // Boolean
}

// Accessing object Values

// we can access normal values like this -> objName.key
// console.log(user.name);

// But for accessing keys declared with space like this -> "Key name" we have to use other method
// Syntax -> objName["key"]
// console.log(user["quirk name"]); 

// Accessing Symbol 
// Syntax -> objName[symName];
// console.log(user.heroName); // undefined -> bcz this syntax does not work for accessing symbol
// console.log(user[heroName]); // Deku


// Updating/Overwritting value
// Syntax -> objName.key = updatedValue;

user.age = 17
// console.log(user.age); // 17

// freeze -> Freeze an Object
// Syntax -> Object.freeze(ObjName);
// Object.freeze(user)
// user.age = 19 // It didn't give any error but age is not updated
console.log(user);


// Adding Function in an Object
// Syntax -> objName.FunName = function(arg){ function defination }

user.greeting = function(){
    console.log("Hello I'm Deku, Nice to meet you")
}

// console.log(user.greeting); // [Function (anonymous)] -> fun is not executed, only its refrence is returned back
console.log(user.greeting());

// For refrencing the same object we can use (this) keyword
// (this) allows us to access all the properties of the object
// Syntax -> this.key / this["key"] / this[sym]
user.greeting2 = function(){
    console.log(`Hey! there I'm ${this.name} and my Hero Name is ${this[heroName]}`)
}
console.log(user.greeting2());