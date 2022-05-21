function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    const prev: number[] = intervals[i - 1];
    const curr: number[] = intervals[i];
    if (prev[1] > curr[0]) return false;
  }
  return true;
}

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // false
console.log(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
); // true
