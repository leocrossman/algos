/**
 * O(nlogn) time
 * O(logn) space
 * @param {Array} arr
 * @returns {Array}
 */
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  let L = 0,
    R = 0;
  const merged = [];
  while (L < left.length && R < right.length) {
    if (left[L] < right[R]) merged.push(left[L++]);
    else merged.push(right[R++]);
  }
  while (L < left.length) {
    merged.push(left[L++]);
  }
  while (R < right.length) {
    merged.push(right[R++]);
  }
  return merged;
};

module.exports = mergeSort;
