/*
15. 3Sum
Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

/*	 O(N^2) TIME - O(N) SPACE		*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let target = 0;
  const triplets = new Set();
  for (let i = 1; i < nums.length - 1; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < nums.length) {
      if (target - nums[i] === nums[left] + nums[right])
        triplets.add(`[${nums[left]}, ${nums[i]}, ${nums[right++]}]`);
      if (target - nums[i] > nums[left] + nums[right]) right++;
      else if (target - nums[i] < nums[left] + nums[right]) left--;
    }
  }
  return [...triplets].map(el => JSON.parse(el));
};

let nums = [-1, 0, 1, 2, -1, -4];
let nums2 = [0, 0, 0, 0];
let nums3 = [3, 0, -2, -1, 1, 2];
console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums2)); // [0, 0, 0, 0]
console.log(threeSum(nums3)); // [[-2,-1,3],[-2,0,2],[-1,0,1]]

console.log(threeSum([])); // []
console.log(threeSum([0])); // []
