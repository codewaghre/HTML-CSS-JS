// Truthy value and False value

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// truthy value in array uisng above useremail
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



// truthy value In Object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
};



//// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10   // output is 5
// val1 = null ?? 10  // output is 10
// val1 = undefined ?? 15  output is 15
// val1 = null ? ? 10 ? ? 20 // output is 10
// console.log(val1);


// const foo = null ? ? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 ? ? 42;
// console.log(baz);
// // Expected output: 0



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")