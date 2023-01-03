 //Print the following star pattern :-
 /*
    - *
    * *
    * * *
    * * * *
    * * * * *
*/
var readlineSync=require('readline-sync');
var n=readlineSync.question('Enter the number of lines ')
for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i))
  }