// Scope


// Global Scope  and {} this is called block of scope and it act like chid and parent 
var a = 30

if (true) {
    let a = 10
    const b = 20
        // console.log("INNER: ", a);  //example of block scope

}
// console.log("INNER: ", a) //example of global scope


// Nested scope


function one() {
    const username = "Codewaghre"

    function two() {
        const email = "codewaghre@gmail.com"
            // console.log(username);

    }
    // console.log(email); // Error  where email is not defined because it is out of block scope
    two()

}

one()



// same example using if


if (true) {
    const username = "codewaghre"
    if (username === "codewaghre") {
        const website = " youtube"
        console.log(username + website); // succesfull, in the scope
    }
    // console.log(website); // Error out of scope 
    console.log(username); // succesfull, in th e scope
}
// console.log(username); // erro, out of scope



//**************Intresting ******************** */


// this is nomrmal fucntion declaration 
console.log(addone(5)) /// In normal function we can declare the argument at start or send of function 

function addone(num) {
    return num + 1
}


// This is expression function 
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));
// In Expression Funcation we cant decalre Argument at start of the function, it Required proper format of function


// summary
/* In scope
    where child can access the value of parent but parent can not access the value of children

     if value and call method is out of the scope we cant get output 

    
*/