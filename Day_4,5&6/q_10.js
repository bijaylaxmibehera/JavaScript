//Write a program to calculate sum of N natural digits, as input by the users?

var readlineSync = require('readline-sync')
let num = readlineSync.question('Enter a positive integer: ')

function calculateSum (n) {
  let sum = (n * (n + 1)) / 2
  return sum
}
console.log(calculateSum(Number(num)))
