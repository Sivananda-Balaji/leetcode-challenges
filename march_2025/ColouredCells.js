// 2579. Count Total Number of Colored Cells

var coloredCells = function (n) {
  return 1 + 2 * (n - 1) * n;
};

const n = 1;

const result = coloredCells(n);

console.log(result);
