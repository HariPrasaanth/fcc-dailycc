// Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.
// To get BMI: divide the weight by the height squared, then multiply the result by 703.

function calculateBmi(weight, height) {
  return ((weight / Math.pow(height, 2)) * 703).toFixed(1);
}

console.log(calculateBmi(180, 70)); //return 25.8
console.log(calculateBmi(140, 64)); //return 24.0
console.log(calculateBmi(160, 76)); //return 19.5
console.log(calculateBmi(200, 60)); //return 39.1
console.log(calculateBmi(150, 68)); //return 22.8
