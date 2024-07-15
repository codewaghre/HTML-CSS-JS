// call

function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}



function createUser(username, email, password) {
    SetUsername.call(this, username) // call value from another  function
    this.email = email
    this.password = password
}

const me = new createUser("codewaghre", "codewaghre@gmail.com", "123")

console.log(me);