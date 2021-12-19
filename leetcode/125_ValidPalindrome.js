/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let L = 0;
  let R = s.length - 1;
  while (L < R) {
    console.log(L, R);
    L = skip(L, 1);
    R = skip(R, -1);
    console.log(L, R);
    if (L > s.length - 1 || R < 0) return false;
    if (s[L].toLowerCase() !== s[R].toLowerCase()) return false;
    L++;
    R--;
  }

  return true;

  function skip(p, direction) {
    console.log(s[p]);
    while (s[p] < '0' || (s[p] > '9' && s[p] < 'A') || (s[p] > 'Z' && s[p] < 'a') || s[p] > 'z') {
      p += direction;
    }
    console.log(s[p]);
    return p;
  }
};

// console.log(isPalindrome('A,b,c')); // true
console.log(isPalindrome('.,.')); // true
console.log(isPalindrome('.,.')); // false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
