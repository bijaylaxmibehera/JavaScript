//Write a Program to Convert Octal to Decimal.

const readlineSync = require('readline-sync')
let num = readlineSync.question('Enter a number: ')
function octalToDecimal (octal) {
  return parseInt(octal, 8)
}
console.log(octalToDecimal(Number(num)))
