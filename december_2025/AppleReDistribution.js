//3074. Apple Redistribution into Boxes

var minimumBoxes = function (apple, capacity) {
  let sum = apple.reduce((acc, curr) => acc + curr, 0);
  capacity.sort((a, b) => b - a);
  let count = 0;
  let i = 0;
  const len = capacity.length;
  while (sum > 0 && i < len) {
    sum -= capacity[i++];
    count++;
  }
  return count;
};

const apple = [1, 3, 2],
  capacity = [4, 3, 1, 5, 2];
const result = minimumBoxes(apple, capacity);

console.log(result);
