//74. Search a 2D Matrix

var searchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length * matrix[0].length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midValue =
      matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];
    if (midValue === target) {
      return true;
    } else if (midValue > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

const result = searchMatrix(matrix, target);

console.log(result);
