const palindromes = function (str) {
  const strWithoutSymbols = str.replace(/[^a-zA-Z0-9]/g, "");
  let arr = strWithoutSymbols.toLowerCase().split("");
  let reverseStr = strWithoutSymbols.toLowerCase().split("").reverse();

  let isPalindrome = true; // assume the string is a palindrome by default
  for (let i = 0; i < arr.length; i++) {
    if (reverseStr[i] !== arr[i]) {
      // if there is a mismatch
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
