//1636. Sort Array by Increasing Frequency

var frequencySort = function (nums) {
  const map = {};
  for (let val of nums) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  const answer = nums.sort((a, b) => {
    if (map[a] === map[b]) {
      return b - a;
    } else {
      return map[a] - map[b];
    }
  });
  return answer;
};

const nums = [1, 1, 2, 2, 2, 3];

const result = frequencySort(nums);

console.log(result);
