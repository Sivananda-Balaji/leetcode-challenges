//2169. Count Operations to Obtain Zero

var countOperations = function (num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  if (num1 === num2) {
    return 1;
  }
  let count = 0;
  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 -= num2;
      count++;
    } else {
      num2 -= num1;
      count++;
    }
  }
  return count;
};

const num1 = 2,
  num2 = 3;

const result = countOperations(num1, num2);

console.log(result);
