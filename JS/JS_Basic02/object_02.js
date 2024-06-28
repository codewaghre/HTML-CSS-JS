// Object singletone

// const tinderUser = new Object()

// console.log(tinderUser);

const tinderUser = {}

tinderUser.id = 123
tinderUser.name = "Abhishek"
tinderUser.username = "Codewaghre"

// console.log(tinderUser);


const tinderUser2 = {
    email: "awaghre99@gmail.com",
    fullname: {
        UserFullname: {
            Firstname: "waghre",
            Lastname: "Abhishek"
        }

    }
}

// console.log(tinderUser2.fullname.UserFullname); // to access Multiple nested Object


// how to add two or multiple Object

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }


const obj3 = {
        obj1,
        obj2
    }
    // console.log(obj3); // this method wil combine object in nested Object


const obj4 = Object.assign({}, obj1, obj2) // this wil also have hidden nested object
    // console.log(obj4);


const obj5 = {...obj1, ...obj2 } // this is Spred method
    // console.log(obj5);



// find out the  value and key from object (tinderuser2) 

// console.log(Object.values(tinderUser)); // value form tinderuser

// console.log(Object.keys(tinderUser)); //key from tinder user


// Destructuring IN Object

const course = {
    courseName: "HTML - CSS",
    priceofCourse: 999,
    courseInstructor: "Codewaghre"
}

// For Distructuing
const { priceofCourse: price } = course
console.log(price);