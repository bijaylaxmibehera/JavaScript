// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

var readlineSync = require('readline-sync');
//input
var userAnswer=readlineSync.question("Enter the name of month \n")
//list of months having 31 days
const monthList=["jan","mar","may","jul","aug","oct","dec"]
//processing
function checkIfMonthHas31Days(){
  for(let i=0; i<monthList.length; i++){
    if(userAnswer === monthList[i]){
      return `${userAnswer} has 31 days.`
    } 
  }
  return `${userAnswer} hasn't 31 days.`
}
//output
console.log(checkIfMonthHas31Days(userAnswer))