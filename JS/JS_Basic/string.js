// String backticsk

const myname = "Codewaghre"
const email = "codewaghre@gmail.com"

// console.log(myname + email + "this is my email "); // this is old Syntaxto print multiple variable at same time

// console.log(`Hello my name is ${myname} and ${email} this is my email `); //use this new syntax


const gameName = new String("codew-aghre")
    // console.log(gameName[0]);

// console.log(gameName.length);   // Length of string
// console.log(gameName.toUpperCase());  // Uppercase

// console.log(gameName.charAt(8));    // to find which char at perticuler index
// console.log(gameName.indexOf('c'));  //  to find char at which index


// console.log(gameName.substring(0, 7)); // it is also used to cut the string
// console.log(gameName.slice(-15, 5)); // used to cut the string and it has negtive indexletc

const str1 = "  Codewaghre   "
const newstring = str1.trim(); // trim the unwanted space between string
// console.log(newstring);


const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=8947s"
const newurl = url.replace('?v', '_') // used to Replace anything form string
    // console.log(newurl);

//console.log(url.includes('tube')); //use to find out the presetn word or char at string