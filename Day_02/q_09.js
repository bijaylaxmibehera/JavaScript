// Write a program to take a number input from user and print multiplication table 12 times for that number.

var readlineSync = require('readline-sync')
var numberInput = readlineSync.question('Enter a number ')
console.log('Multiplication table of ', numberInput, ' is')
var result = 1
for (let i = 1; i <= 12; i++) {
  result = numberInput * i
  console.log(numberInput, 'X', i, '= ', result)
}
