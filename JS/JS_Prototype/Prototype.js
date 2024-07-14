// solev this problem

// solve this probem using truelenght

// this is only one string what is there is another string like,
//  let myemail = "abc@email.com" 
// why we used  truelenght? beacuse,
// to count  all multiple  string lenght


let myname = "codewaghre    "


// console.log(myname.length); // output 14

// console.log(myname.trueLenght) //  undefined

// console.log(myname.trim().length); // output  10



// lets try another exmaple with same approch that we need

// Array :- heros
let heros = ["thor", "spide_man", "Iron_man"]

// object :- heroPower
let heroPower = {
    thor: "hammer",
    spider_man: "Sling",
    Iron_man: "tech",


    getSpiderPower: function() {
        console.log(`Power of spider man is ${this.spider}`);
    }

}

// first case object is present in heros? or heroPower
//  give prototype to main object
Object.prototype.codewaghre = function() {
    console.log("codewaghre present is all object");
}

// second case, check hero[] and heropower{} is having object 
// gives prototype to the array
Array.prototype.herocode = function() {
    console.log("coode run run run");
}

// first case, where all hero, heroPower is object
// because we directly set the Prototpye to the main Object
// it will set Array :- hero and Object :- heropower to object
// Exmaple given below

// Object.codewaghre()
// heros.codewaghre()
// heroPower.codewaghre()
// Array.codewaghre()

// second case, where Array:- Heros  will conver into object
// but Object :- heroPower will no convert inot Object
// beacuse it not shareable
//Exmale given Below

// Array.herocode
// heros.herocode()
// Object.herocode() error
// heroPower.heroPower() error



// Inheritance

// Link muliple object using "__proto__"
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
        makeAssignment: 'JS assignment',
        fullTime: true,
        __proto__: TeachingSupport // form Inside
    }
    // form Outside 
    // Teacher.__proto__ = user


//  Using new and moder syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)



// solve above problem

let mynameis = "CodeWaghre      "


String.prototype.trueLenght = function() {
    console.log(`lenght of string is ${this.trim().length}`);
}

mynameis.trueLenght()
"codewaghre@email.com".trueLenght()