//18. 4Sum

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const ans = [];

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let l = j + 1,
        k = len - 1;
      while (l < k) {
        const sum = nums[i] + nums[j] + nums[l] + nums[k];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[l], nums[k]]);
          l++;
          while (nums[l] === nums[l - 1]) {
            l++;
          }
          k--;
          while (nums[k] === nums[k + 1]) {
            k--;
          }
        } else if (sum < target) {
          l++;
        } else {
          k--;
        }
      }
    }
  }
  return ans;
};

const nums = [1, 0, -1, 0, -2, 2],
  target = 0;

const result = fourSum(nums, target);

console.log(result);
