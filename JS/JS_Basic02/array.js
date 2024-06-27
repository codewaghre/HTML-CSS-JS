// Declaration of Array 

const myarry = [1, 2, 3, 4, 5]
    // console.log(myarry);
    // console.log(myarry.includes(5));
    // console.log(myarry.indexOf(4));

// Declarationof array using object

const hero = new Array(1, 2, 3, 4, 5)
    // console.log(hero);
    // console.log(hero[1]); // to find out the value using index number


//Basic of array method
myarry.push(6) // Add the elelemtn at end of the array  
    //console.log(myarry);

myarry.pop() // delete the last element
    // console.log(myarry);

myarry.unshift(5) // Is add the element  at xero index of the arrya 
myarry.shift() // Delete the element at xero index of arrya
    // console.log(myarry);

const newarry = myarry.join('') // to join array element and it convet into string
    // console.log(myarry);
    // console.log(newarry);

//Slice and splice

//Slice    
const newarray = new Array(50, 60, 70, 80, 100)
console.log(`Main array is A :- ${newarray}`);
const newarrayslice = newarray.slice(0, 4)
console.log(`slice methos in array :- ${newarrayslice}`);

console.log(`final array after slice ${newarray}`);




//Splice 
//using(newarray varibale that used in slice)

console.log(` Main array is B :-  ${newarray}`);
const newarraysplice = newarray.splice(0, 4)
console.log(` splice method in array :-  ${newarraysplice}`);
console.log(`Final Splice arrya ${newarray}`);

console.log(typeof newarraysplice);