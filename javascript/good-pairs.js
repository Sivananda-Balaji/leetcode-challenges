//1512. Number of Good Pairs

var numIdenticalPairs = function (nums) {
  let answer = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num]) {
      answer += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  return answer;
};

const nums = [1, 2, 3, 1, 1, 3];

const result = numIdenticalPairs(nums);

console.log(result);

/**
 * var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
 */
