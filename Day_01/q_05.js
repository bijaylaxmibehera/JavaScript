//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

var num1=35,num2=29,num3=46;

function getMinNumber(){
  if(num1<num2 && num1<num3){
    return `${num1} is the minimum`;
  } else if(num2<num1 && num2<num3){
     return `${num2} is the minimum`;
  } else{
    return `${num3} is the minimum`;
  }
}

console.log(getMinNumber(num1,num2,num3));