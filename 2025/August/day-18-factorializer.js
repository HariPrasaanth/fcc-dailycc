// Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.
// The factorial of zero is 1.

function factorial(n) {
  function fact(n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
  }
  return fact(n);
}

console.log(factorial(0)); //return 1
console.log(factorial(5)); //return 120
console.log(factorial(20)); //return 2432902008176640000
