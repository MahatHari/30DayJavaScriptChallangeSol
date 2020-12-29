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
console.log(webTechs.length);
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];
console.log(itCompanies);
console.log(itCompanies.length);
itCompanies.forEach((element) => console.log(element));

itCompanies.forEach((element) => console.log(element.toUpperCase()));
console.log(itCompanies.join(', '));

let include = itCompanies.includes('Oracle');
console.log(include ? 'company exists' : 'company does not exist');

itCompanies.forEach((company) => {
  if (company.indexOf('o') !== company.lastIndexOf('o')) {
    console.log(`${company} contains more than 1 o`);
  }
});

/* Sort */
console.log(itCompanies.sort());
/* Reverse sort */
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

/* Level 2 */
/**
 * First remove all the punctuations and change the string to array and count the number of words in the array
 */

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let pText = text.replace(/[^\w\s]|_/g, '');
let textArray = pText.split(' ');
console.log(textArray);

/**
 * In the following shopping cart add, remove, edit items
 */
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

/* Add */
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');

/* Remove Honey */
let i = shoppingCart.indexOf('Honey');
if (i) shoppingCart.splice(i, 1);

console.log(shoppingCart);

/* Modify Tea to Green Tea */
let ind = shoppingCart.indexOf('Tea');
if (ind) shoppingCart.splice(ind, 1, 'Green Tea');

/* Search Ethopia, if exists print else add  */
let ethInd = countries.indexOf('Ethopia');
console.log(ethInd);
if (ethInd !== -1) {
  console.log(countries[ethInd].toUpperCase());
} else {
  countries.push('Ethopia');
}
console.log(countries);

/* Search Sass, if exists print else add  */
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
}
console.log(webTechs);

/* Concatenate the following two variables and store it in a fullStack variable. */
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/* Exercise Level 3 */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 27];

const sortedAge = ages.sort();
const minAge = sortedAge[0];
const maxAge = sortedAge[sortedAge.length - 1];

console.log(sortedAge, minAge, maxAge);

const mid =
  sortedAge.length % 2 !== 0
    ? (sortedAge[Math.ceil(sortedAge.length / 2)] +
        sortedAge[Math.ceil(sortedAge.length / 2) - 1]) /
      2
    : sortedAge[sortedAge.length / 2];
console.log(mid);

/* Average  */
let sum = 0;
sortedAge.forEach((element) => {
  sum = sum + element;
});
const Avg = sum / sortedAge.length;
console.log(Avg);

/* Range of Ages */
let range = sortedAge[sortedAge.length - 1] - sortedAge[0];
console.log(range);

/* Compare the value of min-average, max-average */
let compareLow = Math.abs(sortedAge[0] - Avg);
let compareHigh = Math.abs(sortedAge[sortedAge.length - 1] - Avg);
console.log(
  compareHigh > compareLow
    ? 'average is closer to max'
    : 'average is lower to min'
);

let countriesNum = countries.length;
console.log(countries);
if (countriesNum % 2 === 0) {
  console.log(`Middle country is ${countries[countriesNum / 2 - 1]}`);
} else {
  console.log(
    `Middle Countries are ${countries[Math.floor(countries.length / 2 - 1)]} ${
      countries[Math.ceil(countries.length / 2 - 1)]
    }`
  );
}

console.log(countries.slice(0, countriesNum / 2));
