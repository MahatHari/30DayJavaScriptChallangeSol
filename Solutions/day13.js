/**
 * 30 Days Of JavaScript: Console Object Methods
 */

/* 
 Exercises Level 1
 */

/**
 * Display the countries array as a table
 * Display the countries object as a table
 * Use console.group() to group logs
 */

let countriesObj = require('./countries_data');
console.table(countriesObj);

let countries = require('./countries');
console.table(countries.slice(0, 20));

/* Exercises:Level 2   */
/**
 * 10 > 2 * 10 use console.assert()
 * Write a warning message using console.warn()
 * Write an error message using console.error()
 */
console.assert(10 > 2 * 10, '10 is not greater');

console.warn('Its warning');
console.error('This is error');

/**
 * Exercise: Level 3
 */
/**
 * Check the speed difference among the following loops: while, for, for of, forEach
 */

console.time('For loop');
for (let i = 0; i < 10; i++) {}
console.timeEnd('For loop');

console.time('while Loop');
let i = 0;
while (i < 10) {
  i++;
}
console.timeEnd('while Loop');

const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];
console.time('for of');
for (user of users) {
  let b = [];
  b.push(user);
}
console.timeEnd('for of');

console.time('For Each');
users.forEach((n) => {
  users.pop(n);
});
console.timeEnd('For Each');
