//2352. Equal Row and Column Pairs

var equalPairs = function (grid) {
  const rows = grid.map((row) => row.join());
  const columns = grid[0].map((col, i) => {
    return grid.map((row) => row[i]).join();
  });
  let count = 0;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (rows[i] === columns[j]) {
        count++;
      }
    }
  }
  return count;
};

const result = equalPairs([
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
]);

console.log(result);

/**
 * var equalPairs = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let match = true;
      for (let k = 0; k < grid.length; k++) {
        if (grid[i][k] !== grid[k][j]) {
          match = false;
          break;
        }
      }
      if (match) {
        count++;
      }
    }
  }
  return count;
};
 */
