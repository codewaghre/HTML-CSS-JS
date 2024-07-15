// Inheritance 

class User {
    constructor(username) {
        this.username = username
    }

    // add new method
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

const username = new User("codewaghee")
username.logMe() // call method


// to get value from class user

class Techer extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    //  add new method 
    addcourse() {
        console.log(`New coruse was addes by ${this.username}`);
    }

}

const newcode = new Techer("Abhishek", "codewaghre@gmail.com", "123")
    // console.log(newcode.addcourse());
    // newcode.addcourse() // call method
newcode.logMe()

// add new  
const addNewName = new User("Abhishek Waghre")
addNewName.logMe()

// addNewName.addcourse()  // erro because addNewName is not link with class (techer and addCourses)


console.log(newcode instanceof User); // true
console.log(Techer instanceof User); // false

console.log(User instanceof Techer); // false

console.log(addNewName instanceof User); // true

console.log(newcode instanceof Techer); // true