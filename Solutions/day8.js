/**
 * ****************** Exercise Level 1 *************
 */
/**
 * Create an empty object called dog
 * Print the the dog object on the console
 * Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
 * Get name, legs, color, age and bark value from the dog object
 * Set new properties the dog object: breed, getDogInfo
 */
const dog = {};
console.log(dog);
dog.name = 'Seru';
dog.color = 'white';
dog.age = '12';
dog.bark = 'woof woof';
console.log(dog);

console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);
dog.breed = 'German sheepherd';
dog.getInfo = function () {
  console.log(
    `Name of Dog is ${this.name}, ${this.color}, ${this.age}, ${this.breed}`
  );
};

//console.log(dog.getInfo());

dog.getInfo();

/**
 * ****************** Exercise Level 2 *************
 */

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

/* 
Find the person who has many skills in the users object.
*/
console.log(Object.keys(users));

// Printing Person name  who has more than 5 skills and their skills as array
Object.keys(users).forEach((element) => {
  if (users[element].skills.length > 5) {
    console.log('users with more than 5 skills');
    console.log(element, users[element].skills);
  }
});

/* 
Find people who are MERN stack developer from the users object
*/
Object.keys(users).forEach((user) => {
  let tempSkills = users[user].skills;
  if (
    tempSkills.includes('MongoDB') &&
    tempSkills.includes('Express') &&
    tempSkills.includes('React') &&
    tempSkills.includes('Node')
  ) {
    console.log(`MERN Stack developer  ${user},  Skill :=> ${tempSkills}`);
  }
});

/**
 * Get all keys or properties of users object
 * Get all the values of users object
 */

console.log(Object.keys(users)); // gives an array of users object keys
console.log(Object.values(users)); // gives an array of users objects values

/*
 * ****************** Exercise Level 3 *************
 */

/**
 * Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome,
 * totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
 * Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
 */

const personAccount = {
  firstName: 'Hari',
  lastName: 'Krishna',
  incomes: 5000,
  expenses: 2000,
  totatlIncome: function () {
    return this.incomes;
  },
  totalExpenses: function () {
    return this.incomes;
  },
  accountInfo: function () {
    return this.firstName + this.lastName + 'Balance: ' + this.accountBalance();
  },
  addIncome: function (inc) {
    this.incomes = this.incomes + inc;
    console.log('Income added');
  },
  addExpense: function (exp) {
    return (this.expenses = this.expenses + exp);
  },
  accountBalance: function () {
    return this.incomes - this.expenses;
  },
};

console.log(personAccount.accountInfo());
personAccount.addIncome(3000);
console.log(personAccount.accountInfo());
console.log(personAccount.totatlIncome());

console.log(personAccount.addExpense(100));
console.log(personAccount.accountInfo());

/**
 * **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
 */
const usersM = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

/**
 *  Imagine you are getting the above users collection from a MongoDB database.
 * a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
 * b. Create a function called signIn which allows user to sign in to the application
 */

usersM.signUp = function (name, email, password) {
  let newUser = {
    // _id: name.charAt(0) + Math.floor(Math.random() * 10) + password.charAt(2),
    username: name,
    email: email,
    password: password,
    createdAt: new Date().toLocaleDateString(),
    isLoggedIn: Boolean(Math.floor(Math.random())),
  };
  let add = true;
  usersM.forEach((element) => {
    if (element.username === name && element.email === email) {
      add = false;
    }
  });
  add ? usersM.push(newUser) : console.log(`User ${name} already exists `);
  return usersM;
};

console.log(usersM.signUp('Hari', 'example@example.com', '12334'));
console.log(usersM.signUp('Hari', 'example@example.com', '12334'));

usersM.signUp('Hari', 'example@example.com', '12334');

usersM.signIn = function (eml, pass) {
  let exist = false;
  usersM.forEach((element, id) => {
    if (element.email === eml) {
      // checks if email exist
      exist = true;
      if (element.password === pass) {
        // checks if password matches
        usersM[id] = { ...usersM[id], isLoggedIn: true }; // update the logIn status to LoggedIn true
        console.log(usersM); // console log the update UserM
      } else {
        console.log('wrong password'); // if password does not match
      }
    }
  });
  if (!exist) console.log('User does not exist'); // if user does not exist
};

usersM.signIn('example@example.com', '12334');

/**
 * The products array has three elements and each of them has six properties.
 *  a. Create a function called rateProduct which rates the product
 * b. Create a function called averageRating which calculate the average rating of a product
 */

products.rateProduct = function (userId, productId) {
  let index = products.findIndex((item) => item._id === productId);
  let newRating = { userId: userId, rate: Math.floor(Math.random() * 5) }; /// adding new rating with Random rating
  products[index].ratings.push(newRating);
};

products.rateProduct('abcde', 'aegfal');
products.rateProduct('abcdef', 'aegfal');
products.rateProduct('abcdeg', 'aegfal');
products.rateProduct('abcdegf', 'aegfal');

products.averageRating = function () {
  products.forEach((product) => {
    let sum = 0;
    let avg = 0;
    product.ratings.forEach((rating) => {
      sum += rating.rate;
      avg = sum / 2;
    });
    console.log(`Average Rating for ${product._id} avg: ${avg}`);
  });
};
products.averageRating();

/**
 * Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 */

// Removes likes if already user exist in like and add userId if user does not exist
products.likeProduct = function (userId, productId) {
  products.forEach((product) => {
    let like = product.likes;
    if (product._id === productId) {
      if (like.includes(userId)) {
        let ind = like.indexOf(userId);
        like.splice(ind, 1); // removing user that is already in like, (unliked)
      } else {
        like.push(userId); // adding new likes if does not already exists
      }
    }
  });
};
products.likeProduct('avs', 'eedfcf');
products.likeProduct('avst', 'eedfcf');

console.log('After adding');
console.log(products[0]);

console.log('**********After Removing**********');
products.likeProduct('avs', 'eedfcf');
console.log(products[0]);
