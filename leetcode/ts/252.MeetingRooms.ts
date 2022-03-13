function canAttendMeetings(intervals: number[][]): boolean {}

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
