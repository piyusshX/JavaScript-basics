// The static keyword defines a static method or field for a class, or a static initialization block.
// Static properties cannot be directly accessed on instances of the class. Instead, 
// they're accessed on the class itself. 

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        console.log(`ID : ${User.createId()}`);
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("Blank")
// console.log(hitesh.createId()); // it'll not work beacuse we can't access static fn with class instance
user1.logMe()

class Player extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Player1 = new Player("Deku", "deku@gmail.com")
// console.log(Player1.createId()); // also give error