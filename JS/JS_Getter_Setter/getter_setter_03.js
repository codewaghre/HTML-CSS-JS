//  getter setter uisng Object

const User = {
    _email: 'codewaghre@gmail.com',
    _password: "Meabhi@99",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set email(value) {
        this._password = value
    }
}

const user = Object.create(User)
console.log(user.email);
console.log(user.password);