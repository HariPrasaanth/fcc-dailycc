// Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.
// Kaprekar's routine works as follows:

// Arrange the digits in descending order to form the largest number
// Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
// Subtract the smaller from the larger
// Repeat with the new number

function kaprekar(n) {
  let count = 0;
  function kapreRecur(n) {
    if (Number(n) === 6174) {
      return;
    }
    let ascendingNum = Number(Number(n).toString().split("").sort().join(""));
    let descendingNum = Number(
      Number(n).toString().split("").sort().reverse().join(""),
    );
    count += 1;
    return kapreRecur(descendingNum - ascendingNum);
  }
  kapreRecur(n);
  return count;
}

console.log(kaprekar(1234)); //return 3
console.log(kaprekar(2025)); //return 6
console.log(kaprekar(7173)); //return 4
console.log(kaprekar(3164)); //return 7
console.log(kaprekar(8082)); //return 2
