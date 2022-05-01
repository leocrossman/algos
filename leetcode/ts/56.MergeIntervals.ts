/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */
const merge = (intervals: number[][]): number[][] => {
  if (intervals.length === 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (const interval of intervals) {
    if (!result.length || result[result.length - 1][1] < interval[0]) result.push(interval);
    else result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
  }
  return result;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];
const intervals2 = [[2,6],[1,3],[8,10],[15,18]];
console.log(merge(intervals2));
