// How toDeclare funcations

// we write code inot multile line where function warpe the code into funcation and we call that code anywhere in file 

function decfuncation() {
    // console.log("a");
    // console.log("b");
}
decfuncation()


// sub two number

function subnumber(num1, num2) {
    // console.log(num1 - num2);

}
subnumber(3, 2)

// Add two number using retrun

function addnumber(Number1, Number2) {
    let result = Number1 + Number2
        // console.log("codewaghre");
    return result // we can declare anything before return..... after result we cant decalre or print
}
const result = addnumber(3, 4) // Arguments
    // console.log(result);


// Direct return ( multiply tow numbers )

function multipleNumber(number1, number2) {
    return number1 * number2
}
// Method 1st to print value
// const result = multipleNumber(5, 6)
// console.log("Result :- ", result);


// Method 2nd to print  value
// console.log(multipleNumber(5, 6));



//checked whether value, string present is not

function loginUserMassage(username) {
    if (username === undefined) { //  username === undefined <<<< !username
        // console.log("please enter the number");
        return

    }

    return ` ${username} is logged in`

}
// console.log(loginUserMassage()); // to print the empty value output
// console.log(loginUserMassage("codewaghre"));  // to print the given output


// Add multiple Arguments in funcation (using rest operator )

function calulateCartPrice(...num1) { // rest operator (...) is also know as Spread operator but name as per usedcase
    return num1
}

// console.log(calulateCartPrice(200, 300, 400)); // output give in array


// add multiple argument is fucnation usign Object


const user = {
    name: "Codewaghre",
    age: 18
}

function handleObject(anyobject) {
    // console.log(`My User name is ${anyobject.name} and my age is ${anyobject.age}`);

}

// handleObject(user) //object calling

handleObject({ // without creating Seprate Object
    name: "Abhishek Waghre ",
    age: 21
})


// Add mutiple argumenet using array
const userid = [1, 2, 3, 4]

function addarray(countarray) {
    console.log(countarray[2]); // for find out the values that present in array using indexvalue
    console.log(countarray); // for print whole array
}
addarray(userid)