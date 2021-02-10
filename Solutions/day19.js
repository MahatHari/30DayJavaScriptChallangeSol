/* 30 Days Of JavaScript: Closures  */

/* Exercises: Level 1 */
/* 
    Create a closure which has one inner function

*/
function outerFunc() {
  let count = 0;
  function innerFunc() {
    count++;
    return count;
  }
  return innerFunc;
}

const inFunc = outerFunc();
console.log(inFunc());
console.log(inFunc());

console.log(inFunc());

/** Exercises: Level 2 */

/**Create a closure which has three inner functions */

function outFunc() {
  let a = 0;

  function innerOne() {
    a++;
    return a;
  }
  function innerTwo() {
    a++;
    return a;
  }
  function innerThree() {
    a--;
    return a;
  }
  return {
    one: innerOne(),
    two: innerTwo(),
    three: innerThree(),
  };
}
const inf = outFunc();
console.log(inf);

/* innerTwo = () => {
  let d = ['html', 'css', 'react'];
  let c = [];
  d.forEach((ele) => {
    el = ele.toUpperCase();
    c.push(el);
  });
  return c;
}; */
