// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

/* 
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean
}

*/

// The pipe (|) symbol means "or". role must be one of the listed Roles values.
// The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
// Extra keys are allowed

function schemaValidator(obj, property, type, isOptional = true) {
  if (isOptional) {
    return obj.hasOwnProperty(property) && typeof obj[property] === type;
  }
  return !obj.hasOwnProperty(property) || typeof obj[property] === type;
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
    rolesArray.has(obj.role) &&
    schemaValidator(obj, "supporter", "boolean", false)
  );
}

console.log(
  isValidSchema({
    username: "vivian",
    posts: 1,
    verified: false,
    role: "user",
    supporter: true,
  }),
); //return true
console.log(
  isValidSchema({
    username: "rudolph",
    posts: 15,
    verified: true,
    role: "creator",
  }),
); //return true
console.log(
  isValidSchema({
    username: "hernandez",
    posts: 35,
    verified: true,
    role: "moderator",
    supporter: false,
    followers: 55,
  }),
); //return true
console.log(
  isValidSchema({
    username: "julia",
    posts: 50,
    verified: true,
    role: "admin",
    supporter: "true",
  }),
); //return false
console.log(
  isValidSchema({
    username: "bernard",
    posts: 0,
    verified: true,
    role: "friend",
    supporter: true,
  }),
); //return false
console.log(
  isValidSchema({
    username: "felix",
    posts: 40,
    verified: "yes",
    role: "staff",
    supporter: false,
  }),
); //return false
console.log(
  isValidSchema({
    username: "jimmy",
    posts: true,
    verified: false,
    role: "creator",
    supporter: true,
  }),
); //return false
console.log(
  isValidSchema({
    username: true,
    posts: 30,
    verified: true,
    role: "moderator",
    supporter: false,
  }),
); //return false
