// static

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const hitesh = new User("hitesh")
    // console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());


// static keywprd hold the method
//and does not share with, other method , any class extend and 
// any class exnteds method also