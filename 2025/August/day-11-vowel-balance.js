// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

function vowelCounter(str) {
  const vowelArray = new Set(["a", "e", "i", "o", "u"]);
  let sum = 0;
  for (let s of str) {
    if (vowelArray.has(s)) sum++;
  }
  return sum;
}

function isBalanced(s) {
  let trimmedString = String(s).trim().toLocaleLowerCase();
  if (trimmedString.length === 0) return true;
  let divisor = Math.trunc(trimmedString.length / 2);
  let firstHalf = trimmedString.slice(0, divisor);
  let secondHalf = trimmedString.slice(-divisor);
  return vowelCounter(firstHalf) === vowelCounter(secondHalf);
}

console.log(isBalanced("racecar")); // return true
console.log(isBalanced("Lorem Ipsum")); // return true
console.log(isBalanced("Kitty Ipsum")); // return false
console.log(isBalanced("string")); // return false
console.log(isBalanced(" ")); // return true
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz")); // return false
console.log(isBalanced("123A#b!E&*456-o.U")); // return true
