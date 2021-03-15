import { countries } from '../countries_data.js';

const cards = document.getElementById('cards');
const display = (countries) => {
  for (const country of countries) {
    const card = document.createElement('div');
    card.classList.add('card', 'five', 'wide', 'column');
    const content = document.createElement('div');
    content.classList.add('content');
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = country.name;
    const meta = document.createElement('div');
    meta.classList.add('meta');
    meta.innerText = country.capital;
    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = `<p>Currency: ${country.currency} <br/>
  Languages: ${country.languages.join(',')} </p>`;
    content.appendChild(header, meta, description);
    content.appendChild(meta);
    content.appendChild(description);
    card.appendChild(content);
    cards.appendChild(card);
  }
};
display(countries);

const startingWord = (letter) => {
  return countries.filter((country) =>
    country.name.toLowerCase().startsWith(letter.toLowerCase())
  );
};

const inputValue = document.getElementById('input');

const anyWord = (word) => {
  return countries.filter((country) =>
    country.name.toLowerCase().includes(word)
  );
};

let conditionalText = '';

document.getElementById('startingWord').addEventListener('click', (event) => {
  inputValue.addEventListener('input', (event) => {
    let letter = event.target.value;
    let country = countries.filter((country) =>
      country.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    if (letter !== '') {
      document.querySelector(
        'h3'
      ).innerHTML = `Countries Starting with  ${letter} are ${country.length}`;
    }
  });
});
document.getElementById('searchAny').addEventListener('click', (event) => {
  inputValue.addEventListener('input', (event) => {
    let letter = event.target.value;
    console.log(letter);
    const country = countries.filter((country) =>
      country.name.toLowerCase().ifncludes(letter.toLowerCase())
    );
    if (letter !== '') {
      display(country);
      document.querySelector(
        'h3'
      ).innerHTML = `Countries Containing with  ${letter} are ${country.length}`;
    }
  });
});

console.log(conditionalText);
/* Adding Elements to Header Section */
document.querySelector('h2').innerText += `   ${countries.length}`;
