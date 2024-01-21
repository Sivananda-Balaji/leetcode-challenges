//1512. Number of Good Pairs

var numIdenticalPairs = function (nums) {
  let answer = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      answer += map[nums[i]];
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return answer;
};

const nums = [1, 2, 3, 1, 1, 3];

const result = numIdenticalPairs(nums);

console.log(result);
