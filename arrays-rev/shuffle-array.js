//1470. Shuffle the Array

var shuffle = function (nums, n) {
  const x = nums.slice(0, n);
  const y = nums.slice(n);
  const answer = new Array(nums.length);
  let xvar = 0,
    yvar = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      answer[i] = x[xvar++];
    } else {
      answer[i] = y[yvar++];
    }
  }
  return answer;
};

const nums = [2, 5, 1, 3, 4, 7],
  n = 3;

const result = shuffle(nums, n);

console.log(result);
