const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = arr => arr.reduce((sum, current) => sum + current, 0);

const multiply = arr => arr.reduce((product, factor) => product * factor, 1);

const power = (a, b) => a ** b;

const factorial = num => {
  if (num === 0)
    return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
