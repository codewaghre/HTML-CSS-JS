// getter and setter using  classes

class User {
    constructor(email, password, userID) {
        this.email = email;
        this.password = password
        this.userID = userID
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    //geter and setter for Password
    get password() {
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }

    // getter and settr for user ID

    get userID() {
        return `${this._userID}01001`
    }

    set userID(value) {
        this._userID = value
    }

}
const para = new User("codewaghre@gmail.com", "Meabhi@99", "codewaghre99")
    // console.log(para.email);

// console.log(para.password);

// console.log(para.userID);