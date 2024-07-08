// for in

// for in used for get value and key form object and array

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// get value and key form above Objecr using ForIn

// key
for (const key in myObject) {
    // console.log(key);

}
// Value
for (const key in myObject) {
    // console.log(myObject[key]);
}

// for both at same time

for (const key in myObject) {
    console.log(`This is key :- ${key}, And its value is :- ${myObject[key]}`);

}

// lets try forin in array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`key is ${key} and valu is ${programming[key]}`);
} // to get value and key form arrya using for in is poosible