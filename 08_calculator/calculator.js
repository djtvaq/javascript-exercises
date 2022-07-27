const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arraySum) {
  let initialValue = 0;
  let totalSum = arraySum.reduce(
    (previousValue, nextValue) => previousValue + nextValue, initialValue
  )
  return totalSum
};

const multiply = function (arrayMultiply) {
  let totalMultiply = arrayMultiply.reduce(
    (previousValue, initialValue) => previousValue * initialValue
  )
  return totalMultiply
};

const power = function (a,b) {

  return Math.pow(a,b)
};

const factorial = function (a) {

  let numberRange = []
  for (let i = 1; i <= a; i++) {
    numberRange.push(i).ex
  }
  console.log(numberRange)
  let initialValue = 1
  let factorialTotal = numberRange.reduce(
    (previousValue, nextValue) => previousValue * nextValue, initialValue
  )
  return factorialTotal

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
