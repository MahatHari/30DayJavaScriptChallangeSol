import { countries } from '../countries_data.js';

// Creating array objects of most spoken 10 countries
const mostPopulated = (countries, n = 10) => {
  let sortbyPopulation = countries.sort((a, b) =>
    a.population > b.population ? -1 : 1
  );
  return sortbyPopulation.slice(0, n);
};

// Creating array objects of most Lanaguges 10 countries
const mostSpokenLanguage = (countries, n = 10) => {
  let allLanguage = [];
  let uniqueLangauges = [];

  // create array of lanaguage
  for (const country of countries) {
    allLanguage.push(...country.languages);
  }
  let uniqueLangauge = new Set(allLanguage);
  // creating list array of objects with key language and count as value
  for (const lang of uniqueLangauge) {
    let sameLanguage = allLanguage.filter((lan) => lang === lan);
    // pushes object in format Chinese:5 to uniquelanguage array
    uniqueLangauges.push({ Language: lang, count: sameLanguage.length });
  }

  //Sorting and returning 10/n most spoken langauge
  return uniqueLangauges
    .sort((a, b) => (a.count > b.count ? -1 : 1))
    .slice(0, n);
};

const totalPopulation = countries.reduce(
  (acc, currVal) => acc + currVal.population,
  0
);

const dPopulation = mostPopulated(countries).reduce(
  (acc, currVal) => acc + currVal.population,
  0
);
console.log(dPopulation);

const totalLangauge = mostSpokenLanguage(countries).reduce(
  (acc, current) => acc + current.count,
  0
);
console.log(totalLangauge);

const displayPopulation = document.getElementById('displayPopulation');
const containderDiv = document.createElement('div');

for (const country of mostPopulated(countries)) {
  const nameDiv = document.createElement('div');
  const graphDiv = document.createElement('div');
  const numberDiv = document.createElement('div');

  nameDiv.innerText = country.name;
  graphDiv.innerHTML = '';

  const fillDiv = document.createElement('div');
  const noFillDiv = document.createElement('div');
  const gDivContainer = document.createElement('div');

  gDivContainer.append(fillDiv, noFillDiv);

  gDivContainer.classList.add('ui', 'two', 'column', 'grid', 'container');
  fillDiv.classList.add('column', 'wide', 'red');
  noFillDiv.classList.add('column', 'three', 'wide');

  let p = Math.floor((country.population / dPopulation) * 100);
  fillDiv.style.width = `${p}%`;
  console.log(p);

  numberDiv.innerText = country.population;
  const holdDiv = document.createElement('div');
  graphDiv.appendChild(gDivContainer);
  holdDiv.append(nameDiv, graphDiv, numberDiv);
  containderDiv.append(holdDiv);

  nameDiv.classList.add('column');
  graphDiv.classList.add('column');
  numberDiv.classList.add('column');

  holdDiv.classList.add('ui', 'equal', 'width', 'grid');
  nameDiv.classList.add('column');
  graphDiv.classList.add('eight', 'wide', 'ui');
  numberDiv.classList.add('column');
}
displayPopulation.appendChild(containderDiv);

for (const lang of mostSpokenLanguage(countries)) {
  const nameDiv = document.createElement('div');
  const graphDiv = document.createElement('div');
  const numberDiv = document.createElement('div');

  nameDiv.innerText = lang.Language;
  graphDiv.innerHTML = '';

  const fillDiv = document.createElement('div');
  const noFillDiv = document.createElement('div');
  const gDivContainer = document.createElement('div');

  gDivContainer.append(fillDiv, noFillDiv);

  gDivContainer.classList.add('ui', 'two', 'grid', 'container');
  fillDiv.classList.add('column', 'wide', 'red');
  noFillDiv.classList.add('column', 'three', 'wide', 'blue');

  numberDiv.innerText = lang.count;
  let p = Math.floor((lang.count / totalLangauge) * 100);
  fillDiv.style.width = `${p}%`;

  console.log(p);
  const holdDiv = document.createElement('div');
  graphDiv.appendChild(gDivContainer);
  holdDiv.append(nameDiv, graphDiv, numberDiv);
  containderDiv.append(holdDiv);

  nameDiv.classList.add('column');
  graphDiv.classList.add('column');
  numberDiv.classList.add('column');

  holdDiv.classList.add('ui', 'equal', 'width', 'grid');
  nameDiv.classList.add('column');
  graphDiv.classList.add('eight', 'wide', 'ui');
  numberDiv.classList.add('column');
}
