/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length < 4) {
    return [];
  }
	
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
