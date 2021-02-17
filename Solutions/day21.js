/**
 * 30 Days Of JavaScript: Document Object Model(DOM)
 */

/* Exercise */
/* Exercise Level 1 */

/* Create an index.html file and put four p elements as above: 
Get the first paragraph by using document.querySelector(tagname) and tag name
 */
let firstP = document.querySelector('p');
console.log(firstP);
let bytagName = document.getElementsByTagName('p');
console.log(bytagName);

/**
 * Get get each of the the paragraph using document.querySelector('#id') and by their id
 */
let byIdOne = document.getElementById('three');
console.log(byIdOne);

/* 
Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
*/
let pCollections = document.querySelectorAll('p');

console.log(pCollections);

/*
 Loop through the nodeList and get the text content of each paragraph
 */

for (let p of pCollections) {
  console.log(p.textContent);
}

/* 
Set a text content to paragraph the fourth paragraph,Fourth Paragraph
*/
pCollections[3].innerText = 'This is modified from Java script';

/* 
Set id and class attribute for all the paragraphs using different attribute setting methods
*/
for (let i = 0; i < pCollections.length; i++) {
  pCollections[i].id = `id${i}`;
  pCollections[i].className = 'jsClassName';
}

/* Exercise: Level 2 */

/**
 * Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
 */

/* for (let i = 0; i < pCollections.length; i++) {
  pCollections[i].style.fontSize = '24px';
  pCollections[i].style.padding = '10px';
  if (i % 2 === 0) {
    pCollections[i].style.color = 'red';
    pCollections[i].style.backgroundColor = 'black';
  } else {
    pCollections[i].style.color = 'black';
    pCollections[i].style.border = '2px solid red';
    pCollections[i].style.border.fontFamily = 'arial';
    pCollections[i].style.borderRadius = '10px';
  }
} */

let headCollection = document.querySelectorAll('h3');
headCollection.forEach((head, i) => {
  head.style.fontSize = '50px';
  if ((i + 1) % 2 === 0) {
    head.style.color = 'red';
  } else {
    head.style.color = 'green';
  }
});

/*  Select all paragraphs and loop through each elements and give the first and third
paragraph a color of green, and the second and the fourth paragraph a red color */

pCollections.forEach((p, i) => {
  if ((i + 1) % 2 === 0) {
    p.style.color = 'red';
  } else {
    p.style.color = 'green';
  }
});

/* Set text content, id and class to each paragraph */
pCollections.forEach((p, i) => {
  p.innerText = 'Edited from for Each Loop';
  p.id = 'newId' + i;
  p.className = 'newClass';
});

/** Exercise Level 3 */
/***
 * Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder.
 * Apply all the styles and functionality using JavaScript only.
 * The year color is changing every 1 second
 * The date and time background color is changing every on seconds
 * Completed challenge has background green
 * Ongoing challenge has background yellow
 * Coming challenges have background red
 */
let color = setInterval(randomCollor, 1000);
function randomCollor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  document.getElementById('year').style.color = color;
  document.getElementById('date').style.backgroundColor = color;
}

let wrapper = document.getElementsByClassName('wrapper');
console.log(wrapper);
/* if (wrapper.tagName === 'h2') console.log('child 2');
 */
wrapper[0].children[1].style.margin = '2px auto 2px auto';

//crreate styles object
const h2Style = {
  textAlign: 'center',
  color: 'black',
  textDecoration: 'underline',
};
Object.assign(wrapper[0].children[1].style, h2Style);

let date = document.getElementById('date');

const d = function () {
  let dt = new Date();
  return dt.toDateString();
};
let dd = d();
date.innerText = dd;
dateStyle = {
  display: 'block',
  textAlign: 'center',
  color: 'black',
  textDecoration: 'underline',
  width: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

Object.assign(date.style, dateStyle);

// CHanging background color if it includes Done, Ongoing or Coming
let list = document.getElementsByTagName('li');
console.log(list);
for (let item of list) {
  if (item.innerHTML.includes('Done')) {
    item.style.backgroundColor = 'green';
  }
  if (item.innerHTML.includes('Ongoing')) {
    item.style.backgroundColor = 'yellow';
  }
  if (item.innerHTML.includes('Coming')) {
    item.style.backgroundColor = 'red';
  }
}

let bstyle = {
  display: 'flex',
  backgroundColor: '#F0F0F0	',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '1040px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
};
let body = document.getElementsByTagName('body');
console.log(body);
Object.assign(body[0].style, bstyle);
