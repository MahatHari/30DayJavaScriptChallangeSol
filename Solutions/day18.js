// /* *************   30 Days Of JavaScript: Promises ************** */
// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'Javascript'];
//     callback(false, skills);
//   }, 2000);
// };
// const callback = (err, results) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(results);
// };

// doSomething(callback);

// //Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'Javascript', 'Python'];
//     if (skills.length > 0) {
//       resolve(skills);
//     } else {
//       reject('Something went wrong');
//     }
//   }, 2000);
// });

// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(err));

// // Importing Fetch
const { RSA_NO_PADDING } = require('constants');
const fetch = require('node-fetch');
// const url = 'https://restcountries.eu/rest/v2/all'; //countries API
// fetch(url)
//   .then((response) => response.json()) //accessing API data as json
//   .then((data) => {
//     //console.log(data);
//   })
//   .catch((err) => console.log(err));

// // Async and Await

// const square = async function (n) {
//   return n * n;
// };

// //Promise method
// const url2 = 'https://restcountries.eu/rest/v2/all'; //countries API
// fetch(url2)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// // Fetching data with Async and Await

// const dataFetch = async () => {
//   try {
//     const response = await fetch(url);
//     const countries = await response.json();
//     console.log(countries);
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log('====== async and await ====');
// dataFetch();

/*** Exercise  */
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const dataFetch = async () => {
  try {
    const res = await fetch(countriesAPI);
    const countries = await res.json();
    countries.slice(0, 10).forEach((element) => {
      let list = element.languages;
      let langArray = [];
      list.forEach((lan) => langArray.push(lan.name));
      console.log(
        `Name: ${element.name},
        Capital: ${element.capital},
        Language: ${langArray},
        Population: ${element.population},
        Area: ${element.area}`
      );
    });
  } catch {
    (err) => console.log(err);
  }
};

console.log(dataFetch());

/*** Exercise Level  2 */
/** Print out all the cat names in to catNames variable. */

const catNames = async () => {
  const resp = await fetch(catsAPI);
  const data = await resp.json();
  return data;
};

/** Exercise Level 3 */
/*
Read the cats api and find the average weight of cat in metric unit.
*/
catNames().then((d) => {
  let weightArra = [];
  let avg = 0;
  let testData = d.slice(0, 3);

  let c = d.map((a) => {
    let wVal = a.weight.metric.split('-');
    let b = (parseInt(wVal[0]) + parseInt(wVal[1])) / 2;
    return { Name: a.name, Average_Weight: b };
  });
  console.table(c);
});

/**
 * Read the countries api and find out the 10 largest countries
 */
const countries = async () => {
  const res = await fetch(countriesAPI);
  const data = await res.json();
  return data;
};

countries().then((country) => {
  const sorted = country.sort((a, b) => (a.population > b.population ? -1 : 1));
  const mostTen = sorted.slice(0, 10);
  const tenLargest = [];
  mostTen.forEach((a) => {
    tenLargest.push({ Country: a.name, Population: a.population });
  });
  console.table(tenLargest);
});

/**
 * Read the countries api and count total number of languages in the world used as officials.
 */
countries().then((country) => {
  let count = 0;
  country.forEach((el) => {
    let c = el.languages.length;
    count += c;
  });
  console.log('Total number of Language', count);
});
