//Write a JavaScript program to compute the sum of all digits that occur in a given string.

const readlineSync = require('readline-sync')

let n = readlineSync.question('Enter a number: ')

function calculateSumOfDigits (num) {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  console.log('The sum of digits of entered number is ', sum)
}

calculateSumOfDigits(Number(n))
