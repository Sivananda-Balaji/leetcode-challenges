//2824. Count Pairs Whose Sum is Less than Target

var countPairs = function (nums, target) {
  let answer = 0;
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      answer += right - left;
      left++;
    } else {
      right--;
    }
  }
  return answer;
};

const nums = [-6, 2, 5, -2, -7, -1, 3],
  target = -2;

const result = countPairs(nums, target);

console.log(result);

/**

var countPairs = function (nums, target) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        answer++;
      }
    }
  }
  return answer;
};

 */
