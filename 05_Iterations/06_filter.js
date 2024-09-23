const hero = ["Deku", "Kazuma", "Shoto", "Bakago", "Saitama"]

const heroNames = hero.forEach( (item) => {
    return item
} )

// console.log(heroNames); // undefined -> beacuse forEach loop doesnot return any value

// Since forEach loop does not return a value we can use filter it returns a shallow copy of the element

// <----------------------------------------- filter ------------------------------------------------------->

// It has same syntax as forEach

// Syntax 1 -> arr = arrName.filter( function (element, index, array) { function defination } ) // Normal function
// Syntax 2 -> arr = arrName.filter( (element, index, array) => { function defination } ) // Arrow function
// Syntax 3 -> arr = arrName.filter( funName ) // Already defined function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )


// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]



// we can also do this thing with the help of forEach loop but we have to apply some logic into it

const newArr = []

myNums.forEach( (num) => {
    if (num > 4) {
        newArr.push(num)
    }
} )

// console.log(newArr); // [ 5, 6, 7, 8, 9, 10 ]



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

let myBooks = books.filter( (bk) => bk.genre ==='Fiction' )

console.log(myBooks);

myBooks = books.filter( (bk) => {
    return (bk.publish > 1990 && bk.genre === 'Science')
} )

console.log(myBooks);
