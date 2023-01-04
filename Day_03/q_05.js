// Given a sentence, your functions should return the number of words in the sentence. Example: Input: noOfWords(We are neoGrammers) ––> Output: 3

//input
var str = 'We are neoGrammers'
var count = 0

//split the sentence into separate words
var word = str.split(' ')
//console.log(word)

//processing
function noOfWords (str) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] != '') {
      count += 1
    }
  }
  return count
}

//output

console.log(noOfWords(str))
