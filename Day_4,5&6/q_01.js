// Given n numbers, your function should return the minimum of them all. The number of parameters won’t be accepted from user. Example: Input: findMin(3,5) ––> Output: 3Input: findMin(3,5,9,1) ––> Output: 1(Hint: Lookup rest parameters in JavaScript)

function findMin (...numbers) {
  var sortedNumbers = numbers.sort()
  return sortedNumbers[0]
}
console.log(findMin(3, 5, 9, 1))
console.log(findMin(3, 5))
