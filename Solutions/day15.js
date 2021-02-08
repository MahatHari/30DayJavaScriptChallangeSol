/**
 * 30 Days Of JavaScript: Classes
 */
/**
 * Exercises Level 1
 * Create an Animal class. The class will have name, age, color, legs properties and
 * create different methods
 * Create a Dog and Cat child class from the Animal Class.
 */

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
}
//console.log(Animal);
class Dog extends Animal {}
class Cat extends Animal {}
let puppy = new Dog();
console.log(puppy);
let kitty = new Cat('Kitty', 20, 'black', 4);
console.log(kitty.getName);
console.log(kitty.color);

/* 
Override the method you create in Animal class
*/

class Horse extends Animal {
  constructor(name, age, color, legs, speed) {
    super(name, age, color, legs);
    this.speed = speed;
  }
  get getName() {
    return this.name + ' ' + this.color;
  }
}
let mustang = new Horse('Mustang', 4, 'Black', 4, '30km/h');
console.log(mustang.getName);

/**
 * Exercise Level 3
 */
/**
 * Let's try to develop a program which calculate measure of central
 * tendency of a sample(mean, median, mode) and
 *  measure of variability(range, variance, standard deviation).
 *  In addition to those measures find the min, max, count, percentile,
 * and frequency distribution of the sample.
 * You can create a class called Statistics and
 * create all the functions which do statistical calculations
 * as method for the Statistics class. Check the output below.
 */

class Statistics {
  constructor(sampleData) {
    this.sampleData = sampleData;
    this.sorted = this.sampleData.sort((a, b) => (a > b ? 1 : -1));
  }
  get count() {
    return this.sampleData.length;
  }
  get sum() {
    let su = 0;
    for (let n of this.sampleData) {
      su = su + n;
    }
    return su;
  }
  get min() {
    return this.sorted[0];
  }
  get max() {
    return this.sorted[this.sorted.length - 1];
  }
  get range() {
    let range = this.max - this.min;
    return range;
  }

  get mean() {
    let mean = this.sum / this.count;
    return mean;
  }
  get median() {
    let mid = 0;
    if (this.count % 2 === 0) {
      mid = this.count / 2;
    } else mid = Math.floor(this.count / 2);

    return this.sorted[mid];
  }
  get mode() {
    let freq = {};
    let compare = 0;
    let mostFrequent;
    for (let i = 0; i < this.sorted.length; i++) {
      // checks for each data in freq object
      //if key(each data) has undefined value  give value of 1
      // if already has value, increase it by 1 each time its found
      let eachData = this.sorted[i];
      if (freq[eachData] === undefined) {
        freq[eachData] = 1;
      } else {
        freq[eachData] = freq[eachData] + 1;
      }

      //comparing most repeated /highest frequncy value
      if (freq[eachData] > compare) {
        compare = freq[eachData];
        mostFrequent = this.sorted[i];
      }
    }
    return `(${mostFrequent} , ${freq[mostFrequent]})`;
  }
  get var() {
    let va = 0;
    va =
      this.sampleData.reduce((acc, initial) => {
        acc = acc + Math.pow(initial - this.mean, 2);
        return acc;
      }, 0) / this.count;

    return va.toFixed(1);
  }
  get std() {
    return Math.sqrt(this.var).toFixed(1);
  }
  get freqDist() {}
  get describe() {
    return (
      console.log('Count : ', this.count),
      console.log('Sum :', this.sum),
      console.log('Min :', this.min),
      console.log('Max :', this.max),
      console.log('Range :', this.range),
      console.log('Mean :', this.mean),
      console.log('Median :', this.median),
      console.log('Mode :', this.mode),
      console.log('Variance :', this.var),
      console.log('Standar Deviation :', this.std)
    );
  }
}
ages = [
  31,
  26,
  34,
  37,
  27,
  26,
  32,
  32,
  26,
  27,
  27,
  24,
  32,
  33,
  27,
  25,
  26,
  38,
  37,
  31,
  34,
  24,
  33,
  29,
  26,
];

let stat = new Statistics(ages);
//Commenting out each log, so that .. stat.describe results can be confirmed
//TODO: uncomment below section, if wants to check each stat methods
//TODO: Frequency Distribution is not done
/* console.log('Count : ', stat.count);
console.log('Sum :', stat.sum);
console.log('Min :', stat.min);
console.log('Max :', stat.max);
console.log('Range :', stat.range);
console.log('Mean :', stat.mean);
console.log('Median :', stat.median);
console.log('Mode :', stat.mode);

console.log('Variance :', stat.var);
console.log('Standar Deviation :', stat.std); */

/* Käyttäjätunnus: Salasana: harikrishnamahat;
XFStnSrYZ7jv; */

stat.describe;

/**
 * Create a class called PersonAccount. It has firstname, lastname, incomes,
 * expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
 * addExpense and accountBalance methods. Incomes is a set of incomes and its description
 * and expenses is also a set of expenses and its description.
 */

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = 0;
    this.expenses = 0;
  }
  get totalIncome() {
    return this.incomes;
  }
  get totalExpenses() {
    return this.expenses;
  }
  get accountInfo() {
    return `${this.firstname}  ${this.lastname}
Current Balance : ${this.accountBalance}`;
  }
  set addIncome(incomes) {
    this.incomes += incomes;
  }
  set addExpenses(expenses) {
    this.expenses += expenses;
  }
  get accountBalance() {
    return this.totalIncome - this.totalExpenses;
  }
}

let myAccount = new PersonAccount('Hari', 'Mahat');
console.log(myAccount.accountInfo);

myAccount.addIncome = 500;
myAccount.addExpenses = 200;
console.log(myAccount.incomes);
console.log(myAccount.accountInfo);
