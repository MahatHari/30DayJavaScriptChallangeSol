 import { hariSolution2020 } from './info.js';

// Color Generator
function randomCollorGenerator() {
  let letters = '0123456789ACBDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// creating a wrapper div
let wrapper = document.createElement('div');
document.body.appendChild(wrapper);

// Creating Title and Date at the end of title
let title = document.createElement('h1');
title.innerText = hariSolution2020.description;

// Creating Date to append at the end of title
let date = new Date();
let dt = document.createElement('span');
dt.innerText = date.getFullYear();

//appending date to title
title.appendChild(dt);

/** Styling Date */
dt.style.padding = '10px';
dt.style.fontSize = '80px';
// Calling to change color of date every Second
setInterval(applyColor, 1000);
function applyColor() {
  let color = randomCollorGenerator();
  dt.style.color = color;
}

wrapper.appendChild(title);

let subtitle = document.createElement('p');
subtitle.innerText = hariSolution2020.challengeSubtitle;

wrapper.appendChild(subtitle);

let dateBlink = document.createElement('p');
dateBlink.innerText = date.toDateString() + '  ' + date.toLocaleTimeString();
wrapper.appendChild(dateBlink);

setInterval(() => {
  let c = randomCollorGenerator();
  dateBlink.style.backgroundColor = c;
}, 1000);
dateBlink.style.width = '300px';

let dataCoverDiv = document.createElement('div');
dataCoverDiv.className = 'dataCoverDiv';

for (const challenge of hariSolution2020.challenges) {
  console.log(challenge.name);
  let challengeName = document.createElement('div');
  challengeName.className = 'challengeName';

  challengeName.innerText = challenge.name;
  let topicDiv = document.createElement('div');

  topicDiv.className = 'topic';
  topicDiv.style.display = 'flex';

  topicDiv.style.justifyContent = 'start';
  let detailTag = document.createElement('details');

  let summaryTag = document.createElement('summary');
  let paraTag = document.createElement('p');
  paraTag.innerText = challenge.topics;
  summaryTag.innerText = challenge.topics[0];
  let completeDiv = document.createElement('div');

  completeDiv.className = 'status';
  completeDiv.innerText = challenge.status;

  // adding to detail tage
  detailTag.append(summaryTag);
  detailTag.append(paraTag);
  topicDiv.appendChild(detailTag);

  let cha = document.createElement('div');
  cha.append(challengeName);
  cha.append(topicDiv);
  cha.append(completeDiv);
  cha.className = 'dataDiv';
  dataCoverDiv.appendChild(cha);

  if (challenge.status === 'Done') {
    cha.style.backgroundColor = 'green';
  }
  if (challenge.status === 'Ongoing') {
    cha.style.backgroundColor = 'yellow';
  }
  if (challenge.status === 'Coming') {
    cha.style.backgroundColor = 'red';
  }

  let dataCss = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: '5vh',
    minWidth: '100%',
    alignItems: 'center',
    marginBottom: '4px',
    padding: '20px',
  };
  Object.assign(cha.style, dataCss);
}
wrapper.appendChild(dataCoverDiv);

// Name Div
const authorDiv = document.createElement('div');
const nameDiv = document.createElement('h3');
nameDiv.innerText =
  hariSolution2020.author.firstName + ' ' + hariSolution2020.author.lastName;
authorDiv.appendChild(nameDiv);

// Creating adding Each Social Links
const socialLinks = document.createElement('div');
let unOrder = document.createElement('ul');
unOrder.style.display = 'flex';
unOrder.style.flexDirection = 'row';
unOrder.style.justifyContent = 'center';

for (const links of hariSolution2020.author.socialLinks) {
  let socialLinks = document.createElement('li');
  let anchorTag = document.createElement('a');
  anchorTag.href = links.url;
  anchorTag.innerHTML = links.fontawesomeIcon;
  socialLinks.style.listStyle = 'none';
  socialLinks.style.padding = '10px';
  unOrder.style.fontSize = '60px';

  socialLinks.appendChild(anchorTag);
  unOrder.appendChild(socialLinks);
}
socialLinks.appendChild(unOrder);

// adding  Social links to Author Div
authorDiv.appendChild(socialLinks);
//Creating and adding description paragraph
let descriptionPara = document.createElement('p');
descriptionPara.className = 'bio';
descriptionPara.innerText = hariSolution2020.author.bio;

authorDiv.appendChild(descriptionPara);
// adding authorDiv to wraaper Div
wrapper.appendChild(authorDiv);

// Profile

let profile = document.createElement('div');

// Adding Titles
let titles = document.createElement('div');
let titleH3 = document.createElement('h3');
titleH3.innerText = 'Titles';
let ultitle = document.createElement('ul');
for (const title of hariSolution2020.author.titles) {
  let list = document.createElement('li');
  let icon = document.createElement('span');
  let titleText = document.createElement('span');

  icon.innerText = title[0];
  titleText.innerText = title[1];
  list.append(icon);
  list.append(titleText);

  icon.style.display = 'block-inline';
  //icon.style.border = '1px solid black';
  icon.style.marginRight = '20px';

  list.style.listStyle = 'none';
  list.style.marginLeft = '-90px';

  ultitle.appendChild(list);
}
titles.appendChild(titleH3);
titles.appendChild(ultitle);
profile.appendChild(titles);
wrapper.appendChild(profile);

// Adding Skills
let skills = document.createElement('div');
let skillH3 = document.createElement('h3');
skillH3.innerText = 'Skills';
let ultitle2 = document.createElement('ul');
for (const skill of hariSolution2020.author.skills) {
  let list = document.createElement('li');
  list.innerText = skill;
  list.style.listStyle = 'none';
  list.style.marginLeft = '-80px';

  ultitle2.appendChild(list);
}
skills.appendChild(skillH3);
skills.appendChild(ultitle2);
profile.appendChild(skills);
wrapper.appendChild(profile);

//Adding Qualifications
let qualifications = document.createElement('div');
let qualH3 = document.createElement('h3');
qualH3.innerText = 'Qualifications';
let ultitle3 = document.createElement('ul');
for (const qaul of hariSolution2020.author.qualifications) {
  let list = document.createElement('li');
  console.log(qaul);
  list.innerText = qaul;
  list.style.listStyle = 'none';
  list.style.marginLeft = '-90px';

  ultitle3.appendChild(list);
}
qualifications.appendChild(qualH3);
qualifications.appendChild(ultitle3);
profile.appendChild(qualifications);
wrapper.appendChild(profile);

// Adding Keywords
let keywordDiv = document.createElement('div');
for (const keyword of hariSolution2020.keywords) {
  let keySpanStyle = {
    display: 'inline-block',
    background: randomCollorGenerator(),
    border: '2px solid black',
    borderRadius: '8px',
    width: 'auto',
    padding: '10px',
    margin: '5px',
    textAlignment: 'center',
    color: 'white',
    fontSize: '24px',
  };
  let keySpan = document.createElement('span');
  keySpan.innerText = '#' + keyword;
  //keySpan.style.backgroundColor = randomCollorGenerator();
  Object.assign(keySpan.style, keySpanStyle);

  keywordDiv.appendChild(keySpan);
}
wrapper.appendChild(keywordDiv);

// Wapper Css
let wrapperCss = {
  display: 'flex',
  height: '100vh',
  maxWidth: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  backgroundColor: '#F5F5F5	',
};
Object.assign(wrapper.style, wrapperCss);

// Title CSS
let titleCss = {
  display: 'flex',
};
//DataCover DIV
let dataDivCss = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '90%',
};
Object.assign(dataCoverDiv.style, dataDivCss);
// Data DIV

// Author Div
let authorCss = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '30vh',
  alignItems: 'center',
  width: '90%',
};
Object.assign(authorDiv.style, authorCss);
//Profile Div
let profileCss = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  minHeight: '20vh',
  minWidth: '80%',

  marginBottom: '4px',
  padding: '20px',
};
Object.assign(profile.style, profileCss);
// Keyword Div

let keyworCss = {
  minWidth: '80%',
};
Object.assign(keywordDiv.style, keyworCss);

// Background color Over Ride
