/***
 *            *************** Exercise Level 1 ***************
 */
/**
 * Explain the difference between forEach, map, filter, and reduce.
  forEach will be used only with arrays and Iterate over each element of the array
  iterate an array elements and modify the array elements, returns a new array
  iterates an array elements and returns the new array fitting the filter condtion
  takes a accumulator, current and optional initial value, works on each value and returns a single value
 * Define a call function before you them in forEach, map, filter or reduce.
 * Use forEach to console.log each country in the countries array.
 * Use forEach to console.log each name in the names array.
 * Use forEach to console.log each number in the numbers array.
 * Use map to create a new array by changing each country to uppercase in the countries array.
 * Use map to create an array of countries length from countries array.
 * Use map to create a new array by changing each number to square in the numbers array
 * Use map to change to each name to uppercase in the names array
 * Use map to map the products array to its corresponding prices.
 * Use filter to filter out countries containing land.
 * Use filter to filter out countries having six character.
 * Use filter to filter out countries containing six letters and more in the country array.
 * Use filter to filter out country start with 'E';
 * Use filter to filter out only prices with values.
 * Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
 * Use reduce to sum all the numbers in the numbers array.
 * Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
 * Explain the difference between some and every
 * Use some to check if some names' length greater than seven in names array
 * Use every to check if all the countries contain the word land
 * Explain the difference between find and findIndex.
 *  Use find to find the first country containing only six letters in the countries array
 * Use findIndex to find the position of the first country containing only six letters in the countries array
 * Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
 * Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

 */
const countries = [
  'Finland',
  'Sweden',
  'Denmark',
  'Norway',
  'IceLand',
  'Ethopia',
];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// forEach
countries.forEach((country) => console.log(country.toUpperCase()));

//Map
let modifiedName = names.map((name) => {
  return name.toLocaleLowerCase();
});
console.log(modifiedName);

// Filter

let filtered = names.filter((name) => name.length > 6);
console.log(filtered);

// reduce
let sum = numbers.reduce((sum, curr) => sum + curr, 0);
console.log(sum);

/* 
  6 Use map to create a new array by changing each country to uppercase in the countries array.
 */
let mvCountry = countries.map((country) => country.toUpperCase());
console.log(mvCountry);

/*
 Use map to create an array of countries length from countries array.
 */
let lenCountry = countries.map((country) => country.length);
console.log(lenCountry);

/* 
Use map to create a new array by changing each number to square in the numbers array
*/
let sqNum = numbers.map((num) => num * num);
console.log(sqNum);

/* 
Use map to change to each name to uppercase in the names array
*/
let capName = names.map((na) => na.toUpperCase());

/*  
Use map to map the products array to its corresponding prices.
*/
let pPrice = products.map((p) => {
  return ` Name: ${p.product} Price: ${p.price}`;
});
console.log(pPrice);

/* 
Use filter to filter out countries containing land
*/
let filCount = countries.filter((country) => country.endsWith('land'));
console.log(filCount);

/* 
Use filter to filter out countries having six character.
*/
countries.filter((country) => {
  if (country.length === 6) console.log(country);
});

/* 
Use filter to filter out countries containing six letters and more in the country array.
*/
countries.filter((country) => {
  if (country.length >= 6) console.log(country);
});

countries.filter((country) => {
  if (country.startsWith('E')) console.log(country);
});

/* 
Use filter to filter out only prices with values.
*/

products.filter((product) => {
  if (typeof product.price === 'number') console.log(product);
});

/* 
Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

*/
function getStringLists(arr) {
  let strArray = arr.filter((item) => {
    if (typeof item === 'string') {
      return item;
    }
  });
  return strArray;
}
a = ['a', 'b', 1, 2, 3, 'r', 's'];

console.log(getStringLists(a));

/* 
Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/

console.log(
  countries.reduce((preValue, currVal, idx) => {
    return (idx = 0 ? currVal : preValue + ', ' + currVal);
  })
);

/* 
Explain the difference between some and every
some - checks for some elements are in similar aspect
every- checks for every elements are similar aspects
*/
/* 
Use some to check if some names' length greater than seven in names array
*/
// the following will return true, as one name is longer than 7 char, below the name is logged if holds true for some elements,
names.some((name) => {
  if (name.length > 7) console.log(name);
});

/* 
Use every to check if all the countries contain the word land
*/
// checks for every elements if endswith 'land', returns false if not all element ends with 'land'
console.log(countries.every((country) => country.endsWith('land')));

/* 
Explain the difference between find and findIndex.
     Find returns true when the find the match, 
     findIndex return the index of the first element that match
*/

/* 
Use find to find the first country containing only six letters in the countries array
*/
console.log(countries.find((country) => country.length === 6));

/* 
Use findIndex to find the position of the first country containing only six letters in the countries array
*/
console.log(countries.findIndex((country) => country.length === 6));

/* 
Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
*/
console.log(countries.findIndex((country) => country === 'Norway'));

/* 
Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/
console.log(countries.findIndex((country) => country === 'Russia'));

/**
 *
 * *************************** Exercises: Level 2 **************
 *
 */

/* 
 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
 */
let totalPrice = 0;
totalPrice = products
  .map((product) => product.price)
  .filter((p) => typeof p === 'number')
  .reduce((sum, curr) => sum + curr, 0);

console.log(totalPrice);

/* 
Find the sum of price of products using only reduce reduce(callback))
*/

let sumP = products.reduce(function (sum, product) {
  return +sum + product.price; // using type cast on sum so that if can be parse to Numbers  or  could have used if (typeof product.price === 'number')
}, 0);
console.log(sumP);

/* 
Declare a function called categorizeCountries which returns an array of countries which have some 
common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/

function categorizeCountries(arr) {
  let newArray = arr.reduce(function (newArray, curr) {
    if (
      curr.includes('land') ||
      curr.includes('ia') ||
      curr.includes('island') ||
      curr.includes('stan') ||
      curr.includes('Land')
    ) {
      newArray.push(curr);
    }
    return newArray;
  }, []);
  return newArray;
}

console.log(categorizeCountries(countries));

/* 
Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
*/
function letterCountry(arr) {}

/* 
Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
*/

function getFirstTenCountries() {}

/* 
Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
*/
function countryInitials() {}

const { map } = require('./countries_data');
/**
 *
 *  ****************************   Exercises: Level 3    ********************************
 *
 */

/* 
 Use the countries information, in the data folder. Sort countries by name, by capital, by population
 */
const countries_data = require('./countries_data');

countries_data.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
});

console.log('Sorted by Capital');

countries_data.sort((a, b) => {
  if (a.capital > b.capital) {
    return 1;
  }
  if (a.capital < b.capital) {
    return -1;
  }
});

console.log('Sorted by Population');
countries_data.sort((a, b) => {
  if (a.population > b.population) {
    return 1;
  }
  if (a.population < b.population) {
    return -1;
  }
});

/* 
*** Find the 10 most spoken languages:  //TODO:

*/
/* countries_data.forEach((country) => {
  let count = 0;
  console.log(
    country.languages.reduce((acc, prev) => {
      return { country: country.languages, count: acc + prev };
    })
  );
});
 */
let testdata = countries_data.slice(0, 10).map((i) => {
  let testarray = [];

  i.languages.forEach((lan) => {
    testarray.push(lan);
  });

  return testarray;
});
let as = [].concat.apply([], testdata);

/*
 *** Use countries_data.js file create a function which create the ten most populated countries
 */
let sorted = countries_data
  .sort((a, b) => {
    if (a.population > b.population) {
      return -1;
    }
    if (a.population < b.population) {
      return 1;
    }
  })
  .slice(0, 10);

//console.log(sorted);

function gettest(sorted) {
  let country = sorted.name;
  let population = sorted.population;

  return { country: country, population: population };
}

function mostPopulated(countries_data, num) {
  let sorted = countries_data
    .sort((a, b) => {
      if (a.population > b.population) {
        return -1;
      }
      if (a.population < b.population) {
        return 1;
      }
    })
    .slice(0, num);
  return sorted.map(gettest);
}

console.log(mostPopulated(countries_data, 10));

/* 
*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, 
and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical 
calculations as method for the statistics object. Check the output below.
*/
const ages = [
  31,
  26,
  34,
  37,
  27,
  26,
  32,
  32,
  26,
  27,
  27,
  24,
  32,
  33,
  27,
  25,
  26,
  38,
  37,
  31,
  34,
  24,
  33,
  29,
  26,
];

const statistics = {
  count: function (data) {
    return data.length;
  },
  sum: function (data) {
    return data.reduce((acc, init) => acc + init, 0);
  },
  min: function (data) {
    let min = data[0];
    for (let i = 0; i < data.length; i++) {
      let val = data[i];
      min = val < min ? val : min;
    }
    return min;
  },
  max: function (data) {
    let max = data[0];
    for (let i = 0; i < data.length; i++) {
      let val = data[i];
      max = val > max ? val : max;
    }
    return max;
  },
  range: function (data) {
    return this.max(data) - this.min(data);
  },
  mean: function (data) {
    return this.sum(data) / this.count(data);
  },
  median: function (data) {
    let d = data.sort((a, b) => (a > b ? 1 : -1));
    if (d.length % 2 === 0) {
      return d[d.length / 2];
    } else {
      return d[Math.floor(d.length / 2)];
    }
  },
  mode: function (data) {
    let counts = {};
    let compare = 0;
    let mostFrequent;
    for (let i = 0; i < data.length; i++) {
      let c = data[i];
      if (counts[c] === undefined) {
        counts[c] = 1;
      } else {
        counts[c] = counts[c] + 1;
      }
      if (counts[c] > compare) {
        compare = counts[c];
        mostFrequent = data[i];
      }
    }

    return { mode: mostFrequent, count: counts[mostFrequent] };
  },
  var: function (data) {
    let mean = this.mean(data);
    return (
      data.reduce(function (acc, init) {
        acc = acc + Math.pow(init - mean, 2);
        return acc;
      }, 0) / data.length
    );
  },
  std: function (data) {
    return Math.sqrt(this.var(data)).toFixed(2);
  },
  freDist: function () {},
  describe: function (data) {
    return data
      .count()
      .sum()
      .min()
      .max()
      .range()
      .mean()
      .median()
      .mode()
      .var()
      .std();
  },
};

console.log('Count:', statistics.count(ages)); // 25
console.log('Sum: ', statistics.sum(ages)); // 744
console.log('Min: ', statistics.min(ages)); // 24
console.log('Max: ', statistics.max(ages)); // 38
console.log('Range: ', statistics.range(ages)); // 14
console.log('Mean: ', statistics.mean(ages)); // 30
console.log('Median: ', statistics.median(ages)); // 29
console.log('Mode: ', statistics.mode(ages)); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var(ages)); // 17.5
console.log('Standard Deviation: ', statistics.std(ages)); // 4.2
console.log('Variance: ', statistics.var(ages)); // 17.5
/*console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

*/
console.log('Described', statistics.describe(ages));
