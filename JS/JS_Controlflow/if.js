// if Statment

const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
} else {
    // console.log("temperature is greater than 50");
}

// console.log("Execute");


// <, > , <= , >= , == , != , === , !==  compare Operator 


const score = 100

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // error out of scope



// Logical Operator ( &&, || , !=)

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 != 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}