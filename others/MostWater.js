//11. Container With Most Water

var maxArea = function (height) {
  let ans = 0;
  (let = left = 0), (right = height.length - 1);
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    ans = Math.max(area, ans);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const result = maxArea(height);

console.log(result);
