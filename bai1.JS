var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;

console.log("Data 1:");
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);

var markHigherBMI = markBMI > johnBMI;
console.log("Does Mark have a higher BMI than John?", markHigherBMI);

var markMass2 = 95;
var markHeight2 = 1.88;
var johnMass2 = 85;
var johnHeight2 = 1.76;

console.log("Data 2:");
var markBMI2 = markMass2 / (markHeight2 * markHeight2);
var johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);

var markHigherBMI2 = markBMI2 > johnBMI2;
console.log("Does Mark have a higher BMI than John?", markHigherBMI2);