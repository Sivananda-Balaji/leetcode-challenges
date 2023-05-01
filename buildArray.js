//1920. Build Array from Permutation

var buildArray = function (nums) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    newArray[i] = nums[nums[i]];
  }
  return newArray;
};

const result = buildArray([5, 0, 1, 2, 3, 4]);

console.log(result);

console.log("---------------");
//space complexity - O(1)

var buildArrayOne = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    nums[i] = nums[i] + length * (nums[nums[i]] % length);
  }
  for (let i = 0; i < length; i++) {
    nums[i] = Math.floor(nums[i] / length);
  }
  return nums;
};

const resultOne = buildArrayOne([5, 0, 1, 2, 3, 4]);

console.log(resultOne);
