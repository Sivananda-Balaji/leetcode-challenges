//167. Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
  let first = 0,
    last = numbers.length - 1;
  while (true) {
    const sum = numbers[first] + numbers[last];
    if (sum === target) {
      return [first, last];
    } else if (sum > target) {
      last--;
    } else {
      first++;
    }
  }
};

const numbers = [2, 7, 11, 15],
  target = 9;

const result = twoSum(numbers, target);

console.log(result);
