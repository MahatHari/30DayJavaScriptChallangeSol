/**  Exercises */
/* 
Exercises: Level 1
Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red
*/
function isPrime(num) {
  if (num === 1 || num < 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
for (let i = 0; i < 10; i++) {
  if (isPrime(i)) console.log(i);
}

let containerDiv = document.createElement('div');
containerDiv.className = 'container';

for (let i = 0; i <= 100; i++) {
  let numBox = document.createElement('span');
  numBox.className = 'number';
  numBox.innerText = i;
  numBox.style.width = '60px';
  numBox.style.height = '50px';
  numBox.style.border = '1px solid black';
  numBox.style.padding = '5px';
  numBox.style.textAlign = 'center';
  numBox.style.marginTop = '10px';
  numBox.style.color = 'white';
  numBox.style.fontSize = '3em';

  if (i % 2 === 0) {
    numBox.className = 'even';
    numBox.style.backgroundColor = 'green';
  }
  if (i % 2 !== 0) {
    numBox.className = 'odd';
    numBox.style.backgroundColor = 'yellow';
    numBox.style.color = 'black';
  }
  if (isPrime(i)) {
    numBox.className = 'prime';
    numBox.style.backgroundColor = 'red';
  }
  containerDiv.appendChild(numBox);
}
document.body.appendChild(containerDiv);

let containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0',
  margin: '0',
};
Object.assign(containerDiv.style, containerStyle);
/* Exercises: Level 2   */

/* Use the countries array to display all the countries.See the design */
import { countries } from './countries.js';

let countryDiv = document.createElement('div');
let countrySpanStyle = {
  //display: 'inline-block',
  width: '250px',
  height: '150px',
  border: '1px solid black',
  fontSize: '3em',
  margin: '10px',
  alignSelf: 'auto',
  maxWidth: '50%',
  paddingTop: '75px',
  //paddingBottom: '5px',
};
let countryContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'start',
  padding: '0',
  marginTop: '70px',
  textAlign: 'center',
};
for (const country of countries) {
  let countrySpan = document.createElement('span');
  countrySpan.innerText = country;
  countryDiv.appendChild(countrySpan);
  Object.assign(countrySpan.style, countrySpanStyle);
}

document.body.appendChild(countryDiv);
Object.assign(countryDiv.style, countryContainerStyle);
