//Calculate the area, perimeter of a square of side ‘a’. Also, calculate the surface area and the volume of a cube of side ‘a’.

var readlineSync=require('readline-sync');
let a=readlineSync.question("Enter the side: ");
let area=a*a;
let perimeter=4*a;
let surfaceArea=6*a*a;
let volume=a*a*a;
console.log("Area and perimeter of square: ",area,perimeter);
console.log("Surface area and volume of cube: ",surfaceArea,volume);