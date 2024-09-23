// Object-Literals -> they are nothing but simple objects itself.

const user = {
    username: "Blank",
    age: 19,
    isLoggedIn: true,

    getUserInfo: function () {
        // console.log(`Welcome back ${username.name}`); // give error
        console.log(`Welcome back ${this.username}`); // this -> refers to current context
        console.log(this) ; // prints the user object -> meaning this points to an object
    }
}

console.log(user.isLoggedIn);
console.log(user.getUserInfo());
console.log(this); // output : {} in node environment -> in browser it points to window object