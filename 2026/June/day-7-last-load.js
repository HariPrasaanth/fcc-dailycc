// Given the number of scoops of laundry detergent you have remaining and an array of how many scoops you used in each of the previous days, return the number of full days of detergent you have remaining.
// Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.

function lastLoadDate(scoops, usage) {
  const average = usage.reduce((accu, sum) => accu + sum, 0) / usage.length;
  return Math.trunc(scoops / average);
}

console.log(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2])); //return 5
console.log(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1])); //return 7
console.log(lastLoadDate(33, [5, 0, 4, 3, 3, 2])); //return 11
console.log(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2])); //return 12
console.log(lastLoadDate(20, [13, 9, 12, 10, 8])); //return 1
