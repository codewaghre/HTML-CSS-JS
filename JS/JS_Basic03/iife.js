// Immediately  Invoke function Exprssions( IIFE)
// used
/**
   funcation who get immediately involke and aslo prevent from global scope polution 

   () - wrap function in parathieses  and fuction will act like block
 */

// for example withou IFFE

// below function is syntax incorrect

// function chai() {
//     console.log(`DB connected`);
// }()

//exmpale of IIFE

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // NOTE :- without using (;) IIFE will act like no break of line and next IIFI function will give error


// // IIFE function with arrow Function 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');


// Summry

/* NOTE
"(;) without breaking line we cant declare next IIFI function"

(function inclding parameters )( argument);
*/