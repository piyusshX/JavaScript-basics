// Object declaration using constructor

const newUser = new Object();

const heroName = Symbol("key1"); // Symbol

// adding keys
newUser.name = "Izuku Midoriya"
newUser.age = 16
newUser[heroName] = "Deku"
newUser["quirk name"] = "One For All"
newUser.isProHero = false

// console.log(newUser);

// adding Objects inside an Object
const newObj = {
    userName: {
        realName: {
            firstName: "Piyush",
            lastName: "Jain",
        }
    }
}

// console.log(newObj.userName.realName.firstName); // Piyush
// console.log(newObj.userName.realName.lastName); // Jain


// <------------------------------------------------------------------------------------------------------------>


// how to copy/merge properties of two or more objects in one operator

// Method 1
// assign operator -> copies all properties from one or more source objects to a target object

// Syntax -> newObj = Object.assign(obj1, obj2, obj3, ...); -> first parameter will always be the target

// Note -> Since obj1 is target all the properties will be stored in obj1 -> meaning it will be modified 
// newObj == obj1 -> true

// to avoid modifying obj1 we can pass an empty object {}

// Ex -> newObj = Object.assign({}, obj1, obj2, obj3, ...);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 } // Array of Objects 
// console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// Method 2
// spread (...) -> mostly used
// Syntax -> newObj = {...Obj1, ...Obj2, ...Obj3, and so on} 
// Note -> in array we have to use square bracket[] and here we have to use curly bracket{} 

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// <------------------------------------------------------------------------------------------------------------>


// accessing Object values from an Array of Objects

const student = [
    {
        name: "Piyush",
        rollNo: 43
    },
    {
        name: "Mayank",
        rollNo: 37
    },
    {
        name: "Vasule",
        rollNo: 50
    },
]

// Syntax -> arrName[idx].key / arrName[idx]["key"] / arrName[idx][key]

// console.log(student[1]["name"]); // Mayank
// console.log(student[2].name); // Vasule


// <------------------------------------------------------------------------------------------------------------>

// Some important Methods of Object

console.log(newUser);

// keys() -> returns an array of keys of an object
// Syntax -> Object.keys(objName);
console.log(Object.keys(newUser)); // [ 'name', 'age', 'quirk name', 'isProHero' ]


// values() -> returns an array of values of an object
// Syntax -> Object.values(objName);
console.log(Object.values(newUser)); // [ 'Izuku Midoriya', 16, 'One For All', false ]


// entries() -> it returns an array of arrays consist of pairs of key and value
// Syntax -> Object.entries(objName);
console.log(Object.entries(newUser)); 
// [ [ 'name', 'Izuku Midoriya' ], [ 'age', 16 ], [ 'quirk name', 'One For All' ], [ 'isProHero', false ] ]


// hasOwnProperty() -> returns an boolean value by checking if the object contains the given key
// Syntax -> objName.hasOwnPropery('keyName');
console.log(newUser.hasOwnProperty('quirk name')); // true
console.log(newUser.hasOwnProperty('quirk')); // false


// <-------------------------------------------------------------------------------------------------------------->