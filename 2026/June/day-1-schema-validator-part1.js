// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
/* {
  username: string
} */
// Extra keys are allowed

function schemaValidator(obj, property, type) {
  return obj.hasOwnProperty(property) && typeof obj[property] === type;
}

function isValidSchema(obj) {
  return schemaValidator(obj, "username", "string");
}

console.log(isValidSchema({ username: "bob" })); //return true
console.log(isValidSchema({ username: "jen", posts: 30 })); //return true
console.log(isValidSchema({ username: "" })); //return true
console.log(isValidSchema({ username: 7 })); //return false
console.log(isValidSchema({ posts: 25 })); //return false
