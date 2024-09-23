// class -> As we have disscussed earlier that in JavaScript class is just Syntactical Sugar and behind
// the scene Prototype me hi sab chal raha hai

// Syntax -> class className{ 
//               constructor(){
//                   constructor defination
//               } 
//
//               // Functions inside the class
//
//               functionName(){
//                   function defination
//               }
//           }

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const Player1 = new User("blank", "blank@gmail.com", "123")

console.log(Player1.encryptPassword());
console.log(Player1.changeUsername());

// behind the scene of class keyword 
// Since User class is already been declared we'll use newUser to see behind working of class

function newUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const Player2 = new newUser("Deku", "deku@gmail.com", "123")

console.log(Player2.encryptPassword());
console.log(Player2.changeUsername());