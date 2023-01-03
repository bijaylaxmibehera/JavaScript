//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21….
var readlineSync = require('readline-sync');
var a = 0,
  b = 1,
  nextNum;
var fiboSeries = [];
var limit = readlineSync.question('Enter the limit of series ');
fiboSeries.push(a);
fiboSeries.push(b);
for (let i = 1; i <= limit; i++) {
  nextNum = a + b
  fiboSeries.push(nextNum);
  a = b
  b = nextNum
}
console.log('Fibonacci series: ', fiboSeries);
