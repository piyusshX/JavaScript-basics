// All JavaScript objects inherit properties and methods from a Prototype. Such as Array, Date, String
// Function etc. We can also add additional properties by using Prototype.

// https://www.reddit.com/user/Piyush255/comments/1dsyzeg/prototypal_inheritance_in_javascript/

let myHeroes = ["Deku", "Shoto", "Bakago"]

let heroQuirk = {
    deku: "One for all",
    shoto: "Half Hot Half Cold",
    bakago: "Explosion",

    getPower: function(hero){
        if(hero === myHeroes[0]) console.log(`Deku's Quirk is ${this.deku}`)
        else if(hero === myHeroes[1]) console.log(`Shoto's Quirk is ${this.shoto}`)
        else if(hero === myHeroes[2]) console.log(`Bakago's Quirk is ${this.bakago}`)
    }
}

// Declaring property by using Prototype

// Syntax -> entityName.prototype.propertyName = function () { Function Defination }

Object.prototype.tanjiro = function () {
    console.log("Tanjiro is Present Here!!!!");
}

// heroQuirk.tanjiro();

// Since we know that Array inherites Object's Properties than that means tanjiro is also present in
// Array too.

// myHeroes.tanjiro(); // Yes it is indeed present in Array too as we have added the property in Object

// If we add an property in Array then will Object be able to access it -> NOOOOOO

Array.prototype.heyTanjiro = function () {
    console.log(`Hey!! Everyone my name is Kamado Tanjiro`);
}

myHeroes.heyTanjiro() // works perfectly fine
// heroQuirk.heyTanjiro() // Give error


// Add a method trueLength which is avilable to all Strings that calculate and returns the ture length 
// of a string after. { True Length -> Length of String without any Space }

let anyString = "Piyush     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // print the refrence -> jiss ne call kiya vo print hoga
    console.log(`True length is: ${this.trim().length}`); // trim will remove all the spaces
}

anyString.trueLength()
"Kamado Tanjiro     ".trueLength()
"Rengoku       ".trueLength()

