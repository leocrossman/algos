/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let L = m - 1;
  let R = n - 1;
  let p = m + n - 1;
  while (R >= 0) {
    if (nums1[L] > nums2[R]) nums1[p] = nums1[L--];
    else nums1[p] = nums2[R--];
    p--;
  }

  // return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [1, 2, 6], 3)); // [1,1,2,2,3,6]
console.log(merge([4, 5, 6, 0, 0, 0], 3, [2, 5, 6], 3)); // [2,4,5,5,6,6]
