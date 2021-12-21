/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// ALSO SUBOPTIMAL BUT THE "OPTIMAL" SOLUTION IS NOT ALWAYS OPTIMAL AND THESE ARE STILL O(N) TIME AND O(1) SPACE
const moveZeroes = (nums) => {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[lastNonZero++] = nums[i];
  }
  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([4, 8, 0, 20, 0])); // [4,8,20,0,0]
console.log(moveZeroes([0, 0, 10, 5, 0, 7])); //

const moveZeroesSubOptimal = function (nums) {
  let slow = 0;
  let fast;
  while (slow < nums.length) {
    while (slow < nums.length && nums[slow] !== 0) slow++;
    if (slow >= nums.length) break;
    fast = slow + 1;
    while (fast < nums.length && nums[fast] === 0) fast++;
    if (fast >= nums.length) break;
    if (nums[slow] === 0 && nums[fast] !== 0) {
      let temp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
    }
    slow++;
  }
};
