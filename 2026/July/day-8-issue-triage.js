// Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:
// If the last message is less than 7 days ago, return "leave it"
// If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
// Otherwise, return "bump it"

function triageIssue(ms, message) {
  const sevenDayMS = 7 * 24 * 60 * 60 * 1000;
  let messageLower = String(message).toLocaleLowerCase();
  if (ms < sevenDayMS) {
    return "leave it";
  } else if (ms >= sevenDayMS && messageLower.includes("bump")) {
    return "close it";
  }
  return "bump it";
}

console.log(triageIssue(86400000, "Lets fix it")); //return "leave it"
console.log(triageIssue(1209600000, "still waiting")); //return "bump it"
console.log(triageIssue(864000000, "bump")); //return "close it"
console.log(triageIssue(604800000, "Do we still want this?")); //return "bump it"
console.log(triageIssue(604800000, "Bumping this")); //return "close it"
console.log(triageIssue(345600000, "I'll make a PR")); //return "leave it"
