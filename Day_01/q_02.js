//Write a program to take a number input from user and determine whether the number is odd or even.
var readlineSync = require('readline-sync')

var userInput = readlineSync.question(
  'Let give me a number i will tell you Is it even or odd? '
)


function checkEvenOrOdd () {
  if (userInput % 2 === 0) {
    return `Hey, ${userInput} is even.`
  } else {
    return `Hey, ${userInput} is odd.`
  }
}
console.log(checkEvenOrOdd(userInput))
