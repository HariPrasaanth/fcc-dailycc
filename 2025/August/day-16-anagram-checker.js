// Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
// Ignore casing and white space.

function stringFormatter(str) {
  return String(str).toLocaleLowerCase().split("").sort().join("").trim();
}

function areAnagrams(str1, str2) {
  return stringFormatter(str1) === stringFormatter(str2);
}

console.log(areAnagrams("listen", "silent")); //return true
console.log(areAnagrams("School master", "The classroom")); //return true
console.log(areAnagrams("A gentleman", "Elegant man")); //return true
console.log(areAnagrams("Hello", "World")); //return false
console.log(areAnagrams("apple", "banana")); //return false
console.log(areAnagrams("cat", "dog")); //return false
