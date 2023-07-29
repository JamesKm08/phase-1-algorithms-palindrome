isPalindrome = (word) => {
  // Write your algorithm here
  word = word.toLowerCase()
  reversedWord = word.split("").reverse().join("");

  return word === reversedWord;
}

/* 
  Add your pseudocode here

  reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here

  First change the word into lowercase to ensure uniformity
  Then reverse the word but first spliting then reversing then joining so that the original word is reversed
  Then return the reversed word if strictly same with the original word
  

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: Is Palindrome");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: Not Palindrome");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: Not Palindrome");
  console.log("=>", isPalindrome("James"));
}

module.exports = isPalindrome;
