import { countries } from '../countries_data.js';

function mostPopulated() {
  let mostPopulated = countries.sort((a, b) =>
    a.population > b.population ? -1 : 1
  );
  return mostPopulated.slice(0, 10);
}
const mostPopul = mostPopulated();

function mostSpokenLanguage(countries, n) {
  let allLangauge = [];
  let UniqueLangugeCounts = [];

  //create array of languages
  for (let i = 0; i < countries.length; i++) {
    allLangauge.push(...countries[i].languages);
  }

  // creating a set of unique languages (removing duplicates from test)
  let uniqueLangauge = new Set(allLangauge);

  // counting number of spoken langugages (counting number of repeated language inside allLangauge)
  // using a helper array(sameLanguage) to push all repeated same language from inside allLangauge array
  // testing
  for (const lan of uniqueLangauge) {
    let sameLanguage = allLangauge.filter((lang) => lang === lan);
    UniqueLangugeCounts.push({ lan: lan, count: sameLanguage.length });
  }

  // sorting most spoken language by their counts
  UniqueLangugeCounts = UniqueLangugeCounts.sort((a, b) =>
    a.count > b.count ? -1 : 1
  );
  return UniqueLangugeCounts.slice(0, n);
}

const mostSpoken = mostSpokenLanguage(countries, 10);

const section = document.querySelector('section');

pop.onclick = function populationData() {
  const sum = mostSpoken.reduce((acc, curVal) => acc + curVal.count, 0);
  const displayPopulation = document.getElementById('displayPopulation');
  let dataDiv = document.createElement('div');
  displayPopulation.appendChild(dataDiv);
  for (const a of mostSpoken) {
    let nameSpan = document.createElement('span');
    let countSpan = document.createElement('span');
    let graphDiv = document.createElement('div');
    let chartDiv = document.createElement('div');
    nameSpan.innerText = a.lan;
    countSpan.innerText = a.count;
    graphDiv.innerText = '  .';
    graphDiv.className = 'graphDiv';
    chartDiv.style.width = (a.count / sum) * 500 + 'px';

    dataDiv.append(nameSpan);
    dataDiv.append(graphDiv);
    graphDiv.appendChild(chartDiv);
    dataDiv.append(countSpan);
    displayPopulation.appendChild(dataDiv);
  }
  displayPopulation.style.display =
    document.getElementById('displayPopulation').style.display === 'none'
      ? 'flex'
      : 'none';
};

document.getElementById('lang');
lang.onclick = function langugeData() {
  const displayLang = document.getElementById('displayLang');
  const dataDiv = document.createElement('div');
  if (document.getElementById('displayPopulation').hasChildNodes()) {
    document.getElementById('displayPopulation').remove(dataDiv);
  } else {
    for (const b of mostPopul) {
      let nameSpan = document.createElement('span');
      let countSpan = document.createElement('span');
      let graphDiv = document.createElement('div');
      let chartDiv = document.createElement('div');
      nameSpan.className = 'countryName';
      countSpan.className = 'number';
      graphDiv.className = 'graphDiv';
      nameSpan.innerText = b.name;
      countSpan.innerText = b.capital;
      graphDiv.innerText = b.population;
      dataDiv.append(nameSpan);
      graphDiv.appendChild(chartDiv);
      dataDiv.append(countSpan);
      displayLang.appendChild(dataDiv);
    }
  }

  displayLang.style.display =
    document.getElementById('displayLang').style.display === 'none'
      ? 'flex'
      : 'none';
};

if (document.getElementById('displayPopulation').hasChildNodes()) {
  console.log('Has ChildNode');
}
