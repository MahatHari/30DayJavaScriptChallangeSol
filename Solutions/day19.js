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

/** Exercise Level 3 */
/**
 * Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
 *  It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance
 * inner functions. Incomes is a set of incomes and its description and expenses is also a
 * set of expenses and its description.
 */

function personAccount(fname, lname, income, expense, inc = 500, exp = 200) {
  const firstname = fname;
  const lastname = lname;
  let incomes = income;
  let expenses = expense;

  totalIncome = () => {
    return incomes;
  };
  totalExpenses = () => {
    return expenses;
  };

  addIncome = (inc) => {
    incomes += inc;
  };
  addExpenses = (exp) => {
    expenses += exp;
  };
  accountBalance = () => {
    let balance = incomes - expenses;
    return balance;
  };
  accountInfo = () => {
    return `${firstname} ${lastname}\nAccount Balance= ${accountBalance()}`;
  };
  return {
    totalIncome: totalIncome(),
    totalExpenses: totalExpenses(),
    addIncome: addIncome(inc),
    addExpenses: addExpenses(exp),
    accountBalance: accountBalance(),
    accountInfo: accountInfo(),
  };
}

const PA = personAccount('Hari', 'Mahat', 2000, 500);
console.log(PA.accountInfo);
//console.log(personAccount((exp = 200)));
console.log(PA.totalIncome);
console.log(PA.totalExpenses);
