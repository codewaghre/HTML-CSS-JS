// Primitive Datatype

// type 7 :- Number, String,boolean,null,undefined ,bigInt,symbol

// Learn Symbol datatype

const id = Symbol("1234")
const anotherID = Symbol("1234")

// console.log(id == anotherID);

//Non-Primitive (aslo Referance )

// Array ,Object< function

// Declare Array
const hero = ["iornman", "hulk", "Spider-man"];
// console.log(hero);

// Declare Object

let myJob = {
    name: "Abhishek",
    age: 19

}

// console.log(myJob);



// Declare Funcation

const myFuncation = function() {
    // console.log("hello Codewaghre");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack for primitive datatype and Heap for non Primitive datatype

// exmple of  Stack

let name = "Codewaghre"

let callname = name
callname = "Abhishek"

// console.log(callname);
// console.log(name);


// eample of heap

let myinfo = {
    name: "Abhishek Waghre",
    Rollno: 99

}
console.log(myinfo);

let anotherinfo = myinfo
    // change values in anotherinfo
anotherinfo = {
    name: "Abhishek waghre",
    rollno: 99,
    accountEmail: "codewaghre99@gmail.com"
}

console.log(anotherinfo);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Summary
/*   
In datatype-summary there are two type of datatype primitive and non primitve (Referacne)

Stack is used for primitve datatype where memory allocation give the copy to the varibale 

heap is used for non primitve datatype where memroy allocation share the orignal copy with both or multiple same call
     
 
 */