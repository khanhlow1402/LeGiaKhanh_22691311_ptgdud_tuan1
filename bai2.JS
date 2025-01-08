var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markMass2 = 95;
var markHeight2 = 1.88;
var johnMass2 = 85;
var johnHeight2 = 1.76;

var markBMI2 = markMass2 / (markHeight2 * markHeight2);
var johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

function soSanh(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
      console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else if (johnBMI > markBMI) {
      console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    } else {
      console.log(`Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
    }
  }
  
  // Compare BMIs for Data 1
  console.log("Data 1:");
  soSanh(markBMI, johnBMI);
  
  // Compare BMIs for Data 2
  console.log("\nData 2:");
  soSanh(markBMI2, johnBMI2);