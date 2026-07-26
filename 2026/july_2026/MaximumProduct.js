//628. Maximum Product of Three Numbers

var maximumProduct = function (nums) {
  let firstMax = -Infinity,
    secondMax = -Infinity,
    thirdMax = -Infinity;
  let firstMin = Infinity,
    secondMin = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = val;
    } else if (val > secondMax) {
      thirdMax = secondMax;
      secondMax = val;
    } else if (val > thirdMax) {
      thirdMax = val;
    }
    if (val < firstMin) {
      secondMin = firstMin;
      firstMin = val;
    } else if (val < secondMin) {
      secondMin = val;
    }
  }
  const firstProduct = firstMax * secondMax * thirdMax;
  const secondProduct = firstMax * firstMin * secondMin;
  return Math.max(firstProduct, secondProduct);
};

const nums = [1, 2, 3, 4];

const result = maximumProduct(nums);

console.log(result);
