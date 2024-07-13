// promise  type one 
const promiseOne = new Promise(function(resolve, reject) {
    // task that we perform
    //DB call, network ,cryptography

    setTimeout(function() {
        // console.log("Async task is comepelete");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    // console.log("promise consumed");
})


//Promise type two
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log("Asyns Task two ");
        resolve()
    })
}).then(function() {
    // console.log("promise two Consumed");
})


//Promise type three
// we learn how to get value form resolve 

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "CodeWagghre", email: "codewaghre99@gmail.com" })
    }, 1000)
})

promiseThree.then(function(userData) {
    // console.log(userData);

})


// Promise  tpye  Four 
// we leran   this keyword channing and .catch() method for reject
// we learn  how to get data from resolve and reject
// we learn how to get targeted data from resolve 

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true // let error = false  for fetch value form resolve, username 
        if (!error) {

            resolve({ username: "CodeWagghre", email: "codewaghre99@gmail.com" })
        } else {
            reject("Error : Something went Wrong")
        }
    }, 1000)
})


promiseFour
// target the username from resolve
    .then(function(userdata) {
        // console.log(userdata);
        return userdata.username
    })
    // to print the username from resolve
    .then(function(username) {
        // console.log(username);
    })
    // get data form reject
    .catch(function(error) {
        // console.log(error);
    })
    // finally is excute all time with error and no-error
    .finally(function() {
        // console.log("The Promise is either Resolved or Rejected ");
    })


// Promise type Five

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true // let error = false  for fetch value form resolve, username 
        if (!error) {
            resolve({ username: "JavaScript", email: "codewaghre99@gmail.com" })
        } else {
            reject("Error : Something went Wrong")
        }
    }, 1000)
})

// this method is only give response  when value is present, if  response is having error then it will give some problem
async function consumeFive() {
    const response = await promiseFive
        // console.log(response);
}
// consumeFive()


// solve the above problem

async function consumeFiveResponse() {
    try {
        const response = await promiseFive
            // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}
consumeFiveResponse()


// some another example  using try and catch method 

async function getAllUser() {
    try {
        const respone = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await respone.json()
            // console.log(data);
    } catch (error) {
        // console.log("E :", Error);
    }
}
getAllUser()


// same above example using then and catch

fetch('https://jsonplaceholder.typicode.com/users').then(function(respone) {
        return respone.json()
    }).then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log("Something went wrong");
    })