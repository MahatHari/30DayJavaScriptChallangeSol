/* Level 1 */
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

/* Iterate 0 to 10 using for loop, do the same using while and do while loop n*/
for (let i = 0; i < 11; i++) {
  console.log(i);
}
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 11);

/* Iterate 10 to 0 using for loop, do the same using while and do while loop */
for (let i = 10; i >= 0; i--) {
  console.log('for Decerement', i);
}
let j = 10;
do {
  console.log('dO', j);
  j--;
} while (j >= 0);

/* Iterate 0 to n using for loop */
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
/*  Write a loop that makes the following pattern using console.log(): */
let string = '*';
let pattern = '';
for (let i = 0; i <= n; i++) {
  console.log((pattern += string));
}

/* 
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 
*/

console.log(`i    i^2    i^3`);
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i * i}      ${i * i * i}`);
}

/* ONly Even For loop */
for (let i = 0; i < 50; i++) {
  if (i % 2 === 0) console.log(i);
}
/* ONly Odd For loop */
for (let i = 0; i < 50; i++) {
  if (i % 2 !== 0) console.log(i);
}

/* ONly Prime Number */

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return;
  return num;
}
for (let i = 0; i < 50; i++) {
  if (isPrime(i) !== undefined) console.log(i);
}

/* Sum of all numbers o to 10 */

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log('Sum of all numbers between 0 and 100: ', sum);

/* Sum of Odd and Even numbers */
let sumEven = 0;
let sumOdd = 0;
let sumArray = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log(
  `Sum of Even Numbers from 0 10 100 is ${sumEven} and Sum of Odd Numbers from 0 to 100 is ${sumOdd}`
);
sumArray.push(sumEven, sumOdd);
console.log(sumArray);

/* script for 5 random  numbers */
let randomArray = [];
let ri = 0;
while (ri < 5) {
  randomArray.push(Math.floor(Math.random() * 10));
  ri++;
}
console.log(randomArray);

/* Generate array of 5 random nunmbers and the numbers must be unique */
let uniqueRandom = [];
let ui = 0;
while (ui < 5) {
  let rand = Math.floor(Math.random() * 10);
  if (uniqueRandom.includes(rand) === true) {
    rand = Math.floor(Math.random() * 10);
  } else {
    uniqueRandom.push(rand);
    ui++;
  }
}
console.log(uniqueRandom);

/* Generate a siz characters random id */

let randomCharacters = Math.random()
  .toString(36)
  .replace(/[^a-zA-Z0-9]+/g, '')
  .substr(6);

console.log(randomCharacters);

/* Level 2 */
/* Develop a small script which generate any number of characters random id:
 */

let randomLengthCharacters = Math.random()
  .toString(36)
  .replace(/[^a-zA-Z0-9]+/g, '')
  .substr(Math.ceil(Math.random() + 1));

console.log(randomLengthCharacters);

/* Write a script which generates a random rgb color number.
 rgb(240,180,80)
 */

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

console.log(`rgb(${r}, ${g}, ${b})`);
/* Using the above countries array, create new array with all caps
 */
let capsCountries = [];
for (let i = 0; i < countries.length; i++) {
  capsCountries.push(countries[i].toUpperCase());
}
console.log(capsCountries);
/* Using the above countries array, create an array for countries length'.

 */
let charCount = [];
for (let i = 0; i < countries.length; i++) {
  charCount.push(countries[i].length);
}
console.log(charCount);

/* Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

let arrayOfArrays = [];
for (let i = 0; i < countries.length; i++) {
  let arr = [];
  arr.push(
    countries[i],
    countries[i].substr(0, 3).toUpperCase(),
    countries[i].length
  );
  arrayOfArrays.push(arr);
}
console.log(arrayOfArrays);

/* In above countries array, check if there is a country or countries containing the word 'land'. 
If there are countries containing 'land', print it as array. 
If there is no country containing the word 'land', print 'All these countries are without land'.
*/
let landCountry = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) landCountry.push(countries[i]);
}
console.log(landCountry);

/* In above countries array, check if there is a country or countries end with a substring 'ia'. 
If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia' 
*/
let iaEndingCountry = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith('ia')) iaEndingCountry.push(countries[i]);
}
console.log(iaEndingCountry);

/* Using the above countries array, find the country containing the biggest number of characters.
 */

let longNameCountry = '';
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longNameCountry.length)
    longNameCountry = countries[i];
}
console.log(longNameCountry);

/* Using the above countries array, find the country containing only 5 characters.
 */
let char5Country = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) char5Country.push(countries[i]);
}
console.log(char5Country);
