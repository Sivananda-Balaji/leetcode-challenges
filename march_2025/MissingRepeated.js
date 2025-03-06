//2965. Find Missing and Repeated Values

var findMissingAndRepeatedValues = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const freqArr = new Array(row * col).fill(0);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const val = grid[i][j];
      freqArr[val - 1] += 1;
    }
  }
  const ans = [];
  for (let i = 0; i < freqArr.length; i++) {
    if (freqArr[i] === 2) {
      ans[0] = i + 1;
    } else if (freqArr[i] === 0) {
      ans[1] = i + 1;
    }
  }
  return ans;
};

const grid = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];

const result = findMissingAndRepeatedValues(grid);

console.log(result);
