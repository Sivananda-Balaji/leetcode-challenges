//2774. Array Upper Bound

Array.prototype.upperBound = function (target) {
  let left = 0,
    right = this.length - 1,
    ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (this[mid] === target) {
      ans = mid;
      left = mid + 1;
    } else if (this[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

const target = 5;
const result = [3, 4, 5].upperBound(target);

console.log(result);
