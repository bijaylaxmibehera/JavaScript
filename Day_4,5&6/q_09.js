//Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

var readlineSync = require('readline-sync')
let CP = readlineSync.question('Enter cost price: ')
let SP = readlineSync.question('Enter selling price: ')

function calculateProfitOrLoss (CP, SP) {
  let cp = Number(CP)
  let sp = Number(SP)
  if (cp < sp) {
    let profit = sp - cp
    console.log(profit, 'profit')
  } else {
    let loss = cp - sp
    console.log(loss, 'loss')
  }
}
console.log(calculateProfitOrLoss(CP, SP))
