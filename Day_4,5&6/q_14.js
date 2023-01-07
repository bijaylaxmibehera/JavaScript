//Write a Program to convert Decimal to Binary.

const readlineSync = require('readline-sync')
let num = readlineSync.question('Enter a number: ')
function decimalToBinary (n) {
  return n.toString(2)
}
console.log(decimalToBinary(Number(num)))
