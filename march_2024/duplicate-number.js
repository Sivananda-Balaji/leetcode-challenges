//287. Find the Duplicate Number

var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
};

const nums = [1, 3, 4, 2, 2];

const result = findDuplicate(nums);

console.log(result);
