/*
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
*/

/**
 *Time: O(n * sqrt(1/2))
 *Space: O(n)
*/
const numSquares = (n: number): number => {
  const dp = Array(n + 1).fill(n);
  dp[0] = 0;
  for (let target = 1; target < n + 1; target++) {
    for (let s = 1; s < target + 1; s++) {
      const square = s * s;
      if (target - square < 0) break;
      dp[target] = Math.min(dp[target], 1 + dp[target - square]);
    }
  }
  return dp[n];
}


