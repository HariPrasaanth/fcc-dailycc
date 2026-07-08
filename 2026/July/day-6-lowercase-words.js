// Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.

function getLowercaseWords(str) {
  let strArray = String(str).split(" ");
  return strArray.filter((st) => !/[A-Z]/.test(st)).join(" ");
}

console.log(getLowercaseWords("hello GOOD world")); //return "hello world"
console.log(getLowercaseWords("these are all lowercase")); //return "these are all lowercase"
console.log(getLowercaseWords("less is NoT more")); //return "less is more"
console.log(getLowercaseWords("DonT eat pizza every OTHER day")); //return "eat pizza every day"
console.log(
  getLowercaseWords(
    "the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog",
  ),
); // return "the quick brown fox jumped over the lazy dog"
