// 1980. Find Unique Binary String

var findDifferentBinaryString = function (nums) {
  let answer = "";
  for (let i = 0; i < nums.length; i++) {
    answer += nums[i][i] === "0" ? "1" : "0";
  }
  return answer;
};

const nums = ["001", "000", "100"];

const result = findDifferentBinaryString(nums);

console.log(result);

/**
 * 
 * var findDifferentBinaryString = function (nums) {
  const len = nums.length;
  const arr = generateString(len);
  for (let i = 0; i < arr.length; i++) {
    if (!nums.includes(arr[i])) {
      return arr[i];
    }
  }
};

const generateString = (len, s = "", ans = []) => {
  if (len === 0) {
    ans.push(s);
    return;
  }
  generateString(len - 1, s + "0", ans);
  generateString(len - 1, s + "1", ans);
  return ans;
};
 * 
 */
