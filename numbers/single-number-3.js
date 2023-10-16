//260. Single Number III

var singleNumber = function (nums) {
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  const answer = [];
  for (let val in map) {
    if (map[val] === 1) {
      answer.push(val);
    }
  }
  return answer;
};

const nums = [1, 2, 1, 3, 2, 5];

const result = singleNumber(nums);

console.log(result);
