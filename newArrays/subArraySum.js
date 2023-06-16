//974. Subarray Sums Divisible by K

var subarraysDivByK = function (nums, k) {
  const map = {};
  map[0] = 1;
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = (sum + nums[i]) % k;
    if (sum < 0) {
      sum += k;
    }
    if (map[sum]) {
      count += map[sum];
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  return count;
};

const result = subarraysDivByK([4, 5, 0, -2, -3, 1], 5);

console.log(result);
