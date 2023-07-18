//219. Contains Duplicate II

var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!(val in map)) {
      map[val] = i;
    } else {
      if (Math.abs(map[val] - i) <= k) {
        return true;
      } else {
        map[val] = i;
      }
    }
  }
  return false;
};

const nums = [1, 2, 3, 1],
  k = 3;
const result = containsNearbyDuplicate(nums, k);

console.log(result);
