// Given a sentence string, return the number of words that are in the sentence.
// Words are any sequence of non-space characters and are separated by a single space.

function countWords(sentence) {
  return String(sentence).split(" ").length;
}

console.log(countWords("Hello world")); //return 2.
console.log(countWords("The quick brown fox jumps over the lazy dog.")); //return 9.
console.log(countWords("I like coding challenges!")); //return 4.
console.log(countWords("Complete the challenge in JavaScript and Python.")); //return 7.
console.log(countWords("The missing semi-colon crashed the entire internet.")); //return 7.
