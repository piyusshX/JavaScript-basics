const User = {
    _email: 'blank@blnk.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const blank = Object.create(User)
console.log(blank.email);