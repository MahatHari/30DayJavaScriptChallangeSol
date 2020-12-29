let text =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let textArray = text.split(' ');
console.log(textArray);
let sum = 0;
let reg = /d+/;
textArray.forEach((element) => {
  if (parseInt(element)) sum = sum + parseInt(element);
});
console.log(text.match(/\d+/g));

console.log(sum);

let textA = text.match(/\d+/g); // returns array of matched strings
let totalSalary =
  parseInt(textA[0]) * 12 + parseInt(textA[1]) + parseInt(textA[2]); //change each string to  number first then do the calculation
console.log(totalSalary); //console log total salary
