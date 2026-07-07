// Given two integers, round the first to the nearest multiple of the second.

function roundToNearestMultiple(num, multiple) {
    let reminder = num % multiple;
    let balance = multiple - reminder;
    return reminder<balance?num-reminder:num+balance;
}

console.log(roundToNearestMultiple(5, 3)) // return 6
console.log(roundToNearestMultiple(17, 4)) // return 16 
console.log(roundToNearestMultiple(43, 5)) // return 45
console.log(roundToNearestMultiple(38, 11)) // return 33
console.log(roundToNearestMultiple(93, 12)) // return 96
