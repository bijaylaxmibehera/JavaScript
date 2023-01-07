//Write a program to input 2 numbers and display the sum of the numbers to the console.
var readlineSync = require('readline-sync');
let num1 = readlineSync.question("Input Number 1: ");
let num2 = readlineSync.question("Input Number 2: ");

let sum = Number(num1) + Number(num2);
console.log('Sum: ', sum);