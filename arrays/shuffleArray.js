//1470. Shuffle the Array
var shuffle = function (nums, n) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(nums[i], nums[i + n]);
  }
  return newArray;
};

const result = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
console.log(result);
