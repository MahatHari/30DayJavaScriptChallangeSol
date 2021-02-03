/* const languages = [
  'english',
  'finnish',
  'english',
  'french',
  'spanish',
  'englsih',
  'french',
];
const langset = new Set(languages);
console.log(langset);
console.log(langset.size);

const countsObj = [];

for (const l of langset) {
  const filteredLang = languages.filter((lang) => lang === l);
  console.log(filteredLang);
  countsObj.push({ lang: l, count: filteredLang.length });
}
console.log(countsObj);

const numbers = [5, 3, 2, 5, 5, 9, 4, 5];

const setNumber = new Set(numbers);
console.log(setNumber);

const countNum = [];
const counters = {};

for (const n of setNumber) {
  const filtNum = numbers.filter((ns) => ns === n);
  countNum.push({ n, count: filtNum.length });
}
console.log(countNum);

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let B = new Set(b);
let c = a.filter((num) => !B.has(num));
console.log(c);

const map = new Map();
console.log(map);

let countries = [
  ['Finalnd', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];

const map2 = new Map(countries);
console.log(map2);
console.log(map2.size);
console.log(map2.get('Finalnd'));

for (const country of countries) {
  console.log(country);
}

for (const [country, city] of countries) {
  console.log(country, city);
}
 */
/*
 ********** Exercises : Level 1 **************
 */

/**
 * create an empty set
 * Create a set containing 0 to 10 using loop
 * Remove an element from a set
 * Clear a set
 * Create a set of 5 string elements from array
 * Create a map of countries and number of characters of a country
 */

const newEmptySet = new Set();
console.log(newEmptySet);

for (let i = 0; i <= 10; i++) {
  newEmptySet.add(i);
}
console.log(newEmptySet);

newEmptySet.delete(8);
console.log(newEmptySet);

newEmptySet.clear();
console.log(newEmptySet);

newEmptySet.add('ass');
newEmptySet.add('pass');
newEmptySet.add('las');
newEmptySet.add('cas');
console.log(newEmptySet);

const countri = ['Finland', 'Sweden', 'Norway'];

for (c in countri) {
  console.log(c);
}

const countr = new Map();
for (let i = 0; i < countri.length; i++) {
  countr.set(countri[i], countri[i].length);
}
console.log(countr);

/*
 *********************Exercises:Level 3 *************
 */

const countries = require('./countries_data');
console.log(countries.length);

function mostSpokenLanguages(countries, num) {
  let test = [];
  let rest = [];
  //Creatting an array of languages from countries.languages
  for (let i = 0; i < countries.length; i++) {
    test.push(...countries[i].languages);
  }

  // create a set to remove duplicated language name
  let setTest = new Set(test);

  // following syntax checks test language array against set and if found puts them in one array and creates count using .. array.length method on filtered array that
  // contains only same language for each language on set setTest
  for (const lan of setTest) {
    let filtered = test.filter((lang) => lang === lan);
    rest.push({ lan: lan, count: filtered.length });
  }

  // sorting the rest array of objects with count value of each language
  let sorted = rest.sort((a, b) => (a.count > b.count ? -1 : 1));

  // to output langugeName: repeated value, create another array and pushed language as key and count as value in new obj Object
  let obj = [];
  for (const a of sorted) {
    obs = {};
    let key = a.lan;
    let val = a.count;
    obs[key] = val;
    obj.push(obs);
  }

  let s = obj.splice(0, num);
  return s;
}
console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));

/* for (const l of langset) {
  const filteredLang = languages.filter((lang) => lang === l);
  console.log(filteredLang);
  countsObj.push({ lang: l, count: filteredLang.length });
}
 */
