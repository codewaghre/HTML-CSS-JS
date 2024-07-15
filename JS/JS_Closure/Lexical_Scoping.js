// Lexical Scoping


function outer() {
    let username01 = "codewaghre"
    let username02 = "Abhishek Waghre"
        // console.log("OUTER", secret); // secret property of fucntion inner() is not accetable
        // becasue parent cant acces to their children .. error


    function brotherOne() {
        let secret = "my123"
        console.log("Borther one is ", username01);
    }


    function brotherTwo() {
        console.log("Brother two is ", username02); //
        // console.log(secret); // secret propert of fucntion inner () is not accepttable, error
        // because both brothers cannt share their property to each other 
    }
    brotherOne()
    brotherTwo()

}
outer()

// console.log("TOO OUTER", username);  //out of scope