// Getter and Setter are used to get and set an attribute value in class. If we are declaring either setter
// or getter alone then it'll give an error which means that we must have to declare both at the same time.

// Setter Syntax -> Set attName(val){ this.attName = val }
// Getter Syntax -> Get attName(){ return this.attName }

class User {
    constructor(email, password){ //  Maximum call stack size exceeded
        this.email = email;
        this.password = password
    }

    
    set email(value){
        this._email = value // we're using "_email" instead of "email" beacuse email ka use karne constructor aur setter
        // ke bech ek race type ki condition paida hojati hai or constructor bar-bar call hota hai aur ek infinite loop 
        // form hojata hai, iss liye hum yaha "_email" ka use kate hai inn situations ko avoid karne ke liye.
    }
    get email(){
        return this._email.toUpperCase()
    }

    set password(value){
        this._password = value
    }
    get password(){
        return `${this._password}aasti`
    }
}

const hitesh = new User("blank@blnk.com", "abc")
console.log(hitesh.password); // we can access variable by using argument name ehich is defined in constructor