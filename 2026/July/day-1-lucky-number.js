// Given a string of a person's first and last name, calculate their lucky number using the following rules:
// First and last names are separated by a space
// Find the vowel and consonant count for each name
// Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
// Do the same for the two larger counts and the larger name
// Subtract the smaller value from the larger one to get their lucky number
// If the final value is zero (0), return 13.

function getVowConsCount(name) {
  const vowelArray = new Set(["a", "e", "i", "o", "u"]);
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i of name) {
    if (vowelArray.has(i)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  return [vowelCount, consonantCount];
}

function getLuckyNumber(name) {
  const [firstName, lastName] = String(name).toLocaleLowerCase().split(" ");
  let [firstVowelCount, firstConsCount] = getVowConsCount(firstName);
  let [lastVowelCount, lastConsCount] = getVowConsCount(lastName);
  let minProduct =
    Math.min(firstVowelCount, lastVowelCount) *
    Math.min(firstConsCount, lastConsCount) *
    Math.min(firstName.length, lastName.length);
  let maxProduct =
    Math.max(firstVowelCount, lastVowelCount) *
    Math.max(firstConsCount, lastConsCount) *
    Math.max(firstName.length, lastName.length);
  return maxProduct - minProduct === 0 ? 13 : maxProduct - minProduct;
}

console.log(getLuckyNumber("John Doe")); //return 21
console.log(getLuckyNumber("Olivia Lewis")); //return 52
console.log(getLuckyNumber("James Wilson")); //return 18
console.log(getLuckyNumber("Elizabeth Hernandez")); //return 81
console.log(getLuckyNumber("Mike Walker")); //return 32
console.log(getLuckyNumber("Chloe Perez")); //return 13
