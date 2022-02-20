/**
 * @param {string} s
 * @returns {string}
 */
const reverseVowels = function(s) {
  if (s.length < 2) return s;
  const set = new Set('aeiouAEIOU');
  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (set.has(arr[left]) && set.has(arr[right])) {
      arr = swap(arr, left, right);
      left++;
      right--;
    }
    while (!set.has(arr[left]) && left < right) left++;
    while (!set.has(arr[right]) && left < right) right++;
  }
  return arr.join('');
};

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}
// console.log(swap(['h', 'e', 'l', 'l', 'o'], 1, 4));
console.log(reverseVowels('abcde'));
console.log(reverseVowels('.,'));
// console.log(reverseVowels('hello')); // 'holle'
console.log(reverseVowels('leetcode')); // 'leotcede'
