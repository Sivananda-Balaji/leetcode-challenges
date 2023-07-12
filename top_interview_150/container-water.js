//11. Container With Most Water

var maxArea = function (height) {
  let maxWater = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      maxWater = Math.max(height[left] * (right - left), maxWater);
      left++;
    } else {
      maxWater = Math.max(height[right] * (right - left), maxWater);
      right--;
    }
  }
  return maxWater;
};

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

/**
 * var maxArea = function (height) {
  let maxWater = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (height[i] < height[j]) {
        maxWater = Math.max(height[i] * (j - i), maxWater);
      } else {
        maxWater = Math.max(height[j] * (j - i), maxWater);
      }
    }
  }
  return maxWater;
};
 */

console.log(result);
