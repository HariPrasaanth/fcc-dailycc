// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

/* 
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

UserProfile = {
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

{
  users: UserProfile[]
}

*/

// The pipe (|) symbol means "or". role must be one of the listed Roles values.
// The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
// UserProfile[] denotes an array of UserProfile objects. An empty array is valid.
// Extra keys are allowed

function schemaValidator(obj, property, type, isOptional = true) {
  if (isOptional) {
    return obj.hasOwnProperty(property) && typeof obj[property] === type;
  }
  return !obj.hasOwnProperty(property) || typeof obj[property] === type;
}

function schemaChecker(obj) {
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

function isValidSchema(obj) {
  if (!Array.isArray(obj.users)) return false;
  return obj.users.map((user) => schemaChecker(user)).every((user) => user);
}

console.log(
  isValidSchema({
    users: [
      {
        username: "ron",
        posts: 14,
        verified: true,
        role: "creator",
        badges: ["early-adopter"],
      },
      {
        username: "cher",
        posts: 25,
        verified: true,
        role: "moderator",
        supporter: true,
        followers: 20,
        badges: ["helper"],
      },
    ],
  }),
); //return true
console.log(isValidSchema({ users: [] })); //return true
console.log(
  isValidSchema({
    users: {
      username: "anne",
      posts: 0,
      verified: false,
      role: "user",
      supporter: false,
      badges: [],
    },
  }),
);
console.log(
  isValidSchema({
    users: [
      {
        username: "tony",
        posts: 10,
        verified: true,
        role: "creator",
        supporter: true,
        badges: ["liked", 6],
      },
    ],
  }),
); //return false
console.log(
  isValidSchema({
    users: [
      {
        username: "ursula",
        posts: 3,
        verified: false,
        role: "user",
        supporter: "false",
        badges: ["comeback"],
      },
    ],
  }),
); //return false
console.log(
  isValidSchema({
    users: [
      {
        username: "benny",
        posts: 55,
        verified: true,
        role: "superstar",
        supporter: true,
        badges: ["veteran"],
      },
    ],
  }),
); //return false
console.log(
  isValidSchema({
    users: [
      {
        username: "chase",
        posts: 1,
        verified: "yes",
        role: "staff",
        supporter: false,
        badges: ["superstar"],
      },
    ],
  }),
); //return false
console.log(
  isValidSchema({
    users: [
      {
        username: "carla",
        posts: "10",
        verified: false,
        role: "user",
        supporter: false,
        badges: ["newbie"],
      },
    ],
  }),
); //return false
console.log(
  isValidSchema({
    users: [
      {
        posts: 4,
        verified: false,
        role: "admin",
        supporter: false,
        badges: ["superuser", "veteran"],
      },
    ],
  }),
); //return false
console.log(
  isValidSchema({
    users: [
      {
        username: "harold",
        posts: 80,
        verified: true,
        role: "creator",
        supporter: true,
        badges: ["liked", "hero"],
      },
      {
        username: "kim",
        posts: 11,
        verified: false,
        role: "admin",
        supporter: true,
        badges: ["first"],
      },
      {},
    ],
  }),
); //return false
