interface Counter {
  [num: number]: number;
}
const c: Counter = {};
function permuteUnique(nums: number[]): number[][] {
  const results: number[][] = [];
  const countMap: Counter = nums.reduce(
    (acc: Counter, curr: number): Counter => {
      if (!acc.hasOwnProperty(curr)) acc[curr] = 0;
      acc[curr]++;
      return acc;
    },
    {}
  );
  const backtrack = (
    comb: number[] = [],
    counter: Counter = countMap
  ): undefined | number => {
    if (comb.length === nums.length) return results.push([...comb]);
    for (const num in counter) {
      if (counter[num]) {
        counter[num] -= 1;
        comb.push(+num);
        backtrack(comb, counter);
        comb.pop();
        counter[num] += 1;
      }
    }
  };
  backtrack();
  return results;
}
console.clear();
const nums: number[] = [1, 2, 1]; /*
[
	[1,1,2],
	[1,2,1],
	[2,1,1]
]
*/
console.log(permuteUnique(nums));
