// Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

// In the given string, words can be separated by one or more spaces.
// The returned string should only have one space between words.

function reverseSentence(sentence) {
  let resultArray = [];
  const sentenceArray = String(sentence).split(" ");
  for(let i=sentenceArray.length-1;i>=0;i--){
    if(sentenceArray[i]!==''){
      resultArray.push(sentenceArray[i])
    }
  }
  return resultArray.join(" ");
}

console.log(reverseSentence("world hello")); //return "hello world"
console.log(reverseSentence("push commit git")); //return "git commit push"
console.log(reverseSentence("npm  install  sudo")); //return sudo install npm
console.log(reverseSentence("import    default   function  export")); //return export function default import
