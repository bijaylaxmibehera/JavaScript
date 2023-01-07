//3. Write a program to calculate the kinetic energy of a body with mass ‘m’ and volume ‘v’.  
//Formula : `0.5 * m * v * v`

console.log("Enter the mass in Kg and velocity m/s")
let m=readlineSync.question("Enter mass of the body : ");
let v=readlineSync.question("Enter velocity of the body : ");

let kineticEnergy=0.5*Number(m)*Number(v)*Number(v);

console.log("Kinetic energy of the body: ",kineticEnergy);