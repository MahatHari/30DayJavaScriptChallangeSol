/*
 ************** 30 Days Of JavaScript: Destructuring and Spreading ********
 */

/*
 ******************Exercises: Level 1 ****************
 */
/**
 * Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
 * Destructure and assign the elements of countries array to fin, est, sw, den, nor
 * Destructure the rectangle object by its properties or keys.
 */
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

let [e, pi, gravit, humanBodyTemp, waterBoilingTemp] = constants;
console.log(humanBodyTemp);

let [fin, est, sw, den, nor] = countries;
console.log(nor);
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(a);

/**
 ******************* Exercises: Level 2 *************
 */

/* 
Iterate through the users array and get all the keys of the object using destructuring
Find the persons who have less than two skills
 */
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

for (const { name, scores, skills, age } of users) {
  if (skills.length <= 2) console.log(name, scores, skills.join(','), age);
}

/**
 *
 * *****************Exercises: Level 3 ***********
 *
 */
const countries_data = require('./countries_data');

/* 
Destructure the countries object print name, capital, population and languages of all countries
*/

for ({ name, capital, population, languages } of countries_data) {
  console.log(name, capital, population, languages);
}

/* 
A junior developer structure student name, skills and score in array of arrays which
 may not easy to read. Destructure the following array name to name, skills array to 
 skills, scores array to scores, JavaScript score to jsScore and React score to 
 reactScore variable in one line
*/
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [names, skills, [, , jsScore, reactScore]] = student;
console.log(names, skills, jsScore, reactScore);

/* 
Write a function called convertArrayToObject which can convert the array
 to a structure object.
*/
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];
function convertArrayToObject(arr) {
  let obj = [];
  for (a of arr) {
    let [name, skills, scores] = a;
    obj.push({ name: name, skills: skills, scores: scores });
  }
  return obj;
}

console.log(convertArrayToObject(students));

/* 
Copy the student object to newStudent without mutating the original object. 
In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add
*/
const studentI = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

const newStudent = { ...studentI };
console.log(newStudent);

console.log(newStudent.skills.frontEnd);

console.log('Student ', studentI.skills);

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });

newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });

newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });

newStudent.skills.dataScience.push('SQL');

console.log('Edited New Student', newStudent.skills);
