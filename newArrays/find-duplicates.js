//442. Find All Duplicates in an Array

var findDuplicates = function (nums) {
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  const answer = [];
  for (let index in map) {
    if (map[index] > 1) {
      answer.push(index);
    }
  }
  return answer;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const result = findDuplicates(nums);

console.log(result);
