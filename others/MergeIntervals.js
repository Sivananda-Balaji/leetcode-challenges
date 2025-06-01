//56. Merge Intervals

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (let i = 0; i < intervals.length; i++) {
    const first = intervals[i][0];
    let last = intervals[i][1];
    if (ans.length !== 0 && last <= ans.at(-1)[1]) {
      continue;
    }
    for (let j = i + 1; j < intervals.length; j++) {
      if (last >= intervals[j][0]) {
        last = Math.max(intervals[j][1], last);
      } else {
        break;
      }
    }
    ans.push([first, last]);
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
