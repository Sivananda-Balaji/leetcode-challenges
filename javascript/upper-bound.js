//2774. Array Upper Bound

Array.prototype.upperBound = function (target) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log([3, 4, 5].upperBound(5)); // 2
console.log([1, 4, 5].upperBound(2)); // -1
console.log([3, 4, 6, 6, 6, 6, 7].upperBound(6)); // 5
