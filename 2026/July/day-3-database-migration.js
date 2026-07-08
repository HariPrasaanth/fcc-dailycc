// Given two database objects, return the second object with any missing properties from the first filled in.
// Fields that already exist in the record should not be overwritten.

function migrateRecord(schema, record) {
  let schemaKeys = Object.keys(schema).concat(Object.keys(record));
  let uniqueKeys = [...new Set(schemaKeys)];
  let resultObj = {};
  for (let key of uniqueKeys) {
    resultObj = {
      ...resultObj,
      [key]: record[key] || schema[key],
    };
  }
  return resultObj;
}

console.log(migrateRecord({ username: "", posts: 0 }, { verified: true })); //return { username: "", posts: 0, verified: true }
console.log(
  migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }),
); //return { username: "camper", posts: 5 }
console.log(
  migrateRecord(
    { username: "", posts: 0, verified: false },
    { username: "camper" },
  ),
); //return { username: "camper", posts: 0, verified: false }
console.log(
  migrateRecord(
    { username: "", posts: 0 },
    { username: "camper", role: "admin" },
  ),
); //return { username: "camper", role: "admin", posts: 0 }
console.log(
  migrateRecord(
    {
      username: "",
      email: "",
      posts: 0,
      verified: false,
      role: "user",
      banned: false,
    },
    { username: "camper", email: "camper@freecodecamp.org", role: "admin" },
  ),
); //{ username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }
