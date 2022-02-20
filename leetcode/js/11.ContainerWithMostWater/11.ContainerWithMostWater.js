/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (h) {
  let p1 = 0;
  let p2 = h.length - 1;
  let max = -Infinity;
  while (p1 < p2) {
    let width = p2 - p1;
    let shorter = Math.min(h[p1], h[p2]);
    const currArea = getArea(width, shorter);
    max = Math.max(max, currArea);
    if (shorter === h[p1]) {
      p1++;
    } else {
      p2--;
    }
  }
  return max;
};

const getArea = (a, b) => a * b;

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
