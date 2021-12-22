/*
5. Longest Palindromic Substring - Medium
Given a string s, return the longest palindromic substring in s.
*/
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length < 2) return s;
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let lenOdd = expandAroundCenter(s, i, i);
    let lenEven = expandAroundCenter(s, i, i + 1);
    let len = Math.max(lenOdd, lenEven);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.slice(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
const tests = ['cbbd', 'aacabdkacaa', 'babad', 'a', 'ac', 'racecar'];
for (let i = 0; i < tests.length; i++) {
  const test = tests[i];
  // aacabdkacaa -> aca
  console.log(longestPalindrome(test));
  break;
}

function longestPalindromeBruteForce(s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (j - i >= longest.length && isPalindrome(s, i, j)) {
        longest = s.slice(i, j + 1);
        break;
      }
    }
  }
  console.log(longest);
  if (s.length && longest === '') return s[0];
  return longest;
}

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start++] !== s[end--]) return false;
  }
  return true;
}
