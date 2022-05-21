/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let L = 0;
  let R = s.length - 1;
  while (L < R) {
    L = skip(L, 1);
    R = skip(R, -1);
    if (L > s.length - 1 || R < 0) return true;
    if (s[L].toLowerCase() !== s[R].toLowerCase()) return false;
    L++;
    R--;
  }

  return true;

  function skip(p, direction) {
    while (
      s[p] < '0' ||
      (s[p] > '9' && s[p] < 'A') ||
      (s[p] > 'Z' && s[p] < 'a') ||
      s[p] > 'z'
    ) {
      p += direction;
    }
    return p;
  }
};

console.log(isPalindrome('A,b,c')); // false
console.log(isPalindrome('.,.')); // true
console.log(isPalindrome('.,aab,.....,baa')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
