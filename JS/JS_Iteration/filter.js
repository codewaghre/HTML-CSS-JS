// filter in JavaScript


const coding = ["js", "ruby", "java", "python", "cpp"]


// Print value using forEach

coding.forEach((item) => {
    // console.log(item);
})


// new array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// print value using filter  ( Greater than 4)
const num = myNums.filter((val) => {
        return val > 4
    })
    // console.log(num);

// print value using foreach

const num01 = myNums.forEach((num) => {
    if (num > 5) {
        // console.log(num);
    }
})

// console.log(num01);




//////// Another example for Filteer

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// using above nexted array object find out the gener:- history book present in that using filter
const userBook = books.filter((bk) => {
    return bk.genre === "History"
})

console.log(userBook);


// Using above nested ArrayObject  find out the books edition is after 1995 and gener is history using filer

const mybook = books.filter((bk) => (bk.edition > 1995 && bk.genre === "History"))

console.log(mybook);