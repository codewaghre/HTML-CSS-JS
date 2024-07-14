// learn about this key word and construtor

const user = {
        username: "hitesh",
        loginCount: 8,
        signedIn: true,

        getUserDetails: function() {
            console.log("Got user details from database");
            console.log(`Username: ${this.username}`);
            console.log(this);
        }

    }
    // console.log(user.getUserDetails());
    // console.log(this);
    // console.log(user.username);

/* This keyowrd help to get the value form current context  */
//  we learn,  this keyword and new keyword importance  

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);

    }

    // return this // this is optional 
}

const userOne = new User("hitesh", 12, true)
console.log(userOne);
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userTwo);

console.log(userOne.constructor); // give own representation