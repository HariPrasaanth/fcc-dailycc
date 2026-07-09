// Given a positive integer, determine whether it is a narcissistic number.

// A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
// For example, 153 has 3 digits, and 13 + 53 + 33 = 153, so it is narcissistic.

function calculatePower(num, pow) {
  return Math.pow(num, pow);
}

function isNarcissistic(n) {
  const stringNum = String(n).split("");
  const digitLength = stringNum.length;
  const sum = stringNum
    .map((str) => calculatePower(Number(str), digitLength))
    .reduce((accu, sum) => accu + sum, 0);
  return sum === n;
}

console.log(isNarcissistic(153)); //return true
console.log(isNarcissistic(154)); //return false
console.log(isNarcissistic(371)); //return true
console.log(isNarcissistic(512)); //return false
console.log(isNarcissistic(9)); //return true
console.log(isNarcissistic(11)); //return false
console.log(isNarcissistic(9474)); //return true
console.log(isNarcissistic(6549)); //return false
