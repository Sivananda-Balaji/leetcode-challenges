//1260. Shift 2D Grid

var shiftGrid = function (grid, k) {
  const row = grid.length,
    col = grid[0].length;
  const ans = [];
  for (let i = 0; i < row; i++) {
    ans.push([]);
  }
  const total = row * col;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const oldIndex = i * col + j;
      const newIndex = (oldIndex + k) % total;
      const newRow = Math.floor(newIndex / col);
      const newCol = newIndex % col;
      ans[newRow][newCol] = grid[i][j];
    }
  }
  return ans;
};

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;

const result = shiftGrid(grid, k);

console.log(result);
