const minMeetingRooms = (intervals: number[][]): number => {
  let rooms: number = 0;
  const startTimes: number[] = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  const endTimes: number[] = intervals
    .map((interval) => interval[1])
    .sort((a, b) => a - b);
  let S: number = 0;
  let E: number = 0;
  while (S < intervals.length) {
    startTimes[S] >= endTimes[E] ? E++ : rooms++;
    S++;
  }
  return rooms;
};

console.log(
  minMeetingRooms([
    [9, 10],
    [4, 9],
    [4, 17],
  ])
); // 2

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // 2
console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ])
); // 1
