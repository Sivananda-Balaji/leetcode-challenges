//167. Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start <= end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [++start, ++end];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};

const result = twoSum([2, 7, 11, 15], 9);

console.log(result);
