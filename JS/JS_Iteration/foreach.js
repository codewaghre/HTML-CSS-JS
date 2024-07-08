const coding = ["js", "ruby", "java", "python", "cpp"]

// Using Normal Function
coding.forEach(function(val) {
    // console.log(val);
});


// Using arrow Function
coding.forEach((item) => {
    // console.log(item);

});

// 3rd step
function printme(item) {
    console.log(item);
}
// coding.forEach(printme)

// extra feature 
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})





// for fetch value and key form nested array and Object using Forech



const myCoding = [{
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(item => {
    // console.log(item.languageFileName);
});