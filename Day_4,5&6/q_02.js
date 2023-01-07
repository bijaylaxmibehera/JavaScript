// Given n numbers, your function should return the maximum of them all. The number of parameters won’t be accepted from user. Example: Input: findMax(3,5) ––> Output: 5Input: findMax(3,5,9,1) ––> Output: 9(Hint: Lookup rest parameters in JavaScript)
function findMax (...numbers) {
  var sortedNumbers = numbers.sort()
  return sortedNumbers[sortedNumbers.length - 1]
}
console.log(findMax(3, 5, 9, 1, 0))
console.log(findMax(3, 5))
