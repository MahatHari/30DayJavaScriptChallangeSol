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
