// Stack Memory -> all the primitive data types uses stack memory
// In Stack memory we are given the copy of original variable

// Heap Memory -> all the non-primitive data types uses heap memory
// In Heap memory we are given the refrence of the original variable



// image for refrence https://www.reddit.com/user/Piyush255/comments/1d1nnjt/stack_memory_and_heap_memory/

// Stack
let userName = "piyush"
let inGameName = userName // "piyush" -> copy of userName
// now if we do changes in inGameName it wont reflect on userName 
// Beacuse inGameName is a copy of userName
inGameName = "blank"
console.log(userName); // "piyush"
console.log(inGameName); // "blank"


// Heap
let userOne = { 
    characterName: "Blank",
    health: 74,
    ammo: 30,
}
let userTwo = userOne // directly pointing to the original variable
// if we change something in userTwon it will reflect on the userOne

userTwo.characterName = "piyush"
userTwo.health = 84
userTwo.ammo = 50

console.log("userOne's stats");
console.table([userOne.characterName, userOne.health, userOne.ammo]);

console.log("userTwo's stats");
console.table([userTwo.characterName, userTwo.health, userTwo.ammo]);
