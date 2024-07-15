// getter setter by using properties

function User(email, password) {
    this._email = email;
    this._password = password

    //acces Object using defineproperty
    // defineProperty is the getter setter property
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })


    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        },

        set: function(value) {
            this._password = value
        }

    })


}
const user = new User("chai@chai.com", "chai")

console.log(user.email);
console.log(user.password);