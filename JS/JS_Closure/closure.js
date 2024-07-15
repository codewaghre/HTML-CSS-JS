// closure

function makeFunc() {
    const name = "codeWaghre";

    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// anotther example

function outer() {
    let username01 = "codewaghre"
        // let username02 = "Abhishek Waghre"
        // console.log("OUTER", secret); // secret property of fucntion inner() is not accetable
        // becasue parent cant acces to their children .. error


    function brotherOne() {
        // let secret = "my123"
        console.log("Borther one is ", username01);
    }
    return brotherOne;

}

const me = outer()
me()

// outer()