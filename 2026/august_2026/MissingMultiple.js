//3718. Smallest Missing Multiple of K

var missingMultiple = function (nums, k) {
  const len = nums.length;
  let set = new Set(nums);
  for (let i = 1; i <= len + 1; i++) {
    if (!set.has(i * k)) {
      return i * k;
    }
  }
};

const nums = [8, 2, 3, 4, 6],
  k = 2;

const result = missingMultiple(nums, k);

console.log(result);
