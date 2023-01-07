//Write a JavaScript program that reverses a number.

const readlineSync = require('readline-sync')
let n = readlineSync.question('Enter a number: ')

function reverseNumber (num) {
  let reverse = 0
  while (num > 0) {
    reverse = reverse * 10 + (num % 10)
    num = Math.floor(num / 10)
  }
  console.log('The reverse of entered number is ', reverse)
}
reverseNumber(n)
