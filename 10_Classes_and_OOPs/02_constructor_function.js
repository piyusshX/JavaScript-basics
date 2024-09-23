// Constructor -> In simple words Constructor Functions are used to create new instances of an object.
// Or in otherwords creates a new context.

// if we didn't use constructor functions like new then the changes will be made in the orignal
// object only and values will keep on changing as we create new objects one after another without
// constructor function.

// Constructor function hume ek new copy deta hai ek object ki jiss me modification karne se kisi
// dusre object pe koi fark nhi padta. 


function MHA_hero(realName, heroName, quirk, age){
    this.realName = realName;
    this.heroName = heroName;
    this.quirk = quirk;
    this.age = age;
    
    return this; // this will return the current context -> MHA
    // if we dont return this it will also work
}

const hero1 = new MHA_hero("Izuku Midoriya", "Deku", "One for all", 17);

// console.log(hero1);

const hero2 = new MHA_hero("Shoto Todogiri", "Shoto", "Half-Hot Half-Cold", 17);

// console.log(hero2);

console.log(hero1.constructor) // points to the main object's refrence