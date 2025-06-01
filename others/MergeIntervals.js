//56. Merge Intervals

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (let i = 0; i < intervals.length; i++) {
    if (ans.length === 0 || ans.at(-1)[1] < intervals[i][0]) {
      ans.push(intervals[i]);
    } else {
      ans.at(-1)[1] = Math.max(intervals[i][1], ans.at(-1)[1]);
    }
  }
  return ans;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const result = merge(intervals);

console.log(result);
