/*  *******   30 Days Of JavaScript: Web Storages ****** */

/**
 * Exercises: Level 1
 */
/* Store you first name, last name, age, country, city in your browser localStorage.*/

let myInfo = {};
myInfo.firstName = 'Hari';
myInfo.lastName = 'Mahat';
myInfo.age = 31;
myInfo.country = 'Finland';
myInfo.city = 'Turku';

// parsing myInfo object to JSON, (object, revevir, indentation)
stringInfo = JSON.stringify(myInfo, undefined, 4);

//setting localStorage to store myInfo, stringifyied
localStorage.setItem('b', stringInfo);

//Getting localStorage with key of 'b'
console.log(localStorage.getItem('b'));

/* 
Exercises: Level 2 */
/*
Create a student object. The student object will have
first name, last name, age, skills, country, 
enrolled keys and values for the keys. Store the student object in your 
browser localStorage.
*/

const Student = {
  firstName: 'Hari',
  lastName: 'Mahat',
  age: 31,
  skills: ['HTML', 'CSS', 'React', 'Javascript', 'Python'],
  country: 'Finland',
  enrolledKeys: '88340',
};

//Parsing to JSON

const stundentJson = JSON.stringify(Student, undefined, 4);

localStorage.setItem('student', stundentJson);

console.log(localStorage.getItem('student'));

/* 
Exercises: Level 3
Create an object called personAccount. It has firstname, lastname, incomes,
 expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
 addExpense and accountBalance methods. Incomes is a set of incomes and 
 its description and expenses is also a set of expenses and its description.
*/

const personAccount = {
  firstName: 'Hari',
  lastName: 'Mahat',
  incomes: 12000,
  expenses: 3000,
  totalIncome: function () {
    return this.incomes;
  },
  totalExpenses: function () {
    return this.expenses;
  },
  addIncome: function (inc) {
    this.incomes += inc;
  },
  addExpense: function (exp) {
    this.expenses += exp;
  },
  accountBalance: function () {
    return this.incomes - this.expenses;
  },
  accountInfo: function () {
    console.log(`
        Name: ${this.firstName}  ${this.lastName},
        Account Balance: ${this.accountBalance()}
        `);
  },
};

personAccount.addIncome(200);
personAccount.addIncome(300);
personAccount.addExpense(300);
personAccount.accountInfo();

//Storing personAccount Object in localStroage

//converting to json => Converting to JSON causes Object to loose methods ans JSON handles
//only data and methods are complext things for JSON to handle
const personAccountJSON = JSON.stringify(personAccount, undefined, 4);
console.log(personAccountJSON);
localStorage.setItem('pa', personAccountJSON);
console.log(localStorage.getItem('pa'));
