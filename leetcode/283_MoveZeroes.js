/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let zeroCount = nums.filter(num => num === 0).length;
  let L = 0;
  let R = 1;
  while (zeroCount > 0) {}
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([4, 8, 0, 20, 0])); // [4,8,20,0,0]
console.log(moveZeroes([0, 0, 10, 5, 0, 7])); //
