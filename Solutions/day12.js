//TODO:
/**
 * 30 Days Of JavaScript: Regular Expressions
 */

/* Exercise: Level 1  */
/**
 * Calculate the total annual income of the person from the following text.
 * ‘He earns 4000 euro from salary per month, 10000 euro annual bonus,
 * 5500 euro online courses per month.’
 */
let text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 
  5500 euro online courses per month.`;
let income = text.match(/\d+/g);
let total = 0;
for (num of income) {
  total += parseInt(num);
}
console.log('Total Income = ', total);

/**
 * The position of some particles on the horizontal x-axis -12, -4, -3 and -1
 * in the negative direction, 0 at origin, 4 and 8 in the positive direction.
 *  Extract these numbers and find the distance between the two furthest particles.
 */

let text2 = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1
 in the negative direction, 0 at origin, 4 and 8 in the positive direction.
 Extract these numbers and find the distance between the two furthest particles`;
let regex = /\-?\d+/g;
let points = text2.match(regex);
console.log(points);
let sorted = [];
for (num of points) {
  sorted.push(parseInt(num));
}

let sorted2 = sorted.sort((a, b) => (a > b ? 1 : -1));
console.log(sorted2);
let distance = sorted2[sorted2.length - 1] - sorted2[0];
console.log(distance);

/**
 * Write a pattern which identify if a string is a valid JavaScript variable
 */
let validRReg = /^[a-zA-z_$][0-9A-Za-z_$]*/;
function is_valid_variable(va) {
  console.log(validRReg.test(va));
}

is_valid_variable('first_name');
is_valid_variable('first-name');
is_valid_variable('1first_name');
is_valid_variable('firstname');

/**
 * Exercise: Level 2
 */

/**
 * Write a function called tenMostFrequentWords which get the ten most frequent
 * word from a string?
 */

function tenMostFrequentWords(paragraph, num) {
  let paraArray = paragraph.match(/\w+/g);
  let setArray = new Set(paraArray);
  let wordCount = [];
  for (word of setArray) {
    let filtered = paraArray.filter((wo) => word === wo);
    wordCount.push({ word: word, count: filtered.length });
  }
  let sortedWordCount = wordCount.sort((a, b) => (a.count > b.count ? -1 : 1));
  return sortedWordCount.slice(0, num);
}
let paragraph = `I love teaching. If you do not love teaching what else can you love. 
I love Python if you do not love something which can give you all the capabilities to
develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph, 10));

/**
 * Exercises: Level 3
 */

/**
 * Writ a function which cleans text. Clean the following text.
 *  After cleaning, count three most frequent words in the string.
 */
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
  let clean = sentence.replace(/%|@|&|\$|#|;/g, '');
  let most3 = tenMostFrequentWords(clean, 5);
  console.log(clean);
  console.log(most3);
}
cleanText(sentence);
