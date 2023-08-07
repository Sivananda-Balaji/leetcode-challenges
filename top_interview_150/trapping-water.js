//42. Trapping Rain Water

var trap = function (height) {
  let water = 0;
  const len = height.length;
  let leftMax = [];
  leftMax[0] = height[0];
  for (let j = 1; j < len; j++) {
    leftMax[j] = Math.max(leftMax[j - 1], height[j]);
  }
  let rightMax = [];
  rightMax[len - 1] = height[len - 1];
  for (let j = len - 2; j >= 0; j--) {
    rightMax[j] = Math.max(rightMax[j + 1], height[j]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return water;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const result = trap(height);
console.log(result);

/**
 * var trap = function (height) {
  let water = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = height[i];
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }
    let rightMax = height[i];
    for (let j = i + 1; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    water += Math.min(leftMax, rightMax) - height[i];
  }
  return water;
};
 */
