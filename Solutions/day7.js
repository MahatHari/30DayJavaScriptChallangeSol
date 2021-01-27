/* Exercise Level 1 */
/**
 * Declare a function fullName and it print out your full name.
 * Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
 * 

*/

function fullName(firstName, lastName) {
  return firstName.toLocaleUpperCase() + ' ' + lastName;
}
console.log(fullName('hari', 'mahat'));

/* Sum of two given numbers */
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(7, 45));

/* Area of a reactable with given length and breadth */
function areaOfRectangle(l, b) {
  return l * b;
}
console.log(areaOfRectangle(5, 6));

function permiterofRectangle(l, b) {
  return 2 * (l + b);
}
console.log(permiterofRectangle(5, 6));

function volumeOfRectPrism(l, b, h) {
  return l * b * h;
}
console.log(volumeOfRectPrism(2, 3, 4));

function areaOfCircle(r) {
  const Pi = Math.PI;
  return Pi * r * r;
}
console.log(areaOfCircle(2));

function circumferenceOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log(circumferenceOfCircle(3));

function density(m, v) {
  return m / v;
}
console.log(density(6, 2));

function speed(d, t) {
  return d / t;
}
console.log(speed(5, 2));

function weight(m, g = 9.8) {
  return m * g;
}
console.log(weight(35));

function oCtooF(temp) {
  return temp * (9 / 5) + 32;
}
console.log(oCtooF(37));

function bmi(mass, height) {
  const bmi = mass / (height * height);
  if (bmi < 18.5) {
    return 'Underweight';
  }
  if (bmi >= 18.5 && bmi < 25) {
    return 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight';
  } else return 'Obese';
}
console.log(bmi(68, 1.65));

function checkSeason(month) {
  let autumn = ['september', 'october', 'november'];
  let winter = ['december', 'january', 'february'];
  let spring = ['march', 'april', 'may'];
  let summer = ['june', 'july', 'august'];
  if (autumn.includes(month)) return 'Autumn';
  if (winter.includes(month)) return 'Winter';
  if (spring.includes(month)) return 'Spring';
  if (summer.includes(month)) return 'Summer';
  else {
    return 'Month name is incorrect';
  }
}

console.log(checkSeason('ju'));

/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method. */

function findMax(...args) {
  let a = args;
  let max = 0;
  for (b of a) {
    if (b > max) max = b;
  }
  console.log(`Largest number among given values: ${max}`);
}
findMax(2, 3, 4, 5, 2, 4, 1, 2, 10, 2, 11);

/***************  Level 2 *******************/

/* Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

 */

// function solveLinEquation(a1, b1, c1, a2,b2, c2) {
//   let eq1 = a1x + b1y + c1
//   let eq2 = a2x + b2y + c2;
//   y = a1 / b1 * x + c1
//   y= a2/b2 *x + c2

//  }
/* Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation. */

function solveQuadEquation(a, b, c) {
  if (arguments.length === 0) return 'give values of a and b';
  else {
    let v1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let v2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

    if (v1 === NaN) v1 = 0;
    if (v2 === NaN) v2 = 0;
    return { v1, v2 };
  }
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));

/* Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

 */

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let array = [2, 3, 4, 5, 6, 7, 8];
printArray(array);

/* Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

 */

function showDateTime() {
  let dt = new Date();
  let month = dt.getMonth() + 1;
  let day = dt.getDate();
  let year = dt.getFullYear();
  let hour = dt.getHours();
  hour = hour < 9 ? 0 + `${hour}` : hour;
  month = month < 9 ? 0 + `${month}` : month;
  let minutes = dt.getMinutes();

  console.log(`${day}/${month}/${year}  ${hour}:${minutes}`);
}

showDateTime();

/* Declare a function name swapValues. This function swaps value of x to y.

 */

function swapValues(x, y) {
  let a = x;
  let b = y;
  return `x=${b}, y=${a}`;
}

console.log(swapValues(3, 4));
/* Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

 */
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length; i--; i === 0) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

let inputArray = [234, 34, 5, 2, 35, 1, 343, 34];
console.log(reverseArray(inputArray));

/* Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray. */

function capitalizeArray(arr) {
  let capArray = [];
  for (let i = 0; i < arr.length; i < i++) {
    capArray.push(arr[i].toLocaleUpperCase());
  }

  return capArray;
}

let testArray = ['hari', 'krishna', 'mahat'];
console.log(capitalizeArray(testArray));

/* 
Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
*/
const ItemArray = ['a', 'b', 'c'];
function addItem(item) {
  ItemArray.push(item);
  return ItemArray;
}

addItem('f');
console.log(ItemArray);

function removeItem(index) {
  ItemArray.splice(index, 1);
  return ItemArray;
}
removeItem(1);
console.log(ItemArray);

/* Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

 */
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(10));

/* 
Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
*/
function sumOfOdds(num) {
  let sumOdds = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) sumOdds += i;
  }
  return sumOdds;
}
console.log(sumOfOdds(10));

/* Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

 */
function sumOfEven(num) {
  let sumEven = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) sumEven += i;
  }
  return sumEven;
}
console.log(sumOfEven(10));

/* 
Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
*/

function evensAndOdds(num) {
  let evenCount = 0;
  let OddCount = 0;
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      i % 2 === 0 ? (evenCount += 1) : (OddCount += 1);
    }
  }
  console.log(
    `The number of odds are ${OddCount} \nThe number of even counts are ${evenCount}`
  );
}

evensAndOdds(99);

/* Write a function which takes any number of arguments and return the sum of the arguments

 */

function sumOfArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* 
Writ a function which generates a randomUserIp.
 */

function randomUserIp() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  let d = Math.floor(Math.random() * 255);
  console.log(`IP Address: ${a}.${b}.${c}.${d}`);
}

randomUserIp();

/* 
Write a function which generates a randomMacAddress
 */

function randomMacAddress() {
  let res = [];
  let hexNums = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  for (let i = 0; i <= 6; i++) {
    let x =
      hexNums[Math.floor(Math.random() * 16)] +
      hexNums[Math.floor(Math.random() * 16)];
    res.push(x);
  }
  console.log(`Mac address: ${res.join('-')}`);
}
randomMacAddress();

/**
 * Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
 */

function randomHexaNumberGenerator() {
  let res = [];
  let hexNums = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
    let x = hexNums[Math.floor(Math.random() * 16)];
    res.push(x);
  }
  console.log(`Random Hex: #${res.join('')}`);
}
randomHexaNumberGenerator();

/**
 * Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
 */
function userIdGenerator() {
  let id = '';
  let charList =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 8; i++) {
    id += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return id;
}

console.log(userIdGenerator());

/**
 * Exercises: Level 3
 */

/**
 *
 * Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt().
 *  One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
 */

function userIdGeneratedByUser() {
  let num = parseInt(prompt('Enter numer of characeter'));
  let numId = parseInt(prompt('Enter number of Id'));

  let charList =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let j = 0; j < numId; j++) {
    let id = '';
    for (let i = 0; i < num; i++) {
      id += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    console.log(id);
  }
}

userIdGeneratedByUser();

/* Write a function name rgbColorGenerator and it generates rgb colors.

 */
function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return console.log(`rgb(${r}, ${g}, ${b})`);
}

rgbColorGenerator();

/* Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

 */
function arrayOfHexaColors() {
  let output = [];
  let arglength = arguments.length;
  if (arglength > 0) {
    let input = arguments;
    for (let i = 0; i < arglength; i++) {
      output.push(arguments[i].toString(16));
    }
  }
  return output;
}
console.log(arrayOfHexaColors(43, 255, 153));

/* 
Write a function arrayOfRgbColors which return any number of RGB colors in an array.

 */
function arrayOfRgbColors() {
  let output = [];
  let arglength = arguments.length;
  if (arglength > 0) {
    let input = arguments;
    for (let i = 0; i < arglength; i++) {
      output.push(arguments[i]);
    }
  }
  return output;
}
console.log(arrayOfRgbColors(43, 255, 153));

/**
 * Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
 */
function convertHexaToRgb() {
  let output = [];
  let arglength = arguments.length;
  if (arglength > 0) {
    let input = arguments;
    for (let i = 0; i < arglength; i++) {
      output.push(parseInt(arguments[i], 16));
    }
  }
  return output;
}
console.log(convertHexaToRgb('ff', 'cd', '2f'));

/**
 * Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
 */
function convertRgbToHexa() {
  let output = [];
  let arglength = arguments.length;
  if (arglength > 0) {
    let input = arguments;
    for (let i = 0; i < arglength; i++) {
      output.push(arguments[i].toString(16));
    }
  }
  return output;
}
console.log(convertRgbToHexa(255, 112, 43));

/**
 *  Write a function generateColors which can generate any number of hexa or rgb colors.
 */

function generateColors(type, num) {
  let output = [];
  if (type === 'hexa') {
    for (let i = 0; i < num; i++) {
      let a;
      let r = Math.floor(Math.random() * 255).toString(16);
      let g = Math.floor(Math.random() * 255).toString(16);
      let b = Math.floor(Math.random() * 255).toString(16);
      a = `#${r}${g}${b}`;
      output.push(a);
    }
  } else if (type === 'rgb') {
    for (let i = 0; i < num; i++) {
      let a;
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      a = `rgb(${r},${g},${b})`;
      output.push(a);
    }
  } else {
    console.log('Provide type hexa/rgb and number');
  }
  return output;
}

//generateColors();
console.log(generateColors('rgb', 2));
console.log(generateColors('hexa', 3));

/* Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

 */
console.log('Shuffle Array');
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffleArray([2, 3, 4, 5, 6]));

/**
 * Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
 */

function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorial(5));

/**
 * Call your function isEmpty, it takes a parameter and it checks if it is empty or not
 */

function isEmpty(param) {
  if (!param || param.length === 0) {
    console.log('isEmpty');
  } else {
    console.log('isNotEmpty');
  }
}

isEmpty('');

/**
 * Call your function sum, it takes any number of arguments and it returns the sum.
 */

function sum() {
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}

console.log(sum(1, 2, 3, 4, 5));

/**
 * Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types.
 *  If not give return reasonable feedback.
 */

function sumOfArrayItems(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return 'Array contains other character than Number';
    }
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArrayItems([2, 3, 4, 's']));

/**
 * Write a function called average, it takes an array parameter and returns the average of the items.
 * Check if all the array items are number types. If not give return reasonable feedback.
 */

function Average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return 'Array contains Not a Number';
    }
    sum += arr[i];
  }
  return sum / 2;
}
console.log(Average([2, 3, 4, 's']));

/**
 * Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.
 *  If the array length is less than five it return 'item not found'.
 */

function modifyArray(arr) {
  if (arr.length >= 5) {
    arr[4] = arr[4].toLocaleUpperCase();
  }
  return arr;
}

console.log(modifyArray(['har', 'kris', 'mah', 'hat', 'rish', 'ina', 'ana']));

/**
 *  Write a function called isPrime, which checks if a number is prime number.
 */

function isPrime(num) {
  for (let i = 2; (s = Math.sqrt(num)), i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(7));

/**
 * Write a functions which checks if all items are unique in the array.
 */

function uniqueArray(arr) {
  let result = false;
  result = arr.some((element, index) => {
    return arr.indexOf(element) !== index;
  });
  if (result) {
    return 'Array contains duplicate value';
  } else {
    return 'Array is Unique';
  }
}

console.log(uniqueArray([1, 2, 5, 3, 1, 4]));

/**
 * Write a function which checks if all the items of the array are the same data type.
 */
function dataTypeChecker(arr) {
  let dataType = typeof arr[0];
  let same = true;
  for (let i = 0; i < arr.length; i++) {
    if (dataType !== typeof arr[i]) {
      return (same = false);
    }
  }
  return same;
}

console.log(`Same Data type: ${dataTypeChecker([1, 2, 3, 4])}`);

/**
 * JavaScript variable name does not support special characters or symbols except $ or _.
 * Write a function isValidVariable which check if a variable is valid or invalid variable.
 */
//TODO: Its not working properly:
function isValidVariable(name) {
  let regex = /[\w][^\s]/g;
  console.log(name.match(regex));
  if (name.match(regex)) {
    return 'ValidVaribale';
  } else {
    return 'Invalid Varibale';
  }
}

console.log(isValidVariable('_Hari2'));
console.log(isValidVariable('$Hari2'));
console.log(isValidVariable('_Hari  2'));
console.log(isValidVariable('Hari_2'));

/* 
Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
*/

function sevenRandom() {
  let uniqueRandom = [];
  while (uniqueRandom.length < 7) {
    let a = Math.floor(Math.random() * 10);
    if (!uniqueRandom.includes(a)) {
      uniqueRandom.push(a);
    }
  }
  return uniqueRandom;
}

console.log(sevenRandom());

/**
 * Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
 */

function reverseCountries(country) {
  let copyCountry = [...country];
  return copyCountry.reverse();
}

console.log(
  reverseCountries(['Nepal', 'England', 'Portland', 'China', 'Switzerland'])
);
