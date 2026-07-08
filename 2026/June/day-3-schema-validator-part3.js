// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

/* 
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}
*/

// The pipe (|) symbol means "or". role must be one of the listed Roles values.
// Extra keys are allowed

function schemaValidator(obj, property, type) {
  return obj.hasOwnProperty(property) && typeof obj[property] === type;
}

function isValidSchema(obj) {
  const rolesArray = new Set([
    "user",
    "creator",
    "moderator",
    "staff",
    "admin",
  ]);
  return (
    schemaValidator(obj, "username", "string") &&
    schemaValidator(obj, "posts", "number") &&
    schemaValidator(obj, "verified", "boolean") &&
    obj.hasOwnProperty("role") &&
    rolesArray.has(obj.role)
  );
}

console.log(
  isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }),
); //return true;
console.log(
  isValidSchema({
    username: "sara",
    posts: 45,
    verified: false,
    role: "creator",
    followers: 70,
  }),
); //return true.
console.log(
  isValidSchema({
    username: "penelope",
    posts: 20,
    verified: true,
    role: "admin",
  }),
); //return true.
console.log(
  isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }),
); //return true.
console.log(
  isValidSchema({
    username: "george",
    posts: 15,
    verified: true,
    role: "moderator",
  }),
); //return true.
console.log(
  isValidSchema({
    username: "david",
    posts: 0,
    verified: false,
    role: "guest",
  }),
); //return false.
console.log(isValidSchema({ username: "wendy", posts: 10, verified: true })); //return false.
console.log(
  isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }),
); //return false.
console.log(
  isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }),
); //return false.
console.log(
  isValidSchema({
    username: "penny",
    posts: "10",
    verified: true,
    role: "staff",
  }),
); //return false.
console.log(
  isValidSchema({
    username: "john",
    posts: "1",
    verified: "true",
    role: "admin",
  }),
); //return false.
