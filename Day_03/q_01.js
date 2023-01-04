//Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

var readlineSync = require('readline-sync')
var num = readlineSync.question('Enter a number ')
var fact = 1
for (let i = num; i >= 1; i--) {
  fact = fact * i
}
console.log(`The factorial of ${num} is ${fact}`)
