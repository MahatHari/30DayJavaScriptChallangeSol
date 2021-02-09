/**
 *  30 Days Of JavaScript: JSON
 */
/*  *********** EXERCISES *************** */
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
let age = 250;
let isMarried = true;
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;

/**
 *     *************   Exercises Level 1 **********
 * Change skills array to JSON using JSON.stringify()
 * Stringify the age variable
 * Stringify the isMarried variable
 * Stringify the student object
 */

let skillsJson = JSON.stringify(skills);
console.log(skillsJson);
let ageStringified = JSON.stringify(age);
console.log(ageStringified); //250 type string
console.log(typeof ageStringified);

let isMarriedStringified = JSON.stringify(isMarried);
console.log(isMarriedStringified); // true type string
console.log(typeof isMarriedStringified);
console.log(
  JSON.parse(isMarriedStringified),
  typeof JSON.parse(isMarriedStringified) // true, boolean
);

let stundentJSOn = JSON.stringify(student);
console.log(stundentJSOn);

/*  **************** Exercises Level 2 ************** */
/* 
Stringify the students object with only firstName, lastName and skills properties
*/
let filteredStundentJson = JSON.stringify(
  student,
  ['firstName', 'lastName', 'skills'],
  4
); //indention 4 with filter array
console.log(filteredStundentJson);

/* 
Exercises Level 3
*/

/***
 * Parse the txt JSON to object.
 * Find the the user who has many skills from the variable stored in txt
 */

const Users = JSON.parse(txt);
//console.log(Users);
let mostSkill;
let compare = 0;
let user;
for (let key in Users) {
  if (Users.hasOwnProperty(key)) {
    if (Users[key].skills.length > compare) {
      compare = Users[key].skills.length;
      mostSkill = Users[key];
      user = key;
    }
  }
}
//console.log(compare);
console.log('User with most skill ', user, mostSkill);
