//11. Container With Most Water

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let area = 0;
  while (left < right) {
    const currArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(currArea, area);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return area;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const result = maxArea(height);

console.log(result);
