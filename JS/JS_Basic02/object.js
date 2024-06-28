// Declration of Object  Singletone and Object Literals


//Singletone
Object.create // Declaration of singletone object

// Object Literals

const SymbolUser = Symbol("Key1")

const JsUser = {
        user: "Codewaghre",
        SymbolUser: "Abhishek Ashok Waghre",
        name: "Abhishek Waghre",
        age: 18,
        "Location": "Mumbai",
        email: "Codewaghre@gmail.com",
        isLoggedIn: false,
        lastLoginDay: ["Monday", "Sunday "]


    }
    // Multiple type of calling methods
    // console.log(JsUser.email); /// Used for Access object

// console.log(JsUser["name"]); //behind the screen name object act as String

// console.log(JsUser["SymbolUser"]); // if we used  .SymbolUser then it not showing symbol datatype otherwise it shows string 

// console.log(JsUser.Location);


// Changes in object method and Freeing method

JsUser.email = "awaghrw99@mgail.com" // Change the value of object
    // console.log(JsUser["email"]);

// Object.freeze(JsUser) // Freee after Freexing the object we cant change anything

JsUser.name = "A waghre"
    // console.log(JsUser["name"]);


// Funcationcallin
JsUser.greeting = function() {
    console.log("hello ");
}

JsUser.greetingtwo = function() {
    console.log(`hello ${this.name} this is my name`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());