//Write a Program to Print N Odd Number in Descending Order.

var readlineSync = require('readline-sync')
let n = readlineSync.question('Enter a number ')
function printOddNumber (n) {
  console.log(n, 'odd number in descending order are ')
  for (let i = 2 * n; i >= 1; i--) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
}

printOddNumber(Number(n))
