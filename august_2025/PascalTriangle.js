//118. Pascal's Triangle

var generate = function (numRows) {
  const ans = [];
  for (let i = 1; i <= numRows; i++) {
    const temp = [];
    for (let j = 0; j < i; j++) {
      temp.push(1);
    }
    ans.push(temp);
  }
  for (let i = 1; i < numRows - 1; i++) {
    const arr = ans[i];
    for (let j = 0; j < arr.length - 1; j++) {
      const sum = arr[j] + arr[j + 1];
      ans[i + 1][j + 1] = sum;
    }
  }
  return ans;
};

const numRows = 5;

const result = generate(numRows);

console.log(result);
