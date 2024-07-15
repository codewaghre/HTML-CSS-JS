class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}


const code = new User("codewghre ", "codewaghre@gmail.com", "123")

console.log(code.encryptPassword());
console.log(code.changeUsername());


// behind theof above cdoe


function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
user.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());