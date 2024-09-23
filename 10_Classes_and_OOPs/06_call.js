// Call -> Call is a function that helps you change the context of the invoking function. It helps you
// replace the value of "this" inside a function with whatever value you want.

// In simple words Call method hume kisi aur object ki methods ko use karne ki power deta hai.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username); // yaha function to call hoga per isska execution context destroy hojara hai
    // jise sare variable jo bhi SetUsername() me declare hue hai vo bhi destroy hojayege

    // SetUsername.call(username); // here with the help of call() method hum fun ka refrence hold kar sakte hai
    // per SetUsername() ka execution context different hai createUser() se and to solve that we'll change it context

    SetUsername.call(this, username); // humne createUser ke this ko SetUsername() me pass kar diya hai jisse
    // SetUsername() createUser() ka this user karega and createUser() ka username set hojayega
   
    this.email = email
    this.password = password
}

const blnk = new createUser("Blank", "blank@ngnl.com", "123")
console.log(blnk);