// Reduce

const myNums = [1, 2, 3]
const acc = 0

//  expression function
const mytotal = myNums.reduce(function(acc, currval) {
        // console.log(`acc:- ${acc} and  currentvalue:- ${currval}`);
        return acc + currval

    }, )
    // console.log(mytotal);

// arrow function
const acc1 = 20
const myadd = myNums.reduce((acc1, currval) => acc1 + currval, acc1)
    // console.log(myadd);


/// reduce in nested array object

const shoppingCart = [{
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(cartPrice);