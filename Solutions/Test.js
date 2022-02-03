function test(num) {
  console.log(num);
  if (num !== undefined) {
    return Number.parseInt(num, 10);
  }
  return 0;
}

console.log(test());
console.log(test(200));

function grade(score) {
  if (!(typeof score === 'number')) {
    return 'Give number';
  } else if (score < 50) {
    return 'F';
  } else if (score < 60) {
    return 'E';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(grade(49));
console.log(grade(59));
console.log(grade(69));
console.log(grade(79));
console.log(grade(89));
console.log(grade(91));
console.log(grade('a'));
