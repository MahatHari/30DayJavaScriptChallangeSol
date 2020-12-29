/* Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h) */
const readline = require('readline-sync');

// let base = readline.question('Enter base height:  ');
// let height = readline.question('Enter height:  ');
// let area = (1 / 2) * (base * height);

// console.log(`The area of the trianle is ${area}`);

// /* Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) */

// let a = readline.question('Enter side a: ');
// let b = readline.question('Enter side b: ');
// let c = readline.question('Enter side c: ');

// let p = a + b + c;
// console.log(`The permiter of the triangle is ${p}`);

// /* Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */

// let len = readline.question('Enter length of reactangle : ');
// let breadth = readline.question('Enter breadth of reactangle: ');

// let rArea = len * breadth;
// let perimeter = 2 * (len + breadth);

// console.log(
//   `Area of rectangle ${rArea} and Perimeter of reactangle ${perimeter} `
// );
/* Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

// let radius = readline.question('Enter radius of Circle: ');
// const pi = 3.14;
// const CArea = pi * radius * radius;
// const circumference = 2 * pi * radius;
// console.log(
//   `Area of Circle is ${CArea} Circumference of Circle is ${circumference} `
// );

// /* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years */

// let birthYear = readline.question('Enter birth year: ');
// const dt = new Date();
// const now = dt.getFullYear();
// const age = now - birthYear;

// console.log(
//   `You are now ${age} ${
//     age >= 18
//       ? 'You are old enough to drive'
//       : 'You will be allowed to drive after ' + `${18 - age}`
//   }`
// );

/* Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years */
let yearLived = readline.question('Enter number of year you live: ');
const seconds = 60 * 60 * 24 * 365 * yearLived;
console.log(seconds);

/* Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm 
*/
const dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth() + 1;
let day = dt.getDate();

let hour = dt.getHours();
let mins = dt.getMinutes();

console.log(`${year}-${month}-${day}  ${hour}:${mins}`);
console.log(`${day}-${month}-${year}  ${hour}:${mins}`);
console.log(`${day}/${month}/${year}  ${hour}:${mins}`);

/* uman readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;
hour = hour < 10 ? `0${hour}` : hour;
mins = mins < 10 ? `0${mins}` : mins;

console.log(`${day}/${month}/${year}  ${hour}:${mins}`);
