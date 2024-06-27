// Number

const score = 100
    // console.log(score);

const balance = new Number(200)
    // console.log(balance);

// console.log(balance.toString().length); // conver into string

// console.log(score.toFixed(2)); // adding two decicmal number like 100.00

const otherNum = 88.9090

// console.log(otherNum.toPrecision(2)); // retrun round value asper precsion number

const Newbalanced = 10000000
    // console.log(Newbalanced.toLocaleString('en-IN')); // Convert any number into thereproper form like 1000 =1,000


//+++++++++++++++++== Maths ++++++++++++++++++++++++=++++

// console.log(Math.floor(10.5)); // output is 10, it used previous value and not prefer decimal value
// console.log(Math.ceil(10.5)); //output is 11, it is used to prefer decimal value to count

// console.log(Math.abs(-4)); // covertnegetive to postive but not convert psotive to negetive


// console.log(Math.max(10, 50, 80)); //Maximum value
// console.log(Math.min(50, 60, 2)); // Minimum Value

///////// Math.random ////////////////////

// console.log(Math.random()); // it gives therandom value


// we want to print any 1 to 6 random value using Math.random
console.log(Math.floor(Math.random() * 6) + 1);

// Using Min and Max print the random value between 20-50

const min = 20
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1) + min));