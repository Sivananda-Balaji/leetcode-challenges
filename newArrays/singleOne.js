//136. Single Number

//using hash map
var singleNumber = function (nums) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numMap[nums[i]]) {
      numMap[nums[i]] = 1;
    } else {
      numMap[nums[i]]++;
    }
  }
  for (let num in numMap) {
    if (numMap[num] === 1) {
      return num;
    }
  }
};

const result = singleNumber([4, 1, 2, 1, 2]);

console.log(result);

//using xor

const singleNumberXor = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

const resultXor = singleNumberXor([4, 1, 2, 1, 2]);

console.log(resultXor);
