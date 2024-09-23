// Inheritance Using class -> To use Inheritance in classes we have a keyword named "extends" which is
// used by a class at the time of its creation to inherite another class's properties.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is just logged in`);
    }
}

class Player extends User{
    constructor(username, email, password){
        super(username); // In classes "super" keyword do all the work of call() behind the scene
        this.email = email
        this.password = password
    }

    startNewGame(){
        console.log(`${this.username} is starting a new match`);
    }
}

const Player1 = new Player("blank", "blank@yahoo.com", "123")

Player1.logMe(); // Player1 can use User's Function bcz of Inheritance
Player1.startNewGame()

const Player2 = new User("Deku")

Player2.logMe();
// Player2.startNewGame(); // gives error 

console.log(Player1 instanceof User); // instanceof tell if a class is an instance of another class