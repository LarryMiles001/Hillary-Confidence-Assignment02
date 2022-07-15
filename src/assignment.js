// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for(let i = 0; i < arrayofNumbers.length; i++){
    sum = sum + arrayofNumbers[i];
  }
  return sum;
}
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  let count = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumber[i] % 2 == 0;){
      count++;}
  }
    return count;
}
assignment.countEvenNumbers = countEvenNumbers;

Run exam-01-practice/jest-to-sheets@v2
  with:
    challenge: ch-1;ch-2;ch-3
    lang: javascript
    server: https://api.sheetson.com/v2/sheets
    sheetid: 1Qb5Ovjy1l2UG94Cht2govguYX5fpCIgoTKPUd2ufMm4
    token: HXlur8K20ZpoB-6FNsnSUtj2kGoDqCDHDl8vZBdLtQCv9UFOVhMsM2IBwD8

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

Run exam-01-practice/jest-to-sheets@v2
  with:
    challenge: ch-1;ch-2;ch-3
    lang: javascript
    server: https://api.sheetson.com/v2/sheets
    sheetid: 1Qb5Ovjy1l2UG94Cht2govguYX5fpCIgoTKPUd2ufMm4
    token: HXlur8K20ZpoB-6FNsnSUtj2kGoDqCDHDl8vZBdLtQCv9UFOVhMsM2IBwD8

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

