// Arrow Function and   {(this ) keyword - help toacces the current context}

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`); // fetch  cureent specific  current context  
        // console.log(this); // also fetch all current context value
    }

}

user.welcomeMessage()
user.username = "codewaghre"
user.welcomeMessage()

// console.log(this.name); // here (this) give the empty array becausethere is no global context


/*********** Arrow Function****************** */


// Why arrow function//

/*we cant decalre "this" key word in "normal
function and Expression Function" that why we we used "arrow
function", "example is given below "*/


// Nomral Function example
function chai() {
    let username = "hitesh"
        // console.log(this.username);
}

// chai()  

//Expresssion Funcation

const one = function() {
        let username = "hitesh"
            // console.log(this.username);
    }
    // one()


//Solving this key word using arrow function ( with same code)

const two = () => {
    let username = "hitesh"
    console.log(this.username); // also give the undefined value 
}
two() //empty array

//In function , arrow function we cantdeclare this function



/** ======== Arrow Function */

// 1st method
// const addtwo = (num1, num2) => {
//     return num1 + num2   // explicitly retrun

// }

//2nd method

// const addtwo = (num1, num2) => num1 + num2

// 3rd method 
const addtwo = (num1, num2) => (num1 + num2) // () :-  no use of return also called as implicite retrun

console.log(addtwo(3, 5));