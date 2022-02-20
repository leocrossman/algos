/**
 * @param {sing} s
 * @return {sing[]}
 */
const letterCasePermutation = function (s) {
  const results = [];
  s = s.toLowerCase();
  const backtrack = (perm = '', idx = 0) => {
    if (perm.length === s.length && idx < s.length) {
      results.push(perm);
      return;
    }
    for (const i in s) {
      const l = s[i];
      backtrack(perm.slice(0, i) + l + perm.slice(i + 1), i);
    }
    return;
  };
  backtrack();
  return results;
};

let s;
s = 'a1b2';
console.log(letterCasePermutation(s)); // ["a1b2","a1B2","A1b2","A1B2"]
s = '3z4';
console.log(letterCasePermutation(s)); // ['3z4', '3Z4'];
