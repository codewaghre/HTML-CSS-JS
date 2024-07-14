// fucntion is also object and fucntion also
// example

function multileby5(num) {
    return num * 5
}

multileby5.power = 2

// console.log(multileby5(5));
// console.log(multileby5.power); // object exmaple
// console.log(multileby5.prototype);  // {} object includes multiple prototype methods



// another exmaple
// What we learn ?
//  this keyword ,new keyword Importance with  prototype 

function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`chai price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

// chai.createUser()
chai.printMe()
tea.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/