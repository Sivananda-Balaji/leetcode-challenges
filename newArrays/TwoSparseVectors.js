//1570. Dot Product of Two Sparse Vectors
var SparseVector = function (nums) {
  this.nums = nums;
};

SparseVector.prototype.dotProduct = function (vec) {
  let value = 0;
  for (let i = 0; i < vec.nums.length; i++) {
    value += vec.nums[i] * this.nums[i];
  }
  return value;
};

let v1 = new SparseVector([1, 0, 0, 2, 3]);
let v2 = new SparseVector([0, 3, 0, 4, 0]);
let ans = v1.dotProduct(v2);

console.log(ans);
