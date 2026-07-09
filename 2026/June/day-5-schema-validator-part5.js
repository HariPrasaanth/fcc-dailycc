// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

/* 
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

*/

// The pipe (|) symbol means "or". role must be one of the listed Roles values.
// The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
// The brackets [] after string means that badges should be an array of strings (or empty).
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
  const isUsernameVal = schemaValidator(obj, "username", "string");
  const isPostsVal = schemaValidator(obj, "posts", "number");
  const isVerifiedVal = schemaValidator(obj, "verified", "boolean");
  const isRoleVal = obj.hasOwnProperty("role") && rolesArray.has(obj.role);
  const isSupporterVal = schemaValidator(obj, "supporter", "boolean", false);
  const isBadgesVal =
    obj.hasOwnProperty("badges") &&
    (obj.badges.length === 0 ||
      obj.badges.every((badge) => typeof badge === "string"));
  return (
    isUsernameVal &&
    isPostsVal &&
    isVerifiedVal &&
    isRoleVal &&
    isSupporterVal &&
    isBadgesVal
  );
}

console.log(
  isValidSchema({
    username: "gill",
    posts: 12,
    verified: false,
    role: "creator",
    supporter: false,
    badges: ["early-adopter", "popular"],
  }),
); //return true
console.log(
  isValidSchema({
    username: "tonya",
    posts: 299,
    verified: true,
    role: "moderator",
    supporter: true,
    badges: ["streak-master", "veteran"],
    followers: 1233,
  }),
); //return true
console.log(
  isValidSchema({
    username: "zara",
    posts: 0,
    verified: false,
    role: "user",
    supporter: false,
    badges: [],
  }),
); //return true
console.log(
  isValidSchema({
    username: "nicole",
    posts: 65,
    verified: true,
    role: "admin",
    supporter: false,
    badges: ["first-post", 18],
  }),
); //return false
console.log(
  isValidSchema({
    username: "tim",
    posts: 25,
    verified: true,
    role: "staff",
    supporter: false,
  }),
); //return false
console.log(
  isValidSchema({
    username: "charlie",
    posts: 0,
    verified: false,
    role: "user",
    supporter: "no",
    badges: ["first-post", "anniversary"],
  }),
); //return false
console.log(
  isValidSchema({
    username: "wanda",
    posts: 15,
    verified: true,
    role: "friend",
    supporter: true,
    badges: ["popular"],
  }),
); //return false
console.log(
  isValidSchema({
    username: "guy",
    posts: 5,
    verified: "false",
    role: "staff",
    supporter: true,
    badges: ["helper"],
  }),
); //return false
console.log(
  isValidSchema({
    username: "carrie",
    verified: true,
    role: "moderator",
    supporter: true,
    badges: ["helper", "sharer"],
  }),
); //return false
console.log(
  isValidSchema({
    username: true,
    posts: 75,
    verified: true,
    role: "creator",
    supporter: true,
    badges: ["veteran"],
  }),
); //return false
