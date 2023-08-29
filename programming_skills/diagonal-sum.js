//1572. Matrix Diagonal Sum

var diagonalSum = function (mat) {
  let answer = 0;
  const len = mat.length;
  for (let i = 0; i < len; i++) {
    answer += mat[i][i] + mat[len - 1 - i][i];
  }
  if (len % 2 !== 0) {
    answer -= mat[Math.floor(len / 2)][Math.floor(len / 2)];
  }
  return answer;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = diagonalSum(mat);

console.log(result);
