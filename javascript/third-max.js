//414. Third Maximum Number

var thirdMax = function (nums) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;
  for (let num of nums) {
    if (num === first || num === second || num === third) {
      continue;
    }
    if (first === -Infinity || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second === -Infinity || num > second) {
      third = second;
      second = num;
    } else if (third === -Infinity || num > third) {
      third = num;
    }
  }
  return third !== -Infinity ? third : first;
};

const nums = [3, 2, 1];

const result = thirdMax(nums);

console.log(result);
