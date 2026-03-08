//1980. Find Unique Binary String

var findDifferentBinaryString = function (nums) {
  let ans = "";
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i][i] === "0" ? "1" : "0";
  }
  return ans;
};

const nums = ["01", "10"];

const result = findDifferentBinaryString(nums);

console.log(result);
