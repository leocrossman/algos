/*
5. Longest Palindromic Substring - Medium
Given a string s, return the longest palindromic substring in s.



*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  console.log(s);
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      // ! I PUT INFINITY HERE AS A PLACEHOLDER BUT YOU BETTER DELETE THAT IMMEDIATELY ON THE NEXT LINE AND FIGURE OUT WHAT GOES THERE INSTEAD YOU BUM (ME (YOU))
      if (j - i < Infinity && isPalindrome(s, i, j)) {
        longest = s.slice(i, j + 1).length;
        break;
      }
    }
  }
  return longest;
};

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start++] !== s[end--]) return false;
  }
  return true;
}

const tests = ['babad', 'cbbd', 'a', 'ac'];
for (let i = 0; i < tests.length; i++) {
  const test = tests[i];
  console.log(longestPalindrome(test));
  break;
}
