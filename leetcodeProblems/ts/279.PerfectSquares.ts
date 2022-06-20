/*
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
*/

/**
 *Time: O(n * sqrt(1/2))
 *Space: O(n)
*/
const numSquaresDP = (n: number): number => {
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


/**
 * iteratively deepening DFS on an n-ary tree
 * Time: O(n^h/2) where h is the number of recursive calls made
 * Space: O(n^1/2)
 */
const numSquares = (n: number): number => {
  const squares = getSquares(n);
  for (let i = 1; i < n + 1; i++) {
    if (isDividedBy(squares, n, i)) return i;
  }
  return -1;
}

const isDividedBy = (squares: Set<number>, n: number, count: number): boolean => {
  if (count === 1) return squares.has(n);
  for (const k of squares) {
    if (isDividedBy(squares, n - k, count - 1)) return true;
  }
  return false;
}

const getSquares = (n): Set<number> => {
  const squares = new Set<number>();
  for (let i = 0; i < Math.sqrt(n) + 1; i++) {
    squares.add(i * i);
  }
  return squares;
}
