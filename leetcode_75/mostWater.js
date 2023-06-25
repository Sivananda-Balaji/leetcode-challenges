//11. Container With Most Water

var maxArea = function (height) {
  let maxValue = 0;
  let left = 0,
    right = height.length - 1;
  while (left !== right) {
    const minValue = Math.min(height[left], height[right]);
    maxValue = Math.max(maxValue, minValue * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxValue;
};

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log(result);

/* BRUTE-FORCE Approach
var maxArea = function (height) {
  let maxValue = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const lowValue = Math.min(height[i], height[j]);
      if (lowValue * (j - i) > maxValue) {
        maxValue = lowValue * (j - i);
      }
    }
  }
  return maxValue;
};



*/
