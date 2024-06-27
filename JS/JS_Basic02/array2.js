// array

const hero = ["Spider-man", "Iron-man", "Captain-America", "Thor"]
const INDhero = ["Shaktiman", "bheem", "Raju"]


// push method to combine array
//[ In push method combine only two array but 2 nd array act as index of first array, and it doest not requried Special Variable]

// hero.push(INDhero)
// console.log(hero);


// concat method to combine array

// In concat it combine two  array at once thats why i need special veriable
// const concatarray = hero.concat(INDhero)
// console.log(concatarray);


// Combine two or more array USING Spread Method

const spredarray = [...hero, ...INDhero]
    // console.log(spredarray);


// flat method to sort array thread

// flat method where array get slove using depth of array,,,, means depth is 2 then it will slove only two array threads

const flatarray = [1, 2, 3, [11, 12, 14], 21, 22, [31, 32, [35, 36, [41, 42], 37], 39], 4]
    // console.log(flatarray.flat(Infinity));


// string to arrya
console.log(Array.isArray("Codewaghre")); // isarray is used to check whether given is array or not 

console.log(Array.from("codeWaghre")); //  from method is used convert the  string to an array

// Combine variables into array

let score1 = 1000
let score2 = 2000
let score3 = 4000

console.log(Array.of(score1, score2, score3)); //  of method is used to combine Variable into array