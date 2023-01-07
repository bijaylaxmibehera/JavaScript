//Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 ‘F’ and ‘C’ are the temperatures on the Fahrenheit scale and Celsius scale respectively.

var readlineSync=require('readline-sync');
let F=readlineSync.question("Temperature in fahrenheit: ");
let C= (Number(F)-32)*5/9;
console.log("Temperature in celsius: ",C.toFixed(5));