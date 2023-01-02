//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
var num1 = 8, num2 = 23, num3 = 17;

function getMaxNumber() {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is the maximum`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} is the maximum`;
  } else {
    return `${num3} is the maximum`;
  }
}

console.log(getMaxNumber(num1, num2, num3));