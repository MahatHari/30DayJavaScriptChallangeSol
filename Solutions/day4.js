/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways */
const readline = require('readline-sync');
let a = 4;
let b = 5;
console.log(`${a} is ${a > b ? 'greater' : 'less'} than ${b}`);

/* Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? */
let input = readline.question('Enter a number: ');
let checkEven = input % 2;
console.log(`${input} is an ${checkEven > 0 ? 'odd' : 'even'}`);

/* Write a program which tells the number of days in a month, now consider leap year. */
let days = {
  january: 31,
  feburary: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 30,
  september: 31,
  october: 30,
  november: 30,
  december: 31,
};
let inputMonth = 'feburary';
for (const [month, day] of Object.entries(days)) {
  if (month === inputMonth) {
    console.log(day);
  }
}
