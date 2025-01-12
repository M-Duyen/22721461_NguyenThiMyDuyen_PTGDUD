
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;
//Test data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;


function calculateBMI(mass, height) {
  return mass / (height * height);
}

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markHigherBMI1 = markBMI1 > johnBMI1;

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Test Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI1}\n`);

console.log("Test Data 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI2}`);

console.log("============= Coding Challenge #2 =============")
// Check who has the higher BMI for Test Data 1
if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
}

// Check who has the higher BMI for Test Data 2
if (markBMI2 > johnBMI2) {
  console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
}
