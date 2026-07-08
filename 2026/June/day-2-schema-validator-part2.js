// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

/*
{
  username: string,
  posts: number,
  verified: boolean
}
*/

// Extra keys are allowed

function schemaValidator(obj, property, type) {
  return obj.hasOwnProperty(property) && typeof obj[property] === type;
}

function isValidSchema(obj) {
  return (
    schemaValidator(obj, "username", "string") &&
    schemaValidator(obj, "posts", "number") &&
    schemaValidator(obj, "verified", "boolean")
  );
}

console.log(isValidSchema({ username: "alice", posts: 10, verified: false })); //return true
console.log(
  isValidSchema({
    username: "carol",
    posts: 15,
    verified: true,
    followers: 25,
  }),
); //return true
console.log(isValidSchema({ username: "frank", posts: "21", verified: true })); //return false
console.log(isValidSchema({ username: "sam", posts: 17, verified: "false" })); //return false
console.log(isValidSchema({ username: "bill", verified: true })); //return false
console.log(isValidSchema({ username: "fred", verified: true })); //return false
console.log(isValidSchema({ username: 5, posts: 10, verified: true })); //return false
