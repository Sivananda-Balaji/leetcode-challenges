//229. Majority Element II

var majorityElement = function (nums) {
  const times = Math.floor(nums.length / 3);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  const answer = [];
  for (let i in map) {
    if (map[i] > times) {
      answer.push(i);
    }
  }
  return answer;
};

const nums = [3, 2, 3];
const results = majorityElement(nums);

console.log(results);
