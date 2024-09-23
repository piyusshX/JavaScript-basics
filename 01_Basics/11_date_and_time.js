// Dates -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// In JavaScript Date is calulated from midnight of January 1, 1970, UTC in milisecounds

let myDate = new Date() // Its an object -> 2024-05-28T10:32:06.926Z
// console.log(myDate); // returns a string which contains current date ans time but its not very readable
// console.log(typeof myDate)l // object


// to make it readable we use inbuilt functions

// console.log(myDate.toString()); // Tue May 28 2024 15:38:05 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Tue May 28 2024
// console.log(myDate.toLocaleString()); // 5/28/2024, 3:41:56 PM -> mm/dd/yyyy, time
// console.log(myDate.toLocaleDateString()); // 5/28/2024 -> only date
// console.log(myDate.toLocaleTimeString()); // 3:43:12 PM -> only time



// Declare specific date -> we have multiple syntax for it

// Syntax 1 :- new Date(YYYY, MM, DD); -> MM starts with 0 means -> 0 = jan in this syntax
let specificDate = new Date(2024, 0, 27);
// console.log(specificDate.toDateString()); // Sat Jan 27 2024

// Syntax 2 :- new Date(YYYY, MM, DD, Hours, Mins, Secs); 
let specificDate2 = new Date(2024, 0, 27, 5, 34, 37); 
// console.log(specificDate2.toLocaleString()); // 1/27/2024, 5:34:37 AM

// Syntax 3 :- new Date("MM-DD-YYYY"); / new Date("YYYY-MM-DD"); 
// In this syntax MM strats with 01
let specificDate3 = new Date("12-27-2004"); 
// console.log(specificDate3.toLocaleDateString()); // 12/27/2004


// Some additional function
let newDate = new Date();

// console.log(newDate.getDate()); // 28
// console.log(newDate.getDay()); // 2 -> tuesday
// console.log(newDate.getMonth() + 1); // starts with 0 -> + 1
// console.log(newDate.getFullYear()); // 2024
// console.log(newDate.getHours()); // 16 -> 4pm
// console.log(newDate.getMinutes()); // 25 -> 04:25 pm



// We can also customize toLocalString() format

console.log(newDate.toLocaleString('default', { // Tuesday, May 28
    weekday: "long",
    day: "2-digit",
    month: "long",
}))

// <--------------------------------------------- Time-Stamp ----------------------------------------------------->

let myTimeStamp = Date.now() // stores the milisecounds from January 1, 1970, UTC

// console.log(myTimeStamp); // 1716893091888 -> In milisec
// console.log(specificDate3.getTime()); // getTime() -> gives time in milisec from January 1, 1970, UTC
// Now we can compare two dates or time by applying simple Math

// We can also convert it into secs by dividing milisec by 1000
// console.log(Math.floor(Date.now()/1000));
