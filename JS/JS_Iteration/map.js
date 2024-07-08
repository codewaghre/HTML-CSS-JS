// Map

// Map is object, hold the key value and key value cant be duplicate 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// get key and key value from above mapusing forof

for (const [key] of map) { // for key 
    // console.log(key);
}


// get key and value form above Map using forof and we are using destruting of array
for (const [key, value] of map) {
    // console.log(`This is key:- ${key} and its value is ${value}`);
}


// forof and map using Object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     //     console.log(`This is key:- ${key} and its value is ${value}`); // no output
// }




// summary

/* In Map and forof 
we can get value from array using forof but not key ,

we cant get value and key form object using Forof..............
.......
For of we cant fetch the key form array, thats why we used 
forin loop to get key as well as value from array and Object......
.............

MAP  :- we can get/ fetch key and value form map using ForOf Loop 
*/


// MAP Chainning

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newnum = myNumers.map((num) => num + 1)
// console.log(newnum)

// add Map multiple chain

// In chaining method we can used Multiple MAP and filter aslo

const mynum = myNumers
    .map((num) => { return num * 10 })
    .map((num) => { return num + 1 })
    .filter((num) => { return num >= 50 })

console.log(mynum);