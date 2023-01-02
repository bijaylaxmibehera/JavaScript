// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

var num1=129,num2=251;

function getMaxAndMin(){
  if(num1>num2){
    return `${num1} is maximum and ${num2} is minimum`;
  } else{
     return `${num2} is maximum and ${num1} is minimum`;
  }
}

console.log(getMaxAndMin(num1,num2));