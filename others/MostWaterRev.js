//11. Container With Most Water

var maxArea = function (height) {
  let maxVal = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    const finalWidth = right - left;
    const finalHeight = Math.min(height[left], height[right]);
    const area = finalHeight * finalWidth;
    maxVal = Math.max(area, maxVal);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxVal;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const result = maxArea(height);

console.log(result);
